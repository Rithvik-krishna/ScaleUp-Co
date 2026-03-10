import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary: "bg-electric-blue text-dark-bg hover:bg-electric-blue-hover glow-effect hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,225,255,0.45)]",
        secondary: "bg-dark-surface text-white border border-gray-800 hover:border-gray-600 hover:bg-gray-900 hover:scale-[1.02]",
        outline: "border border-electric-blue text-electric-blue hover:bg-electric-blue/10 hover:scale-[1.02]",
        ghost: "hover:bg-dark-surface hover:text-white text-gray-400 hover:scale-[1.02]"
    };

    const sizes = {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-lg px-8 text-lg font-semibold",
        icon: "h-10 w-10"
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";
