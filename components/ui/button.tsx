import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "inverse" | "inverseOutline";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-accent-foreground hover:border-white hover:bg-white",
  secondary:
    "border-line bg-transparent text-foreground hover:border-accent hover:bg-surface-elevated",
  inverse:
    "border-accent-foreground bg-accent-foreground text-accent hover:border-surface-elevated hover:bg-surface-elevated",
  inverseOutline:
    "border-accent-foreground/30 bg-transparent text-accent-foreground hover:border-accent-foreground hover:bg-accent-foreground/5",
};

export function Button({
  children,
  className = "",
  href,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold transition-colors duration-300 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}
