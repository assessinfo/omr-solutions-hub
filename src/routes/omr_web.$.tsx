import { createFileRoute, redirect } from "@tanstack/react-router";
import { legacyRedirect } from "@/lib/legacy-redirects";

// Old omrsolutions.com/omr_web/*.php URLs permanently redirect to the new pages
// so existing Google rankings and backlinks carry over.
export const Route = createFileRoute("/omr_web/$")({
  beforeLoad: ({ params }) => {
    throw redirect({ href: legacyRedirect(params._splat ?? ""), statusCode: 301 });
  },
});
