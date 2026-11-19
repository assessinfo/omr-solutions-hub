import { describe, expect, it } from "vitest";
import { buildWhatsAppChatUrl } from "@/lib/whatsapp-chat";

describe("WhatsApp contact handoff", () => {
  it("addresses the listed company number, not the visitor's number", () => {
    const url = new URL(buildWhatsAppChatUrl("+91 93191 23429", "Hello"));
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/919319123429");
  });

  it("preserves the visitor's message including special characters", () => {
    const message = "I need 5,000 sheets/day & a quote for SR-8000.\nCan you help?";
    const url = new URL(buildWhatsAppChatUrl("+91 93191 23429", message));
    expect(url.searchParams.get("text")).toBe(message);
  });

  it("rejects blank messages", () => {
    expect(() => buildWhatsAppChatUrl("+91 93191 23429", "  ")).toThrow();
  });

  it("rejects invalid destination numbers", () => {
    expect(() => buildWhatsAppChatUrl("not-a-number", "Hello")).toThrow();
  });
});