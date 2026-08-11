import type { SelectHTMLAttributes } from "react";

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    helperText?: string;
    options: SelectOption[];
}

function Select({
    label,
    error,
    helperText,
    options,
    id,
    name,
    required,
    className = "",
    ...props
}: SelectProps) {
    const selectId = id ?? name;

    return (
        <div className="flex w-full flex-col gap-2">
            {label && (
                <label
                    htmlFor={selectId}
                    className="text-sm font-medium text-[var(--color-text-primary)]"
                >
                    {label}
                    {required && (
                        <span className="ml-1 text-[var(--color-error)]">*</span>
                    )}
                </label>
            )}

            <select
                id={selectId}
                name={name}
                required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={
                    error
                        ? `${selectId}-error`
                        : helperText
                            ? `${selectId}-helper`
                            : undefined
                }
                className={[
                    "h-10 w-full appearance-none rounded-[var(--radius-md)]",
                    "border bg-[var(--color-surface)]",
                    "px-3 text-sm text-[var(--color-text-primary)]",
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
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {error ? (
                <p
                    id={`${selectId}-error`}
                    className="text-xs text-[var(--color-error)]"
                >
                    {error}
                </p>
            ) : helperText ? (
                <p
                    id={`${selectId}-helper`}
                    className="text-xs text-[var(--color-text-muted)]"
                >
                    {helperText}
                </p>
            ) : null}
        </div>
    );
}

export default Select;