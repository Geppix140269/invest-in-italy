import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster response times
  token: process.env.SANITY_API_TOKEN, // Only needed for write operations
});

// Helper to build image URLs
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Example: Fetch blog posts
export async function getBlogPosts() {
  return sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{name, image},
      categories[]->{title, slug}
    }
  `);
}

// Example: Fetch single blog post
export async function getBlogPost(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      mainImage,
      publishedAt,
      author->{name, image, bio},
      categories[]->{title, slug}
    }
  `,
    { slug }
  );
}

// Example: Fetch property listings
export async function getProperties() {
  return sanityClient.fetch(`
    *[_type == "property"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      location,
      price,
      propertyType,
      bedrooms,
      bathrooms,
      squareMeters,
      images,
      excerpt,
      features,
      status
    }
  `);
}

// Example: Fetch single property
export async function getProperty(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "property" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      location,
      price,
      propertyType,
      bedrooms,
      bathrooms,
      squareMeters,
      images,
      description,
      features,
      amenities,
      status,
      virtualTour,
      contactAgent
    }
  `,
    { slug }
  );
}
