'use client';
import React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    children: React.ReactNode;  
}

export default function Button ({ disabled, children, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            disabled={disabled}
            className={clsx(
                "py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded",
                !disabled && 'hover:bg-gray-800 active:bg-gray-950',
                disabled && 'text-zinc-100'
            )}
        >
            {children}  
        </button>
    );
}
