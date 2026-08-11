import type { InputHTMLAttributes } from "react";

interface SwitchProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    description?: string;
    error?: string;
}

function Switch({
    label,
    description,
    error,
    id,
    disabled,
    className = "",
    ...props
}: SwitchProps) {
    return (
        <div className="flex w-full flex-col gap-1.5">
            <label
                htmlFor={id}
                className={[
                    "flex items-center gap-3",
                    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                    className,
                ].join(" ")}
            >
                <span className="relative inline-flex shrink-0">
                    <input
                        id={id}
                        type="checkbox"
                        disabled={disabled}
                        role="switch"
                        className="peer sr-only"
                        {...props}
                    />

                    <span
                        className={[
                            "h-6 w-11 rounded-full",
                            "bg-[var(--color-surface-light)]",
                            "transition-colors duration-200",
                            "peer-checked:bg-[var(--color-primary)]",
                            "peer-focus-visible:ring-2",
                            "peer-focus-visible:ring-[var(--color-primary)]/40",
                            "after:absolute after:left-1 after:top-1",
                            "after:h-4 after:w-4 after:rounded-full",
                            "after:bg-white after:transition-transform after:duration-200",
                            "peer-checked:after:translate-x-5",
                        ].join(" ")}
                    />
                </span>

                {(label || description) && (
                    <span className="flex flex-col gap-1">
                        {label && (
                            <span className="text-sm font-medium text-[var(--color-text-primary)]">
                                {label}
                            </span>
                        )}

                        {description && (
                            <span className="text-xs text-[var(--color-text-muted)]">
                                {description}
                            </span>
                        )}
                    </span>
                )}
            </label>

            {error && (
                <p className="text-xs text-[var(--color-error)]">
                    {error}
                </p>
            )}
        </div>
    );
}

export default Switch;