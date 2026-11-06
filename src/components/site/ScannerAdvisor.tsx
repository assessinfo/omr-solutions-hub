import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, LoaderCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { recommendScanner } from "@/lib/scanner-advisor.functions";

export function ScannerAdvisor() {
  const recommend = useServerFn(recommendScanner);
  const [busy, setBusy] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  return (
    <section className="border-y bg-secondary py-16" id="scanner-advisor">
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow inline-flex items-center gap-2"><Sparkles className="size-4" /> AI-powered selection</span>
          <h2 className="mt-4 text-3xl font-bold">Find your OMR scanner</h2>
          <form className="mt-8 space-y-5" onSubmit={async (event) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            setBusy(true); setError(""); setText("");
            try {
              const response = await recommend({ data: {
                volume: String(form.get("volume") ?? ""),
                forms: String(form.get("forms") ?? ""),
                requirements: String(form.get("requirements") ?? ""),
              } });
              setText(response.text); setError(response.error);
            } catch {
              setError("We couldn't get a recommendation. Please try again or contact our team.");
            } finally { setBusy(false); }
          }}>
            <div className="space-y-2"><label htmlFor="advisor-volume" className="text-sm font-semibold">Document volume & timeframe</label><Input id="advisor-volume" name="volume" required minLength={3} maxLength={500} disabled={busy} placeholder="e.g. 30,000 answer sheets in two working days" /></div>
            <div className="space-y-2"><label htmlFor="advisor-forms" className="text-sm font-semibold">Forms & paper</label><Textarea id="advisor-forms" name="forms" required minLength={3} maxLength={1500} disabled={busy} className="min-h-24" placeholder="e.g. A4 answer sheets, pencil marks, printed student IDs" /></div>
            <div className="space-y-2"><label htmlFor="advisor-requirements" className="text-sm font-semibold">Scanning requirements</label><Textarea id="advisor-requirements" name="requirements" required minLength={3} maxLength={1500} disabled={busy} className="min-h-24" placeholder="e.g. Read bubbles and QR codes, capture both sides, sort exceptions" /></div>
            <Button type="submit" size="lg" disabled={busy}>{busy ? <><LoaderCircle className="animate-spin motion-reduce:animate-none" /> Reviewing requirements…</> : <><Sparkles /> Recommend a scanner</>}</Button>
          </form>
        </div>
        <div className="min-w-0 border-t pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" aria-live="polite" aria-busy={busy}>
          <h3 className="text-xl font-semibold">Your recommendation</h3>
          {busy && <p className="mt-5 text-muted-foreground">Matching your volume, forms and capture requirements…</p>}
          {error && <p role="alert" className="mt-5 break-words text-destructive">{error}</p>}
          {text ? <><div className="mt-5 whitespace-pre-wrap break-words text-sm leading-relaxed">{text}</div><div className="mt-7 flex flex-wrap gap-3"><Button asChild><Link to="/contact">Confirm with our team <ArrowRight /></Link></Button><Button asChild variant="outline"><Link to="/products/$slug" params={{ slug: "sr8000-hybrid-scanner" }}>SR-8000 specifications</Link></Button></div></> : !busy && !error && <p className="mt-5 text-muted-foreground">No recommendation yet.</p>}
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">AI advice is provisional. Final selection depends on sample-form testing, configuration and a confirmed quote. Avoid including personal or student data.</p>
        </div>
      </div>
    </section>
  );
}