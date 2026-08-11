import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]",
    secondary:
        "bg-[var(--color-secondary)] text-white hover:opacity-90",
    outline:
        "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]",
    ghost:
        "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]",
    danger:
        "bg-[var(--color-error)] text-white hover:opacity-90",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
};

function Button({
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    className = "",
    ...props
}: ButtonProps) {
    const classes = [
        "inline-flex items-center justify-center gap-2",
        "rounded-[var(--radius-md)]",
        "font-medium",
        "transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-[var(--color-primary)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
    ].join(" ");

    return (
        <button
            type="button"
            className={classes}
            disabled={disabled || isLoading}
            aria-busy={isLoading}
            {...props}
        >
            {isLoading ? "Loading..." : leftIcon}
            {!isLoading && children}
            {!isLoading && rightIcon}
        </button>
    );
}

export default Button;