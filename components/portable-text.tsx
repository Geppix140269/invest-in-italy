import { PortableText as PortableTextReact } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface PortableTextProps {
  value: unknown;
}

const components = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string } }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(600).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display text-3xl font-bold mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display text-2xl font-bold mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="font-display text-xl font-bold mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-accent pl-4 italic my-6 text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: { value: { href: string }; children: React.ReactNode }) => {
      const target = value.href.startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-accent hover:underline font-semibold"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
};

export function PortableText({ value }: PortableTextProps) {
  return <PortableTextReact value={value} components={components} />;
}
