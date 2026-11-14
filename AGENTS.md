<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- Site content (solutions, products, clients, news) lives in `src/lib/content.ts`; solutions/products render via dynamic `$slug` routes and shared `DetailView` — add pages by adding data, not route files.
- Shared header/footer are rendered in `src/routes/__root.tsx`; every route uses the `seo()` helper from `src/components/site/Blocks.tsx` for its head metadata.
- Old `omrsolutions.com/omr_web/*` URLs 301-redirect via `src/routes/omr_web.$.tsx` + `src/lib/legacy-redirects.ts` to preserve existing Google rankings.
- Scanner advice uses a public validated server function and server-only AI Gateway Responses helpers; ground recommendations in catalogue data and never infer specifications from model numbers.
- Product-specific presentations use the shared DetailView hero/afterHero slots; Remark resource tabs contain local summaries rather than embedding third-party websites, so navigation stays on-site.
- The quote landing page embeds the externally hosted CRM form and offers its direct link as a fallback; submissions stay owned by the CRM rather than duplicating lead capture locally.
