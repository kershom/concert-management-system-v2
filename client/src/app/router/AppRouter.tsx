import { DashboardPage } from "../../features/dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../../components/layout/AppLayout";

function PlaceholderPage({ title }: { title: string }) {
    return (
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
                {title}
            </h1>

            <p className="mt-2 text-[var(--color-text-secondary)]">
                This page will be built in the next phase.
            </p>
        </div>
    );
}

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route
                        path="/"
                        element={<DashboardPage />}
                    />

                    <Route
                        path="/events"
                        element={<PlaceholderPage title="Events" />}
                    />

                    <Route
                        path="/artists"
                        element={<PlaceholderPage title="Artists" />}
                    />

                    <Route
                        path="/venues"
                        element={<PlaceholderPage title="Venues" />}
                    />

                    <Route
                        path="/tickets"
                        element={<PlaceholderPage title="Tickets" />}
                    />

                    <Route
                        path="/bookings"
                        element={<PlaceholderPage title="Bookings" />}
                    />

                    <Route
                        path="/users"
                        element={<PlaceholderPage title="Users" />}
                    />

                    <Route
                        path="/settings"
                        element={<PlaceholderPage title="Settings" />}
                    />

                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;