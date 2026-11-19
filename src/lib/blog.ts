import { queryOptions } from "@tanstack/react-query";
import { getBlogPosts } from "./blog.functions";

export const blogQuery = queryOptions({ queryKey: ["blog-posts"], queryFn: () => getBlogPosts(), staleTime: 0 });