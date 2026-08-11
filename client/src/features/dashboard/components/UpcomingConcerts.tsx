import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import type { UpcomingConcert } from "../data/dashboardData";

interface UpcomingConcertsProps {
    concerts: UpcomingConcert[];
}

const statusVariants = {
    "On Sale": "info",
    "Selling Fast": "warning",
    "Sold Out": "error",
} as const;

function UpcomingConcerts({
    concerts,
}: UpcomingConcertsProps) {
    return (
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] p-5">
                <div>
                    <h2 className="font-semibold text-[var(--color-text-primary)]">
                        Upcoming Concerts
                    </h2>

                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        Your next scheduled events
                    </p>
                </div>

                <Button variant="ghost" size="sm">
                    View All
                </Button>
            </div>

            <div className="divide-y divide-[var(--color-border)]">
                {concerts.map((concert) => (
                    <div
                        key={concert.id}
                        className="flex flex-col gap-4 p-5 transition-colors hover:bg-[var(--color-surface-light)]/40 lg:flex-row lg:items-center lg:justify-between"
                    >
                        <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-medium text-[var(--color-text-primary)]">
                                    {concert.name}
                                </h3>

                                <Badge variant={statusVariants[concert.status]}>
                                    {concert.status}
                                </Badge>
                            </div>

                            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                                {concert.artist}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-4 text-xs text-[var(--color-text-muted)]">
                                <span className="flex items-center gap-1.5">
                                    <CalendarDays size={14} />
                                    {concert.date}
                                </span>

                                <span className="flex items-center gap-1.5">
                                    <MapPin size={14} />
                                    {concert.venue}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-6 lg:justify-end">
                            <div className="min-w-32">
                                <div className="mb-1 flex justify-between text-xs">
                                    <span className="text-[var(--color-text-muted)]">
                                        Tickets
                                    </span>

                                    <span className="font-medium text-[var(--color-text-secondary)]">
                                        {concert.ticketsSold.toLocaleString()} /{" "}
                                        {concert.totalTickets.toLocaleString()}
                                    </span>
                                </div>

                                <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-surface-light)]">
                                    <div
                                        className="h-full rounded-full bg-[var(--color-primary)]"
                                        style={{
                                            width: `${Math.min(
                                                (concert.ticketsSold / concert.totalTickets) * 100,
                                                100
                                            )}%`,
                                        }}
                                    />
                                </div>
                            </div>

                            <Button variant="secondary" size="sm">
                                Manage
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingConcerts;