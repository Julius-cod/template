import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  return (
    <button 
      className={clsx(
        variant === 'primary' ? 'btn-primary' : 'btn-outline',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
