import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ButtonVariant = 'default' | 'ghost' | 'dark';
type ButtonSize = 'default' | 'icon';

export const buttonStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"],
            dark: [
                "bg-secondary-dark",
                "hover:bg-secondary-dark-hover",
                "text-secondary",
            ]
        },
        size: {
            default: [" rounded", "p-2"],
            icon: [
                "rounded-full",
                "w-10",
                "h-10",
                "flex",
                "items-center",
                "justify-center",
                "p-2.5",
            ],
        }
    },
})

interface ButtonProps {
    variant: ButtonVariant;
    size: ButtonSize;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void; 
}

export function Button({ variant = 'default', size = 'default', children, className, onClick }: ButtonProps) {
    const combinedClasses = twMerge(buttonStyles({ variant, size }), className || '');

    return (
    <button className={combinedClasses} onClick={onClick}>
        {children}
    </button>
    );
}