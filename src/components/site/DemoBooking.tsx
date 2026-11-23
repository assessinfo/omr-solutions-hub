import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CalendarCheck, CalendarDays, CheckCircle2, Clock, FileStack, GraduationCap, Loader2, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { company } from "@/lib/content";
import {
  demoBookingSchema, demoSolutions, formatDemoDate, formatSlotTime, istSlotInstant, productForPath,
  solutionForProduct, upcomingDemoDates, type DemoProduct, type DemoSolution,
} from "@/lib/demo-booking";
import { getDemoHosts, getDemoSlots, submitDemoBooking } from "@/lib/demo-booking.functions";
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
        <DialogContent className="max-h-[92vh] w-[calc(100%-1.5rem)] max-w-xl grid-cols-[minmax(0,1fr)] overflow-y-auto overflow-x-hidden rounded-3xl p-0 sm:rounded-3xl [&>button]:text-ink-foreground [&>button]:opacity-90">
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

type ErrKey = "name" | "phone" | "email" | "company" | "message" | "solution" | "salespersonId" | "date" | "time" | "form";
type Errors = Partial<Record<ErrKey, string>>;

const solutionInfo: Record<DemoSolution, { blurb: string; icon: typeof GraduationCap }> = {
  "Examination Services": { blurb: "OMR scanners, Remark, answer sheets, online exams", icon: GraduationCap },
  "Digitisation Services": { blurb: "Document scanning and ISDOX document management", icon: FileStack },
};

const initials = (name: string) => name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

