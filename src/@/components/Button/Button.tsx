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
    'text-base whitespace-nowrap lg:text-lg py-4 px-10 rounded-full border border-white/25 lowercase drop-shadow-md border-b-0 transition-all';
  let variantStyles;
  if (variant === 'primary') {
    variantStyles = 'btn-primary';
  }
  if (variant === 'secondary') {
    variantStyles = 'btn-secondary';
  }
  if (href) {
    return (
      <Link
        className={cn(defaultStyles, variantStyles, className)}
        href={href}
        target={newTab ? '_blank' : '_self'}
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
