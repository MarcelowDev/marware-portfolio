import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = "primary", href, children, className = "", ...props }: ButtonProps) {
  let baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-label-bold active:scale-95 transition-all text-sm uppercase tracking-widest ";
  
  if (variant === "primary") {
    baseClasses += "bg-primary-container text-on-primary-container lime-glow hover:shadow-[0_0_20px_rgba(199,242,117,0.4)]";
  } else if (variant === "secondary") {
    baseClasses += "bg-on-tertiary-container text-white hover:brightness-110";
  } else if (variant === "outline") {
    baseClasses += "border border-on-tertiary-container text-on-tertiary-container hover:bg-on-tertiary-container/10";
  }

  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