function DemoForm({ initialProduct, onDone }: { initialProduct: DemoProduct | undefined; onDone: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const submit = useServerFn(submitDemoBooking);
  const loadHosts = useServerFn(getDemoHosts);
  const loadSlots = useServerFn(getDemoSlots);
  const queryClient = useQueryClient();
  const dates = useMemo(() => upcomingDemoDates(new Date(), 10), []);
  const product = initialProduct ?? productForPath(pathname);
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", message: "", website: "" });
  const [solution, setSolution] = useState<DemoSolution>(solutionForProduct(product));
  const [hostId, setHostId] = useState("");
  const [date, setDate] = useState<string>(dates[0] ?? "");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const hostsQ = useQuery({ queryKey: ["demo-hosts"], queryFn: () => loadHosts(), staleTime: 10 * 60_000 });
  const hosts = hostsQ.data?.hosts ?? [];
  const activeHost = hostId || hosts[0]?.id || "";
  const host = hosts.find((h) => h.id === activeHost);
  const slotsQ = useQuery({
    queryKey: ["demo-slots", activeHost, date],
    queryFn: () => loadSlots({ data: { salespersonId: activeHost, date } }),
    enabled: Boolean(activeHost && date),
    staleTime: 60_000,
  });
  const slots = slotsQ.data?.slots ?? [];
  const slotLabel = slots.find((s) => s.time === time)?.label ?? (time ? formatSlotTime(istSlotInstant(date, time)) : "");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = demoBookingSchema.safeParse({
      ...form, solution, salespersonId: activeHost, date, time,
      product: product === "Not sure yet" ? undefined : product, pagePath: pathname,
    });
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as ErrKey;
        if (key && !next[key]) next[key] = issue.message;
      }
      if (!time) next.time = "Please pick a time";
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const res = await submit({ data: parsed.data });
      if (res.ok) setDone(true);
      else {
        setErrors({ form: res.error });
        if ("taken" in res && res.taken) {
          setTime("");
          void queryClient.invalidateQueries({ queryKey: ["demo-slots", activeHost, date] });
        }
      }
    } catch {
      setErrors({ form: "We couldn't book your demo. Please try again or message us on WhatsApp." });
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="p-8 text-center sm:p-10">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-primary/10 text-primary"><CheckCircle2 className="size-8" /></div>
        <DialogTitle className="mt-5 text-2xl font-bold">Your demo is booked</DialogTitle>
        <DialogDescription className="mt-3 text-base">
          Thank you, {form.name.trim().split(" ")[0]}. Your {solution} demo{host ? ` with ${host.name}` : ""} is on{" "}
          <strong className="text-foreground">{formatDemoDate(date, "long")}, {slotLabel} IST</strong>.
          Details will be sent to {form.email.trim()}.
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

  const field = (k: "name" | "phone" | "email" | "company" | "message") => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value }),
    "aria-invalid": errors[k] ? true : undefined,
  });
  const err = (k: ErrKey) => errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>;
  const legend = "flex items-center gap-2 text-sm font-medium";

  return (
    <form onSubmit={onSubmit} noValidate className="min-w-0">
      <div className="relative overflow-hidden rounded-t-3xl bg-ink px-6 pb-6 pt-7 sm:px-8">
        <div className="absolute -right-8 -top-8 h-40 w-40 bubble-dots opacity-50" aria-hidden />
        <DialogHeader className="relative text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary"><CalendarCheck className="size-3.5" /> Free live demo</span>
          <DialogTitle className="mt-3 text-2xl font-bold text-ink-foreground">Book a demo</DialogTitle>
          <DialogDescription className="text-ink-muted">Choose a free slot with our team. Demos run Monday to Friday, 10 AM to 6 PM India time.</DialogDescription>
        </DialogHeader>
      </div>

      <div className="space-y-6 px-6 py-6 sm:px-8">
        <fieldset>
          <legend className={legend}>What would you like a demo of?</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2" role="radiogroup" aria-label="Solution">
            {demoSolutions.map((sol) => {
              const active = sol === solution;
              const Icon = solutionInfo[sol].icon;
              return (
                <button key={sol} type="button" role="radio" aria-checked={active} onClick={() => setSolution(sol)}
                  className={`flex items-start gap-3 rounded-xl border p-3 text-left transition-colors ${active ? "border-primary bg-primary/5 ring-1 ring-primary" : "bg-card hover:border-primary"}`}>
                  <span className={`grid size-9 shrink-0 place-items-center rounded-lg ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}><Icon className="size-4" /></span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{sol}</span>
                    <span className="block text-xs text-muted-foreground">{solutionInfo[sol].blurb}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className={legend}><UserRound className="size-4 text-primary" /> Who should run your demo?</legend>
          {hostsQ.isPending ? (
            <div className="mt-2 grid gap-2 sm:grid-cols-3">{[0, 1, 2].map((i) => <Skeleton key={i} className="h-16 rounded-xl" />)}</div>
          ) : hosts.length === 0 ? (
            <p className="mt-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{hostsQ.data?.error || "Online booking is unavailable right now. Please message us on WhatsApp."}</p>
          ) : (
            <div className="mt-2 grid gap-2 sm:grid-cols-3" role="radiogroup" aria-label="Demo host">
              {hosts.map((h) => {
                const active = h.id === activeHost;
                return (
                  <button key={h.id} type="button" role="radio" aria-checked={active} onClick={() => { setHostId(h.id); setTime(""); }}
                    className={`flex min-w-0 items-center gap-2.5 rounded-xl border p-2.5 text-left transition-colors ${active ? "border-primary bg-primary/5 ring-1 ring-primary" : "bg-card hover:border-primary"}`}>
                    <Avatar className="size-10 shrink-0">
                      {h.photo && <AvatarImage src={h.photo} alt="" className="object-cover" />}
                      <AvatarFallback className="bg-muted text-xs font-semibold">{initials(h.name)}</AvatarFallback>
                    </Avatar>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">{h.name}</span>
                      {h.position && <span className="block truncate text-[11px] text-muted-foreground">{h.position}</span>}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
          {err("salespersonId")}
        </fieldset>

        <fieldset>
          <legend className={legend}><CalendarDays className="size-4 text-primary" /> Date</legend>
          <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-1" role="radiogroup" aria-label="Demo date">
            {dates.map((d) => {
              const [wd, ...rest] = formatDemoDate(d).split(" ");
              const active = d === date;
              return (
                <button key={d} type="button" role="radio" aria-checked={active} aria-label={formatDemoDate(d, "long")}
                  onClick={() => { setDate(d); setTime(""); }}
                  className={`flex min-w-[4.5rem] shrink-0 flex-col items-center rounded-xl border px-3 py-2 text-center transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"}`}>
                  <span className={`text-[11px] font-semibold uppercase ${active ? "" : "text-muted-foreground"}`}>{wd?.replace(",", "")}</span>
                  <span className="font-display text-sm font-bold">{rest.join(" ")}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className={legend}><Clock className="size-4 text-primary" /> Free times <span className="font-normal text-muted-foreground">(IST)</span></legend>
          {!activeHost ? null : slotsQ.isPending ? (
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">{[0, 1, 2, 3, 4, 5].map((i) => <Skeleton key={i} className="h-10 rounded-lg" />)}</div>
          ) : slots.length === 0 ? (
            <p className="mt-2 rounded-lg bg-muted px-3 py-2.5 text-sm text-muted-foreground">
              {slotsQ.data?.error || "No free times on this day."} Please try another date{hosts.length > 1 ? " or person" : ""}.
            </p>
          ) : (
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3" role="radiogroup" aria-label="Demo time">
              {slots.map((s) => {
                const active = s.time === time;
                return (
                  <button key={s.time} type="button" role="radio" aria-checked={active} onClick={() => setTime(s.time)}
                    className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors sm:text-[13px] ${active ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary hover:text-primary"}`}>
                    {s.label}
                  </button>
                );
              })}
            </div>
          )}
          {err("time")}
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="demo-name">Full name</Label>
            <Input id="demo-name" autoComplete="name" placeholder="Your name" className="mt-1.5" {...field("name")} />
            {err("name")}
          </div>
          <div>
            <Label htmlFor="demo-company">Organisation <span className="font-normal text-muted-foreground">(optional)</span></Label>
            <Input id="demo-company" autoComplete="organization" placeholder="School, university or company" className="mt-1.5" {...field("company")} />
            {err("company")}
          </div>
          <div>
            <Label htmlFor="demo-phone">Phone</Label>
            <Input id="demo-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" className="mt-1.5" {...field("phone")} />
            {err("phone")}
          </div>
          <div>
            <Label htmlFor="demo-email">Email</Label>
            <Input id="demo-email" type="email" autoComplete="email" placeholder="you@company.com" className="mt-1.5" {...field("email")} />
            {err("email")}
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="demo-message">Anything we should know? <span className="font-normal text-muted-foreground">(optional)</span></Label>
            <Textarea id="demo-message" rows={3} placeholder="e.g. number of students, sheets per exam, documents to digitise" className="mt-1.5" {...field("message")} />
            {err("message")}
          </div>
        </div>

        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />

        {errors.form && <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{errors.form}</p>}

        <Button type="submit" size="lg" className="w-full" disabled={sending || hosts.length === 0}>
          {sending ? <><Loader2 className="animate-spin" /> Booking…</> : <><CalendarCheck /> Book this demo</>}
        </Button>
        <p className="text-center text-xs text-muted-foreground">We use these details only to arrange your demo. See our privacy policy.</p>
      </div>
    </form>
  );
}
