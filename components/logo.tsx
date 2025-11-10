import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  width?: number;
  height?: number;
}

export function Logo({
  className,
  imageClassName,
  showText = true,
  width = 40,
  height = 40
}: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <Image
        src="/brand/capitaly-group.svg"
        alt="Capitaly Group"
        width={width}
        height={height}
        className={cn("object-contain", imageClassName)}
        priority
      />
      {showText && (
        <span className="font-display text-xl font-semibold">
          Capitaly Group
        </span>
      )}
    </Link>
  );
}
