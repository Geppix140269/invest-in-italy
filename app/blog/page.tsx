import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/navigation';
import { Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Italian Investment Insights | Invest in Italy',
  description: 'Expert insights on Italian real estate, tax benefits, business opportunities, and investment strategies. Stay updated with the latest trends in Italian investment.',
};

export const revalidate = 60; // Revalidate every 60 seconds

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  publishedAt: string;
  author?: {
    name: string;
    image?: {
      asset: {
        _ref: string;
      };
    };
  };
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

export default async function BlogPage() {
  const posts: BlogPost[] = await getBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Navigation variant="solid" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Investment Insights
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Expert analysis, market trends, and actionable advice for investing in Italy&apos;s most promising opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="font-display text-3xl font-bold mb-4">No posts yet</h2>
              <p className="text-muted-foreground mb-8">
                Check back soon for expert insights on Italian investment opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`}>
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    {/* Featured Image */}
                    {post.mainImage && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={urlFor(post.mainImage).width(600).height(400).url()}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <CardHeader>
                      {/* Categories */}
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((category) => (
                            <Badge
                              key={category.slug.current}
                              variant="secondary"
                              className="bg-accent/10 text-accent hover:bg-accent/20"
                            >
                              {category.title}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <CardTitle className="font-display text-2xl group-hover:text-accent transition-colors">
                        {post.title}
                      </CardTitle>

                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </time>
                        </div>
                        {post.author && (
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author.name}</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    {post.excerpt && (
                      <CardContent>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardContent>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Ready to Invest in Italy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation with our team to explore personalized investment opportunities
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-md text-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
