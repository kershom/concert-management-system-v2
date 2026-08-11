import type { TextareaHTMLAttributes } from "react";

interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

function Textarea({
    label,
    error,
    helperText,
    id,
    name,
    required,
    className = "",
    ...props
}: TextareaProps) {
    const textareaId = id ?? name;

    return (
        <div className="flex w-full flex-col gap-2">
            {label && (
                <label
                    htmlFor={textareaId}
                    className="text-sm font-medium text-[var(--color-text-primary)]"
                >
                    {label}
                    {required && (
                        <span className="ml-1 text-[var(--color-error)]">*</span>
                    )}
                </label>
            )}

            <textarea
                id={textareaId}
                name={name}
                required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={
                    error
                        ? `${textareaId}-error`
                        : helperText
                            ? `${textareaId}-helper`
                            : undefined
                }
                className={[
                    "min-h-32 w-full resize-y rounded-[var(--radius-md)]",
                    "border bg-[var(--color-surface)]",
                    "px-3 py-2.5 text-sm text-[var(--color-text-primary)]",
                    "placeholder:text-[var(--color-text-muted)]",
                    "outline-none transition-colors duration-200",
                    "focus:border-[var(--color-primary)]",
                    "focus:ring-2 focus:ring-[var(--color-primary)]/20",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    error
                        ? "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20"
                        : "border-[var(--color-border)]",
                    className,
                ].join(" ")}
                {...props}
            />

            {error ? (
                <p
                    id={`${textareaId}-error`}
                    className="text-xs text-[var(--color-error)]"
                >
                    {error}
                </p>
            ) : helperText ? (
                <p
                    id={`${textareaId}-helper`}
                    className="text-xs text-[var(--color-text-muted)]"
                >
                    {helperText}
                </p>
            ) : null}
        </div>
    );
}

export default Textarea;