import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, FileText, Layers, Newspaper, Package, Search } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { getSearchArticles } from "@/lib/blog.functions";
import { buildSearchIndex, popularSearches, searchSite, type SearchKind } from "@/lib/site-search";
import { cn } from "@/lib/utils";

const groups: { kind: SearchKind; label: string; icon: typeof FileText }[] = [
  { kind: "Product", label: "Products", icon: Package },
  { kind: "Page", label: "Pages", icon: FileText },
  { kind: "Solution", label: "Solutions", icon: Layers },
  { kind: "Article", label: "Articles", icon: Newspaper },
];

export function SiteSearch({ className, compact = false, onOpen }: { className?: string; compact?: boolean; onOpen?: () => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const { data: articles, isFetching } = useQuery({
    queryKey: ["search-articles"],
    queryFn: () => getSearchArticles(),
    enabled: open,
    staleTime: 5 * 60_000,
  });

  const index = useMemo(() => buildSearchIndex(articles ?? []), [articles]);
  const results = useMemo(() => searchSite(index, query, 24), [index, query]);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    void navigate({ href });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => { onOpen?.(); setOpen(true); }}
        aria-label="Search the website"
        className={cn(
          compact
            ? "rounded-md p-2 text-foreground/80 hover:text-primary"
            : "flex h-9 min-w-9 items-center justify-center gap-2 rounded-full border bg-secondary px-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
          className,
        )}
      >
        <Search className={compact ? "size-5" : "size-4"} />
      </button>

      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setQuery(""); }}>
        <DialogContent className="top-[8%] w-[calc(100%-1.5rem)] max-w-xl rounded-2xl translate-y-0 gap-0 overflow-hidden p-0 sm:rounded-2xl">
          <DialogTitle className="sr-only">Search OMR Solutions</DialogTitle>
          <DialogDescription className="sr-only">Find products, pages and articles across the website.</DialogDescription>
          <Command shouldFilter={false} className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-input]]:h-14 [&_[cmdk-input]]:text-base">
            <CommandInput value={query} onValueChange={setQuery} placeholder="Search scanners, software, articles…" aria-label="Search" />
            <CommandList className="max-h-[60vh]">
              {query.trim() === "" ? (
                <CommandGroup heading="Popular">
                  {popularSearches.map((p) => (
                    <CommandItem key={p.href} value={p.href} onSelect={() => go(p.href)} className="cursor-pointer gap-3 py-2.5">
                      <ArrowRight className="size-4 text-primary" />
                      <span className="font-semibold">{p.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : (
                <>
                  <CommandEmpty>
                    {isFetching ? "Searching…" : <>No results for “{query}”. Try a product name like <b>SR-8000</b> or <b>Remark</b>.</>}
                  </CommandEmpty>
                  {groups.map((g) => {
                    const items = results.filter((r) => r.kind === g.kind);
                    if (!items.length) return null;
                    return (
                      <CommandGroup key={g.kind} heading={g.label}>
                        {items.map((r) => (
                          <CommandItem key={r.href} value={r.href} onSelect={() => go(r.href)} className="cursor-pointer items-start gap-3 py-2.5">
                            <g.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span className="min-w-0">
                              <span className="block font-semibold">{r.title}</span>
                              {r.description && <span className="line-clamp-1 text-xs text-muted-foreground">{r.description}</span>}
                            </span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    );
                  })}
                </>
              )}
            </CommandList>
            <div className="hidden items-center justify-between border-t bg-secondary px-4 py-2 text-xs text-muted-foreground sm:flex">
              <span>↑ ↓ to move · Enter to open · Esc to close</span>
              <span>Ctrl / ⌘ + K</span>
            </div>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
