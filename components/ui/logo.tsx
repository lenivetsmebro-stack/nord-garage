import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      aria-label="NORD GARAGE — главная"
      className={`inline-flex items-baseline gap-2 font-semibold tracking-[-0.03em] ${className}`}
      href="/"
    >
      <span className="text-lg sm:text-xl">NORD</span>
      <span className="text-xs tracking-[0.24em] text-muted">GARAGE</span>
    </Link>
  );
}
