import DashboardHeader from "./components/DashboardHeader";
import QuickActions from "./components/QuickActions";
import RecentBookings from "./components/RecentBookings";
import StatCard from "./components/StatCard";
import UpcomingConcerts from "./components/UpcomingConcerts";
import {
    dashboardStats,
    recentBookings,
    upcomingConcerts,
} from "./data/dashboardData";

function DashboardPage() {
    return (
        <div className="space-y-6">
            <DashboardHeader />

            <section
                aria-label="Dashboard statistics"
                className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
                {dashboardStats.map((stat) => (
                    <StatCard
                        key={stat.title}
                        stat={stat}
                    />
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
                <UpcomingConcerts concerts={upcomingConcerts} />

                <QuickActions />
            </section>

            <section>
                <RecentBookings bookings={recentBookings} />
            </section>
        </div>
    );
}

export default DashboardPage;