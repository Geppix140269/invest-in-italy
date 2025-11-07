import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';
import { PortableText } from '@/components/portable-text';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  body: unknown;
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
    bio?: unknown;
  };
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: BlogPost = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Invest in Italy Blog`,
    description: post.excerpt || `Read ${post.title} on Invest in Italy`,
    openGraph: post.mainImage
      ? {
          images: [urlFor(post.mainImage).width(1200).height(630).url()],
        }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post: BlogPost = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category) => (
              <Badge
                key={category.slug.current}
                className="bg-accent/10 text-accent hover:bg-accent/20"
              >
                {category.title}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Metadata */}
        <div className="flex items-center gap-6 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.image && (
                <Image
                  src={urlFor(post.author.image).width(40).height(40).url()}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div className="flex items-center gap-1">
                <User className="h-5 w-5" />
                <span>{post.author.name}</span>
              </div>
            </div>
          )}
        </div>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
            <Image
              src={urlFor(post.mainImage).width(1200).height(800).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 pb-20 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} />
        </div>

        {/* Author Bio */}
        {post.author && post.author.bio && (
          <div className="mt-16 p-8 bg-secondary/5 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              {post.author.image && (
                <Image
                  src={urlFor(post.author.image).width(80).height(80).url()}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              )}
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  About {post.author.name}
                </h3>
                <div className="text-muted-foreground">
                  <PortableText value={post.author.bio} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-accent/10 rounded-xl text-center">
          <h3 className="font-display text-2xl font-bold mb-4">
            Ready to Start Your Investment Journey?
          </h3>
          <p className="text-muted-foreground mb-6">
            Schedule a consultation with our team to explore personalized opportunities
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </article>
  );
}
