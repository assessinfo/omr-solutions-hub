import { describe, expect, it } from "vitest";
import { createHmac } from "node:crypto";
import { cleanArticleHtml, verifyHoloSignature, holoPayload } from "@/lib/holo-webhook.server";

describe("Holo publishing security", () => {
  it("accepts an authentic raw-body HMAC", () => {
    const body = new TextEncoder().encode('{"test":true}');
    const signature = `sha256=${createHmac("sha256", "test-only-secret").update(body).digest("hex")}`;
    expect(verifyHoloSignature(body, signature, "test-only-secret")).toBe(true);
  });
  it("rejects changed article content", () => {
    const signature = `sha256=${createHmac("sha256", "test-only-secret").update("original").digest("hex")}`;
    expect(verifyHoloSignature(new TextEncoder().encode("tampered"), signature, "test-only-secret")).toBe(false);
  });
  it("rejects missing signatures", () => {
    expect(verifyHoloSignature(new Uint8Array(), null, "test-only-secret")).toBe(false);
  });
  it("removes scripts and unsafe image handlers", () => {
    expect(cleanArticleHtml('<p>Safe</p><script>alert(1)</script><img src="https://example.org/a.jpg" onerror="alert(1)"><a href="javascript:alert(1)">Link</a>')).toBe('<p>Safe</p><img src="https://example.org/a.jpg" /><a>Link</a>');
  });
  it("rejects incomplete external payloads", () => {
    expect(holoPayload.safeParse({ test: true }).success).toBe(false);
  });
});