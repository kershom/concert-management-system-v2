import {
    CalendarPlus,
    MapPinPlus,
    Mic2,
    TicketPlus,
} from "lucide-react";
import { Button } from "../../../components/ui/Button";

const actions = [
    {
        label: "Create Event",
        icon: CalendarPlus,
    },
    {
        label: "Add Artist",
        icon: Mic2,
    },
    {
        label: "Add Venue",
        icon: MapPinPlus,
    },
    {
        label: "Create Ticket",
        icon: TicketPlus,
    },
];

function QuickActions() {
    return (
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)]">
            <h2 className="font-semibold text-[var(--color-text-primary)]">
                Quick Actions
            </h2>

            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                Frequently used actions
            </p>

            <div className="mt-5 grid gap-2">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <Button
                            key={action.label}
                            variant="secondary"
                            className="justify-start"
                        >
                            <Icon size={17} />
                            {action.label}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default QuickActions;