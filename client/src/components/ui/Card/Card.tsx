import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    padding?: "none" | "sm" | "md" | "lg";
    variant?: "default" | "elevated" | "outlined";
}

const paddingStyles = {
    none: "p-0",
    sm: "p-3",
    md: "p-5",
    lg: "p-8",
};

const variantStyles = {
    default:
        "bg-[var(--color-surface)] border border-transparent",
    elevated:
        "bg-[var(--color-surface)] shadow-[var(--shadow-md)] border border-transparent",
    outlined:
        "bg-[var(--color-surface)] border border-[var(--color-border)]",
};

function Card({
    children,
    padding = "md",
    variant = "default",
    className = "",
    ...props
}: CardProps) {
    const classes = [
        "w-full rounded-[var(--radius-lg)]",
        paddingStyles[padding],
        variantStyles[variant],
        className,
    ].join(" ");

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
}

export default Card;