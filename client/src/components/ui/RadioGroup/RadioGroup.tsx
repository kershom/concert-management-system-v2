import type { ChangeEvent } from "react";

interface RadioOption {
    label: string;
    value: string;
    description?: string;
    disabled?: boolean;
}

interface RadioGroupProps {
    name: string;
    label?: string;
    options: RadioOption[];
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    orientation?: "vertical" | "horizontal";
    disabled?: boolean;
}

function RadioGroup({
    name,
    label,
    options,
    value,
    onChange,
    error,
    orientation = "vertical",
    disabled = false,
}: RadioGroupProps) {
    return (
        <fieldset className="w-full">
            {label && (
                <legend className="mb-3 text-sm font-medium text-[var(--color-text-primary)]">
                    {label}
                </legend>
            )}

            <div
                className={[
                    "flex gap-4",
                    orientation === "vertical"
                        ? "flex-col"
                        : "flex-row flex-wrap",
                ].join(" ")}
            >
                {options.map((option) => {
                    const optionId = `${name}-${option.value}`;
                    const isDisabled = disabled || option.disabled;

                    return (
                        <label
                            key={option.value}
                            htmlFor={optionId}
                            className={[
                                "flex items-start gap-3",
                                isDisabled
                                    ? "cursor-not-allowed opacity-50"
                                    : "cursor-pointer",
                            ].join(" ")}
                        >
                            <input
                                id={optionId}
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                disabled={isDisabled}
                                onChange={onChange}
                                aria-invalid={Boolean(error)}
                                className={[
                                    "mt-0.5 h-4 w-4 shrink-0",
                                    "accent-[var(--color-primary)]",
                                    "cursor-pointer",
                                    "disabled:cursor-not-allowed",
                                ].join(" ")}
                            />

                            <span className="flex flex-col gap-1">
                                <span className="text-sm font-medium text-[var(--color-text-primary)]">
                                    {option.label}
                                </span>

                                {option.description && (
                                    <span className="text-xs text-[var(--color-text-muted)]">
                                        {option.description}
                                    </span>
                                )}
                            </span>
                        </label>
                    );
                })}
            </div>

            {error && (
                <p className="mt-2 text-xs text-[var(--color-error)]">
                    {error}
                </p>
            )}
        </fieldset>
    );
}

export default RadioGroup;