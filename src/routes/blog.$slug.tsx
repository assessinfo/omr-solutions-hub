import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { seo } from "@/components/site/Blocks";
import { blogQuery } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ context, params }) => {
    const posts = await context.queryClient.ensureQueryData(blogQuery);
    const post = posts.find((item) => item.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    const title = loaderData?.meta_title || loaderData?.title || "Article";
    const head = seo(`${title} | OMR Solutions`, loaderData?.meta_description || loaderData?.excerpt || "OMR Solutions articles and insights.", `/blog/${loaderData?.slug || ""}`, "article");
    if (loaderData?.featured_image) head.meta.push({ property: "og:image", content: loaderData.featured_image }, { name: "twitter:image", content: loaderData.featured_image });
    return head;
  },
  component: BlogArticle,
});

function BlogArticle() {
  const post = Route.useLoaderData();
  return <article className="container-x py-16">
    <Link to="/news" className="font-semibold text-primary">← News & articles</Link>
    <header className="mx-auto mt-8 max-w-4xl">
      <p className="text-sm text-muted-foreground">{new Date(post.published_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</p>
      <h1 className="mt-3 text-3xl font-semibold md:text-5xl">{post.title}</h1>
      <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
      {post.featured_image && <img src={post.featured_image} alt={post.title} className="mt-8 aspect-video w-full rounded-lg object-cover" />}
    </header>
    <div className="mx-auto mt-10 max-w-3xl space-y-5 text-foreground [&_p]:my-5 [&_h1]:my-8 [&_h1]:text-3xl [&_h2]:my-7 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:my-5 [&_h3]:text-xl [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-primary [&_a]:underline [&_img]:my-8 [&_img]:max-w-full [&_table]:block [&_table]:overflow-x-auto" dangerouslySetInnerHTML={{ __html: post.content_html }} />
  </article>;
}