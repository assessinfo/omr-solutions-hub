import { beforeEach, describe, expect, it, vi } from "vitest";

function trace(country: string) {
  return `h=${location.hostname}\nloc=${country}\n`;
}

async function freshModules(country: string) {
  vi.resetModules();
  vi.stubGlobal("fetch", vi.fn(async () => new Response(trace(country), { status: 200 })));
  const consent = await import("@/lib/consent");
  const ads = await import("@/lib/google-ads");
  return { consent, ads };
}

describe("Google Ads WhatsApp chat conversion", () => {
  beforeEach(() => {
    localStorage.clear();
    document.head.querySelectorAll("script[data-google-ads]").forEach((s) => s.remove());
    (window as unknown as { dataLayer: unknown[] }).dataLayer = [];
    const gtag = vi.fn();
    (window as unknown as { gtag: unknown }).gtag = gtag;
  });

  it("reports the chat to the OMR Solutions Hub conversion for visitors in India", async () => {
    const { ads } = await freshModules("IN");
    expect(await ads.reportWhatsAppChatStarted()).toBe(true);
    expect(window.gtag).toHaveBeenCalledWith("event", "conversion", { send_to: "AW-18584870716/IyOXCPOQyrsdELy--p1F" });
  });

  it("sends nothing for an EU visitor who has not accepted advertising", async () => {
    const { ads } = await freshModules("DE");
    expect(await ads.reportWhatsAppChatStarted()).toBe(false);
    expect(window.gtag).not.toHaveBeenCalledWith("event", "conversion", expect.anything());
    expect(document.querySelector("script[data-google-ads]")).toBeNull();
  });

  it("sends nothing after a visitor in India rejects advertising", async () => {
    const { consent, ads } = await freshModules("IN");
    consent.saveChoices({ advertising: "denied" });
    expect(await ads.reportWhatsAppChatStarted()).toBe(false);
    expect(window.gtag).not.toHaveBeenCalledWith("event", "conversion", expect.anything());
  });

  it("reports for an EU visitor after they accept advertising", async () => {
    const { consent, ads } = await freshModules("FR");
    consent.saveChoices({ advertising: "granted" });
    expect(await ads.reportWhatsAppChatStarted()).toBe(true);
  });
});
