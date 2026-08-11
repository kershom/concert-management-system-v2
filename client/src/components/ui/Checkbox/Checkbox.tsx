import type { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: ReactNode;
    description?: ReactNode;
    error?: string;
}

function Checkbox({
    label,
    description,
    error,
    id,
    disabled,
    className = "",
    ...props
}: CheckboxProps) {
    return (
        <div className="flex w-full flex-col gap-1.5">
            <label
                htmlFor={id}
                className={[
                    "flex items-start gap-3",
                    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                    className,
                ].join(" ")}
            >
                <input
                    id={id}
                    type="checkbox"
                    disabled={disabled}
                    aria-invalid={Boolean(error)}
                    aria-describedby={
                        error
                            ? `${id}-error`
                            : description
                                ? `${id}-description`
                                : undefined
                    }
                    className={[
                        "mt-0.5 h-4 w-4 shrink-0",
                        "accent-[var(--color-primary)]",
                        "cursor-pointer",
                        "disabled:cursor-not-allowed",
                    ].join(" ")}
                    {...props}
                />

                {(label || description) && (
                    <span className="flex flex-col gap-1">
                        {label && (
                            <span className="text-sm font-medium text-[var(--color-text-primary)]">
                                {label}
                            </span>
                        )}

                        {description && (
                            <span
                                id={`${id}-description`}
                                className="text-xs text-[var(--color-text-muted)]"
                            >
                                {description}
                            </span>
                        )}
                    </span>
                )}
            </label>

            {error && (
                <p
                    id={`${id}-error`}
                    className="text-xs text-[var(--color-error)]"
                >
                    {error}
                </p>
            )}
        </div>
    );
}

export default Checkbox;