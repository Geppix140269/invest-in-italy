import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

export async function LatestInsights() {
  // Fetch latest 3 blog posts from Sanity
  const allPosts = await getBlogPosts();
  const latestPosts = allPosts.slice(0, 3);

  // Fallback if no posts exist yet
  if (latestPosts.length === 0) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            badge: "Real Estate",
            title: "Italian Property Market Trends 2024",
            desc: "Analyzing the post-pandemic recovery and emerging opportunities in key Italian cities.",
            link: "/blog"
          },
          {
            badge: "Business",
            title: "Navigating Italian Business Culture",
            desc: "Essential insights for foreign investors entering the Italian market.",
            link: "/blog"
          },
          {
            badge: "Tax & Legal",
            title: "Tax Incentives for Foreign Investors",
            desc: "Understanding Italy's favorable tax regimes and investment incentives.",
            link: "/blog"
          }
        ].map((post, i) => (
          <Card key={i} className="group hover:shadow-xl transition-all duration-500 card-3d h-full opacity-50">
            <CardHeader>
              <Badge className="w-fit mb-3 shimmer">{post.badge}</Badge>
              <CardTitle className="font-display text-xl group-hover:text-accent transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription>{post.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={post.link}>
                <Button variant="ghost" className="group-hover:text-accent p-0 transition-all">
                  Coming Soon <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {latestPosts.map((post) => {
        // Get the first category or use a default
        const category = post.categories?.[0]?.title || "Insights";

        return (
          <Card key={post._id} className="group hover:shadow-xl transition-all duration-500 card-3d h-full">
            <CardHeader>
              <Badge className="w-fit mb-3 shimmer">{category}</Badge>
              <CardTitle className="font-display text-xl group-hover:text-accent transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.excerpt || "Read more to discover valuable insights..."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/blog/${post.slug.current}`}>
                <Button variant="ghost" className="group-hover:text-accent p-0 transition-all">
                  Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
