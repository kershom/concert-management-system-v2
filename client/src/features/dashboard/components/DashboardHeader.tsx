import { Plus } from "lucide-react";
import { Button } from "../../../components/ui/Button";

function DashboardHeader() {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    Welcome back, Admin. Here's what's happening today.
                </p>
            </div>

            <Button>
                <Plus size={18} />
                Create Event
            </Button>
        </div>
    );
}

export default DashboardHeader;