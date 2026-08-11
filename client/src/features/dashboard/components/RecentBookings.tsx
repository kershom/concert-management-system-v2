import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import type { RecentBooking } from "../data/dashboardData";

interface RecentBookingsProps {
    bookings: RecentBooking[];
}

const statusVariants = {
    Confirmed: "success",
    Pending: "warning",
    Cancelled: "error",
} as const;

function RecentBookings({
    bookings,
}: RecentBookingsProps) {
    return (
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] p-5">
                <div>
                    <h2 className="font-semibold text-[var(--color-text-primary)]">
                        Recent Bookings
                    </h2>

                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        Latest ticket transactions
                    </p>
                </div>

                <Button variant="ghost" size="sm">
                    View All
                </Button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[var(--color-border)]">
                            <th className="px-5 py-3 text-xs font-medium text-[var(--color-text-muted)]">
                                Booking
                            </th>

                            <th className="px-5 py-3 text-xs font-medium text-[var(--color-text-muted)]">
                                Customer
                            </th>

                            <th className="px-5 py-3 text-xs font-medium text-[var(--color-text-muted)]">
                                Concert
                            </th>

                            <th className="px-5 py-3 text-xs font-medium text-[var(--color-text-muted)]">
                                Tickets
                            </th>

                            <th className="px-5 py-3 text-xs font-medium text-[var(--color-text-muted)]">
                                Amount
                            </th>

                            <th className="px-5 py-3 text-xs font-medium text-[var(--color-text-muted)]">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.map((booking) => (
                            <tr
                                key={booking.id}
                                className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-surface-light)]/40"
                            >
                                <td className="px-5 py-4 text-sm font-medium text-[var(--color-text-primary)]">
                                    {booking.id}
                                </td>

                                <td className="px-5 py-4 text-sm text-[var(--color-text-secondary)]">
                                    {booking.customer}
                                </td>

                                <td className="px-5 py-4 text-sm text-[var(--color-text-secondary)]">
                                    {booking.concert}
                                </td>

                                <td className="px-5 py-4 text-sm text-[var(--color-text-secondary)]">
                                    {booking.tickets}
                                </td>

                                <td className="px-5 py-4 text-sm font-medium text-[var(--color-text-primary)]">
                                    {booking.amount}
                                </td>

                                <td className="px-5 py-4">
                                    <Badge variant={statusVariants[booking.status]}>
                                        {booking.status}
                                    </Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecentBookings;