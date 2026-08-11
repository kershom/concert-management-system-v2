import { CheckCircle, Info, TriangleAlert, XCircle } from "lucide-react";
import type { ReactNode } from "react";

type AlertVariant =
    | "success"
    | "info"
    | "warning"
    | "error";

interface AlertProps {
    variant?: AlertVariant;
    title?: string;
    children: ReactNode;
    onClose?: () => void;
}

const variantStyles = {
    success: {
        container:
            "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        icon: CheckCircle,
    },
    info: {
        container:
            "border-blue-500/30 bg-blue-500/10 text-blue-400",
        icon: Info,
    },
    warning: {
        container:
            "border-amber-500/30 bg-amber-500/10 text-amber-400",
        icon: TriangleAlert,
    },
    error: {
        container:
            "border-red-500/30 bg-red-500/10 text-red-400",
        icon: XCircle,
    },
};

function Alert({
    variant = "info",
    title,
    children,
    onClose,
}: AlertProps) {
    const config = variantStyles[variant];
    const Icon = config.icon;

    return (
        <div
            role="alert"
            className={[
                "flex w-full items-start gap-3 rounded-[var(--radius-lg)]",
                "border p-4",
                config.container,
            ].join(" ")}
        >
            <Icon
                size={20}
                className="mt-0.5 shrink-0"
            />

            <div className="min-w-0 flex-1">
                {title && (
                    <p className="font-semibold">
                        {title}
                    </p>
                )}

                <div className="mt-1 text-sm opacity-90">
                    {children}
                </div>
            </div>

            {onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close alert"
                    className="shrink-0 text-current opacity-70 transition-opacity hover:opacity-100"
                >
                    ×
                </button>
            )}
        </div>
    );
}

export default Alert;