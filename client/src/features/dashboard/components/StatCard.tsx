import {
    ArrowDownRight,
    ArrowUpRight,
    Minus,
} from "lucide-react";
import type { DashboardStat } from "../data/dashboardData";

interface StatCardProps {
    stat: DashboardStat;
}

function StatCard({ stat }: StatCardProps) {
    const ChangeIcon =
        stat.changeType === "positive"
            ? ArrowUpRight
            : stat.changeType === "negative"
                ? ArrowDownRight
                : Minus;

    return (
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)]">
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                {stat.title}
            </p>

            <div className="mt-3 flex items-end justify-between gap-3">
                <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                    {stat.value}
                </p>

                <span
                    className={[
                        "flex items-center gap-0.5 text-xs font-semibold",
                        stat.changeType === "positive"
                            ? "text-[var(--color-success)]"
                            : stat.changeType === "negative"
                                ? "text-[var(--color-error)]"
                                : "text-[var(--color-text-muted)]",
                    ].join(" ")}
                >
                    <ChangeIcon size={14} />
                    {stat.change}
                </span>
            </div>

            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                {stat.description}
            </p>
        </div>
    );
}

export default StatCard;