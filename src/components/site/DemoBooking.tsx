import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CalendarCheck, CalendarDays, CheckCircle2, Clock, Loader2 } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { company } from "@/lib/content";
import {
  availableSlots, demoBookingSchema, demoProducts, formatDemoDate, formatSlotTime, productForPath,
  upcomingDemoDates, type DemoProduct,
} from "@/lib/demo-booking";
import { submitDemoBooking } from "@/lib/demo-booking.functions";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Ctx = { openDemo: (product?: DemoProduct) => void };
const DemoCtx = createContext<Ctx | null>(null);

export function useDemoBooking(): Ctx {
  const ctx = useContext(DemoCtx);
  if (!ctx) throw new Error("useDemoBooking must be used inside DemoBookingProvider");
  return ctx;
}

export function DemoBookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<DemoProduct | undefined>(undefined);
  const [session, setSession] = useState(0);
  const openDemo = useCallback((p?: DemoProduct) => {
    setProduct(p);
    setSession((s) => s + 1);
    setOpen(true);
  }, []);
  const value = useMemo(() => ({ openDemo }), [openDemo]);
  return (
    <DemoCtx.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] max-w-xl overflow-y-auto rounded-3xl p-0 sm:rounded-3xl">
          {open && <DemoForm key={session} initialProduct={product} onDone={() => setOpen(false)} />}
        </DialogContent>
      </Dialog>
    </DemoCtx.Provider>
  );
}

/** A button that opens the demo pop-up. Pass `product` to preselect what to demo. */
export function BookDemoButton({ product, children, onClick, ...props }: ButtonProps & { product?: DemoProduct }) {
  const { openDemo } = useDemoBooking();
  return (
    <Button type="button" {...props} onClick={(e) => { onClick?.(e); openDemo(product); }}>
      {children ?? (<><CalendarCheck /> Book a demo</>)}
    </Button>
  );
}

type Errors = Partial<Record<"name" | "phone" | "email" | "preferredAt" | "form", string>>;

function DemoForm({ initialProduct, onDone }: { initialProduct: DemoProduct | undefined; onDone: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const submit = useServerFn(submitDemoBooking);
  const dates = useMemo(() => upcomingDemoDates(new Date(), 10), []);
  const [form, setForm] = useState({ name: "", phone: "", email: "", website: "" });
  const [product, setProduct] = useState<DemoProduct>(initialProduct ?? productForPath(pathname));
  const [date, setDate] = useState<string>(dates[0] ?? "");
  const [slot, setSlot] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const slots = useMemo(() => (date ? availableSlots(date) : []), [date]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = demoBookingSchema.safeParse({ ...form, product, preferredAt: slot, pagePath: pathname });
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      if (!slot) next.preferredAt = "Please pick a time";
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const res = await submit({ data: parsed.data });
      if (res.ok) setDone(true);
      else setErrors({ form: res.error });
    } catch {
      setErrors({ form: "We couldn't send your request. Please try again or message us on WhatsApp." });
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="p-8 text-center sm:p-10">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-primary/10 text-primary"><CheckCircle2 className="size-8" /></div>
        <DialogTitle className="mt-5 text-2xl font-bold">Demo request received</DialogTitle>
        <DialogDescription className="mt-3 text-base">
          Thank you, {form.name.trim().split(" ")[0]}. You asked for a {product === "Not sure yet" ? "product" : product} demo on{" "}
          <strong className="text-foreground">{formatDemoDate(date, "long")} at {formatSlotTime(slot)} IST</strong>.
          Our team will contact you to confirm the time.
        </DialogDescription>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button onClick={onDone}>Done</Button>
          <Button asChild variant="outline">
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-4" /> {company.phone}</a>
          </Button>
        </div>
      </div>
    );
  }

  const field = (k: "name" | "phone" | "email") => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [k]: e.target.value }),
    "aria-invalid": errors[k] ? true : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="relative overflow-hidden rounded-t-3xl bg-ink px-6 pb-6 pt-7 sm:px-8">
        <div className="absolute -right-8 -top-8 h-40 w-40 bubble-dots opacity-50" aria-hidden />
        <DialogHeader className="relative text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary"><CalendarCheck className="size-3.5" /> Free live demo</span>
          <DialogTitle className="mt-3 text-2xl font-bold text-ink-foreground">Book a demo</DialogTitle>
          <DialogDescription className="text-ink-muted">Pick a time that suits you. Demos run Monday to Friday, 10 AM to 6 PM India time.</DialogDescription>
        </DialogHeader>
      </div>

      <div className="space-y-5 px-6 py-6 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="demo-name">Full name</Label>
            <Input id="demo-name" autoComplete="name" placeholder="Your name" className="mt-1.5" {...field("name")} />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="demo-phone">Phone</Label>
            <Input id="demo-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" className="mt-1.5" {...field("phone")} />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div>
            <Label htmlFor="demo-email">Email</Label>
            <Input id="demo-email" type="email" autoComplete="email" placeholder="you@company.com" className="mt-1.5" {...field("email")} />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="demo-product">What would you like to see?</Label>
            <select
              id="demo-product"
              value={product}
              onChange={(e) => setProduct(e.target.value as DemoProduct)}
              className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {demoProducts.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>

        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-medium"><CalendarDays className="size-4 text-primary" /> Preferred date</legend>
          <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-1" role="radiogroup" aria-label="Preferred date">
            {dates.map((d) => {
              const [wd, ...rest] = formatDemoDate(d).split(" ");
              const active = d === date;
              return (
                <button
                  key={d}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  aria-label={formatDemoDate(d, "long")}
                  onClick={() => { setDate(d); setSlot(""); }}
                  className={`flex min-w-[4.5rem] shrink-0 flex-col items-center rounded-xl border px-3 py-2 text-center transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"}`}
                >
                  <span className={`text-[11px] font-semibold uppercase ${active ? "" : "text-muted-foreground"}`}>{wd?.replace(",", "")}</span>
                  <span className="font-display text-sm font-bold">{rest.join(" ")}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-medium"><Clock className="size-4 text-primary" /> Suggested times <span className="font-normal text-muted-foreground">(IST)</span></legend>
          <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4" role="radiogroup" aria-label="Preferred time">
            {slots.map((s) => {
              const active = s === slot;
              return (
                <button
                  key={s}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSlot(s)}
                  className={`rounded-lg border px-2 py-2 text-sm font-medium transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary hover:text-primary"}`}
                >
                  {formatSlotTime(s)}
                </button>
              );
            })}
          </div>
          {errors.preferredAt && <p className="mt-1 text-xs text-destructive">{errors.preferredAt}</p>}
        </fieldset>

        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />

        {errors.form && <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{errors.form}</p>}

        <Button type="submit" size="lg" className="w-full" disabled={sending}>
          {sending ? <><Loader2 className="animate-spin" /> Sending…</> : <><CalendarCheck /> Request this demo</>}
        </Button>
        <p className="text-center text-xs text-muted-foreground">We use these details only to arrange your demo. See our privacy policy.</p>
      </div>
    </form>
  );
}
