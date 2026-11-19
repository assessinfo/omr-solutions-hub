import { createHmac, timingSafeEqual } from "node:crypto";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";

const httpsUrl = z.string().max(2048).url().refine((url) => url.startsWith("https://"));
export const holoPayload = z.object({
  event: z.enum(["article.published", "article.updated"]), test: z.boolean(), version: z.literal(1),
  deliveryId: z.string().uuid(), sentAt: z.string().datetime({ offset: true }),
  brand: z.object({ id: z.string().uuid(), name: z.string().max(500) }),
  article: z.object({
    id: z.string().uuid(), slug: z.string().min(1).max(180).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().min(1).max(500), excerpt: z.string().max(5000), contentHtml: z.string().min(1).max(1500000),
    contentMarkdown: z.string().max(1500000).optional(), metaTitle: z.string().max(500), metaDescription: z.string().max(5000),
    featuredImage: httpsUrl.nullable(), images: z.array(z.object({ url: httpsUrl, alt: z.string().max(1000) })).max(200).optional(),
    publishedAt: z.string().datetime({ offset: true }), isRepublish: z.boolean(),
  }),
});

export function verifyHoloSignature(body: Uint8Array, signature: string | null, secret: string) {
  if (!signature || !/^sha256=[a-f0-9]{64}$/.test(signature)) return false;
  const expected = `sha256=${createHmac("sha256", secret).update(body).digest("hex")}`;
  return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export function cleanArticleHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img"],
    allowedAttributes: { a: ["href", "title"], img: ["src", "alt", "width", "height"] },
    allowedSchemes: ["https", "mailto"], allowProtocolRelative: false,
  });
}

export async function readHoloBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("Empty body");
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 4 * 1024 * 1024) { await reader.cancel(); throw new Error("Body too large"); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return bytes;
}