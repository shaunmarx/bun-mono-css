import React from 'react';
import {cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(["border-gray-50 px-4 py-2 text-white sm:px-8 sm:py-3"], {
    variants: {
        intent: {
            primary: ["bg-blue-500", "hover:bg-sky-800"],
            secondary: ["bg-red-400", "hover:bg-red-800"]
        }
    }
});


type ButtonStyleVariants = Exclude<VariantProps<typeof buttonStyles>["intent"], null | undefined>;

export interface ButtonProps {
    variant: ButtonStyleVariants;
    children: React.ReactNode;
    onClick: React.MouseEventHandler;
}

export const Button = ({ children, onClick, variant }: ButtonProps) => {
    return <button className={ buttonStyles({ intent: variant })}  onClick={onClick}>{children}</button>
}