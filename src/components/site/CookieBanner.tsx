import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { needsAnswer, onConsentChange, readChoice, saveChoices, type Purpose } from "@/lib/consent";
import { loadGoogleAds } from "@/lib/google-ads";

const PURPOSES: Purpose[] = ["analytics", "advertising"];
export const OPEN_COOKIE_SETTINGS = "open-cookie-settings";

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS));
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const [gpc, setGpc] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setGpc((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true);
    void needsAnswer(PURPOSES).then(setShowBanner);
    void loadGoogleAds();
    const off = onConsentChange(() => {
      void loadGoogleAds();
      void needsAnswer(PURPOSES).then(setShowBanner);
    });
    const open = () => {
      setAnalytics(readChoice("analytics") === "granted");
      setAdvertising(readChoice("advertising") === "granted");
      setSettingsOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, open);
    return () => {
      off();
      window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
    };
  }, []);

  useEffect(() => {
    if (showBanner) panelRef.current?.focus();
  }, [showBanner]);

  const answerAll = (choice: "granted" | "denied") => {
    saveChoices({ analytics: choice, advertising: choice });
    setShowBanner(false);
  };

  const saveSettings = () => {
    saveChoices({ analytics: analytics ? "granted" : "denied", advertising: advertising ? "granted" : "denied" });
    setSettingsOpen(false);
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div
          ref={panelRef}
          tabIndex={-1}
          role="region"
          aria-label="Cookie choices"
          className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-xl rounded-lg border bg-card p-5 text-card-foreground shadow-lift outline-none sm:bottom-5 sm:left-5 sm:right-auto"
        >
          <p className="text-sm font-semibold">Your privacy choices</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We count visits without cookies. If you accept, we also measure clicks and use advertising cookies to see which of our ads bring enquiries. Read our{" "}
            <Link to="/privacy-policy" className="font-medium text-primary underline-offset-4 hover:underline">privacy policy</Link>.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button className="flex-1" onClick={() => answerAll("granted")}>Accept all</Button>
            <Button className="flex-1" onClick={() => answerAll("denied")}>Reject all</Button>
            <Button variant="ghost" className="w-full sm:w-auto" onClick={openCookieSettings}>Cookie settings</Button>
          </div>
        </div>
      )}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cookie settings</DialogTitle>
            <DialogDescription>
              {gpc ? "Your browser's privacy signal is on, so analytics and advertising stay off." : "Choose what we may use. You can change this at any time."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">Necessary</p>
                <p className="text-xs text-muted-foreground">Keeps the site working and remembers these choices. Always on.</p>
              </div>
            </div>
            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="block text-sm font-semibold">Analytics, provided by Lovable</span>
                <span className="block text-xs text-muted-foreground">Measures clicks to improve the site.</span>
              </span>
              <Switch checked={!gpc && analytics} disabled={gpc} onCheckedChange={setAnalytics} aria-label="Analytics" />
            </label>
            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="block text-sm font-semibold">Advertising, provided by Google</span>
                <span className="block text-xs text-muted-foreground">Cookies that show which ads bring WhatsApp enquiries.</span>
              </span>
              <Switch checked={!gpc && advertising} disabled={gpc} onCheckedChange={setAdvertising} aria-label="Advertising" />
            </label>
          </div>
          <DialogFooter>
            <Button onClick={saveSettings} disabled={gpc}>Save choices</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
