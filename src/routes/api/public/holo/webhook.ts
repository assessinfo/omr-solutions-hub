import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/api/public/holo/webhook")({
  staticData: { sitemap: false },
  server: { handlers: {
    GET: () => Response.json({ service: "OMR Solutions Holo publishing", method: "POST" }),
    POST: async ({ request }) => {
      const secret = process.env["HOLO_WEBHOOK_SECRET"];
      if (!secret) return Response.json({ message: "Signing secret not configured" }, { status: 503 });
      const { readHoloBody, verifyHoloSignature, holoPayload, cleanArticleHtml } = await import("@/lib/holo-webhook.server");
      let bytes: Uint8Array;
      try { bytes = await readHoloBody(request); }
      catch { return Response.json({ message: "Invalid or oversized body" }, { status: 413 }); }
      if (!verifyHoloSignature(bytes, request.headers.get("x-holo-signature"), secret)) return Response.json({ message: "Invalid signature" }, { status: 401 });
      let json: unknown;
      try { json = JSON.parse(new TextDecoder().decode(bytes)); }
      catch { return Response.json({ message: "Invalid JSON" }, { status: 400 }); }
      const result = holoPayload.safeParse(json);
      if (!result.success) return Response.json({ message: "Invalid article payload" }, { status: 400 });
      const payload = result.data;
      if (request.headers.get("x-holo-delivery") !== payload.deliveryId || request.headers.get("x-holo-event") !== payload.event) return Response.json({ message: "Delivery headers do not match" }, { status: 400 });
      payload.article.contentHtml = cleanArticleHtml(payload.article.contentHtml);
      try {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.rpc("apply_holo_article", { p_payload: payload });
        if (error) { console.error("Holo article persistence failed", error.code); return Response.json({ message: "Article could not be saved; retry delivery" }, { status: 500 }); }
      } catch { return Response.json({ message: "Article storage unavailable; retry delivery" }, { status: 500 }); }
      return Response.json(payload.test ? { message: "Test webhook received" } : { url: `${SITE_URL}/blog/${payload.article.slug}` });
    },
  } },
});