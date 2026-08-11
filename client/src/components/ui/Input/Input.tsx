import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

function Input({
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    id,
    className = "",
    ...props
}: InputProps) {
    const inputId = id ?? props.name;

    return (
        <div className="flex w-full flex-col gap-2">
            {label && (
                <label
                    htmlFor={inputId}
                    className="text-sm font-medium text-[var(--color-text-primary)]"
                >
                    {label}
                    {props.required && (
                        <span className="ml-1 text-[var(--color-error)]">*</span>
                    )}
                </label>
            )}

            <div className="relative flex items-center">
                {leftIcon && (
                    <span className="pointer-events-none absolute left-3 text-[var(--color-text-muted)]">
                        {leftIcon}
                    </span>
                )}

                <input
                    id={inputId}
                    aria-invalid={Boolean(error)}
                    aria-describedby={
                        error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
                    }
                    className={[
                        "h-10 w-full rounded-[var(--radius-md)]",
                        "border bg-[var(--color-surface)]",
                        "px-3 text-sm text-[var(--color-text-primary)]",
                        "placeholder:text-[var(--color-text-muted)]",
                        "outline-none transition-colors duration-200",
                        "focus:border-[var(--color-primary)]",
                        "focus:ring-2 focus:ring-[var(--color-primary)]/20",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        error
                            ? "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20"
                            : "border-[var(--color-border)]",
                        leftIcon ? "pl-10" : "",
                        rightIcon ? "pr-10" : "",
                        className,
                    ].join(" ")}
                    {...props}
                />

                {rightIcon && (
                    <span className="absolute right-3 text-[var(--color-text-muted)]">
                        {rightIcon}
                    </span>
                )}
            </div>

            {error ? (
                <p
                    id={`${inputId}-error`}
                    className="text-xs text-[var(--color-error)]"
                >
                    {error}
                </p>
            ) : helperText ? (
                <p
                    id={`${inputId}-helper`}
                    className="text-xs text-[var(--color-text-muted)]"
                >
                    {helperText}
                </p>
            ) : null}
        </div>
    );
}

export default Input;