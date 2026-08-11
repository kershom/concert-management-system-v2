import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant =
    | "default"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "purple";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
    default:
        "bg-[var(--color-surface-light)] text-[var(--color-text-secondary)]",
    success:
        "bg-[var(--color-success)]/15 text-[var(--color-success)]",
    warning:
        "bg-[var(--color-warning)]/15 text-[var(--color-warning)]",
    error:
        "bg-[var(--color-error)]/15 text-[var(--color-error)]",
    info:
        "bg-[var(--color-info)]/15 text-[var(--color-info)]",
    purple:
        "bg-[var(--color-primary)]/15 text-[var(--color-primary)]",
};

function Badge({
    children,
    variant = "default",
    className = "",
    ...props
}: BadgeProps) {
    const classes = [
        "inline-flex items-center",
        "rounded-[var(--radius-full)]",
        "px-2.5 py-1",
        "text-xs font-medium",
        "whitespace-nowrap",
        variantStyles[variant],
        className,
    ].join(" ");

    return (
        <span className={classes} {...props}>
            {children}
        </span>
    );
}

export default Badge;