import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

const pageTitles: Record<string, string> = {
    "/": "Dashboard",
    "/events": "Events",
    "/artists": "Artists",
    "/venues": "Venues",
    "/tickets": "Tickets",
    "/bookings": "Bookings",
    "/users": "Users",
    "/settings": "Settings",
};

function AppLayout() {
    const location = useLocation();

    const title = pageTitles[location.pathname] ?? "Concert Management";

    return (
        <div className="flex min-h-screen bg-[var(--color-background)]">
            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">
                <Header title={title} />

                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AppLayout;