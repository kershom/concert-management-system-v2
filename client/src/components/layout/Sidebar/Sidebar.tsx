import {
    CalendarDays,
    ChartNoAxesCombined,
    LayoutDashboard,
    LogOut,
    MapPin,
    Settings,
    Ticket,
    UserRound,
    Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
    {
        label: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        label: "Events",
        path: "/events",
        icon: CalendarDays,
    },
    {
        label: "Artists",
        path: "/artists",
        icon: Users,
    },
    {
        label: "Venues",
        path: "/venues",
        icon: MapPin,
    },
    {
        label: "Tickets",
        path: "/tickets",
        icon: Ticket,
    },
    {
        label: "Bookings",
        path: "/bookings",
        icon: ChartNoAxesCombined,
    },
    {
        label: "Users",
        path: "/users",
        icon: UserRound,
    },
    {
        label: "Settings",
        path: "/settings",
        icon: Settings,
    },
];

function Sidebar() {
    return (
        <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="flex h-16 items-center border-b border-[var(--color-border)] px-6">
                <div>
                    <h1 className="text-lg font-bold text-[var(--color-text-primary)]">
                        ConcertMS
                    </h1>

                    <p className="text-xs text-[var(--color-text-muted)]">
                        Management System
                    </p>
                </div>
            </div>

            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
                {navigationItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                [
                                    "flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5",
                                    "text-sm font-medium transition-colors duration-200",
                                    isActive
                                        ? "bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
                                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-light)] hover:text-[var(--color-text-primary)]",
                                ].join(" ")
                            }
                        >
                            <Icon size={18} />
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="border-t border-[var(--color-border)] p-4">
                <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-light)] hover:text-[var(--color-text-primary)]"
                >
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;