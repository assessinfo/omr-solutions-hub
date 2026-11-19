import { permitsOrdinaryAds, updateGoogleAdConsent } from "./ad-consent";

/** Google Ads account OMR Solutions Hub — tag and WhatsApp chat conversion copied from Google. */
export const GOOGLE_ADS_TRACKING_ID = "AW-18584870716";
export const WHATSAPP_CHAT_SEND_TO = "AW-18584870716/IyOXCPOQyrsdELy--p1F";

function gpcEnabled(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

/** Loads the Google tag only when advertising is permitted (basic consent route). */
export async function loadGoogleAds(): Promise<boolean> {
  if (gpcEnabled()) return false;
  const allowed = await permitsOrdinaryAds();
  if (!allowed) return false;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  updateGoogleAdConsent("granted");
  if (document.querySelector("script[data-google-ads]")) return true;
  window.gtag("set", "developer_id.dZjgwMW", true);
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_ADS_TRACKING_ID);
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GOOGLE_ADS_TRACKING_ID);
  script.async = true;
  script.dataset["googleAds"] = "";
  document.head.appendChild(script);
  return true;
}

/** Reports one "WhatsApp chat started" conversion when the visitor opens WhatsApp from the chat window. */
export async function reportWhatsAppChatStarted(): Promise<boolean> {
  const loaded = await loadGoogleAds();
  if (!loaded || !(await permitsOrdinaryAds())) return false;
  window.gtag?.("event", "conversion", { send_to: WHATSAPP_CHAT_SEND_TO });
  return true;
}
