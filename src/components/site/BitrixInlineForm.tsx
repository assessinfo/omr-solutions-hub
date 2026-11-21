import { useEffect, useRef } from "react";

export function BitrixInlineForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-b24-form", "inline/13/1t2chc");
    script.setAttribute("data-b24-form-telemetry-sign", "v1:13:site.ca9182e60b6a93f22014c77664d9bc65e294244808beec4d694067369a48b27f");
    script.setAttribute("data-skip-moving", "true");
    script.src = `https://cdn.bitrix24.in/b1291759/crm/form/loader_13.js?${Math.floor(Date.now() / 180000)}`;
    container.appendChild(script);
    return () => { container.replaceChildren(); };
  }, []);
  return <div ref={containerRef} className="min-h-[680px] w-full rounded-lg border bg-card p-2" />;
}
