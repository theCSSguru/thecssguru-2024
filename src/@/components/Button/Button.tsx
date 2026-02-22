import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utilities';

export const Button = ({
  variant,
  href,
  className,
  children,
  onClick,
  newTab,
  type,
  disabled,
}: ButtonProps) => {
  const defaultStyles =
    'flex justify-center text-base font-light text-shadow whitespace-nowrap lg:text-lg py-4 px-10 rounded-full border border-white/25 drop-shadow-md border-b-0 transition-all duration-300';
  let variantStyles;
  if (variant === 'primary') {
    variantStyles = 'btn-primary';
  }
  if (variant === 'secondary') {
    variantStyles = 'btn-secondary';
  }
  if (href) {
    if (href && newTab) {
      return (
        <a
          href={href}
          className={cn(defaultStyles, variantStyles, className)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        className={cn(defaultStyles, variantStyles, className)}
        href={href}
        prefetch={false}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cn(defaultStyles, variantStyles, className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  newTab?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};
