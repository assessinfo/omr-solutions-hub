CREATE TABLE public.blog_posts (id uuid PRIMARY KEY, brand_id uuid NOT NULL, slug text NOT NULL UNIQUE, title text NOT NULL, excerpt text NOT NULL, content_html text NOT NULL, meta_title text NOT NULL, meta_description text NOT NULL, featured_image text, published_at timestamptz NOT NULL, source_sent_at timestamptz NOT NULL);
GRANT SELECT ON public.blog_posts TO anon, authenticated;
GRANT ALL ON public.blog_posts TO service_role;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published articles are public" ON public.blog_posts FOR SELECT TO anon, authenticated USING (true);
CREATE TABLE public.holo_webhook_events (delivery_id uuid PRIMARY KEY, event text NOT NULL, article_id uuid NOT NULL, received_at timestamptz NOT NULL DEFAULT now(), is_test boolean NOT NULL DEFAULT false);
GRANT ALL ON public.holo_webhook_events TO service_role;
ALTER TABLE public.holo_webhook_events ENABLE ROW LEVEL SECURITY;
CREATE FUNCTION public.apply_holo_article(p_payload jsonb) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
 INSERT INTO public.holo_webhook_events(delivery_id,event,article_id,is_test) VALUES ((p_payload->>'deliveryId')::uuid,p_payload->>'event',(p_payload->'article'->>'id')::uuid,(p_payload->>'test')::boolean) ON CONFLICT DO NOTHING;
 IF NOT FOUND OR (p_payload->>'test')::boolean THEN RETURN; END IF;
 INSERT INTO public.blog_posts(id,brand_id,slug,title,excerpt,content_html,meta_title,meta_description,featured_image,published_at,source_sent_at) VALUES ((p_payload->'article'->>'id')::uuid,(p_payload->'brand'->>'id')::uuid,p_payload->'article'->>'slug',p_payload->'article'->>'title',p_payload->'article'->>'excerpt',p_payload->'article'->>'contentHtml',p_payload->'article'->>'metaTitle',p_payload->'article'->>'metaDescription',p_payload->'article'->>'featuredImage',(p_payload->'article'->>'publishedAt')::timestamptz,(p_payload->>'sentAt')::timestamptz)
 ON CONFLICT (id) DO UPDATE SET title=excluded.title,excerpt=excluded.excerpt,content_html=excluded.content_html,meta_title=excluded.meta_title,meta_description=excluded.meta_description,featured_image=excluded.featured_image,source_sent_at=excluded.source_sent_at WHERE excluded.source_sent_at > blog_posts.source_sent_at;
END; $$;
REVOKE ALL ON FUNCTION public.apply_holo_article(jsonb) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.apply_holo_article(jsonb) TO service_role;