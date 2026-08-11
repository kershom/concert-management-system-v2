export interface DashboardStat {
    title: string;
    value: string;
    change: string;
    changeType: "positive" | "negative" | "neutral";
    description: string;
}

export interface UpcomingConcert {
    id: number;
    name: string;
    artist: string;
    venue: string;
    date: string;
    ticketsSold: number;
    totalTickets: number;
    status: "On Sale" | "Selling Fast" | "Sold Out";
}

export interface RecentBooking {
    id: string;
    customer: string;
    concert: string;
    tickets: number;
    amount: string;
    status: "Confirmed" | "Pending" | "Cancelled";
}

export const dashboardStats: DashboardStat[] = [
    {
        title: "Total Concerts",
        value: "24",
        change: "+12%",
        changeType: "positive",
        description: "from last month",
    },
    {
        title: "Upcoming Events",
        value: "8",
        change: "+2",
        changeType: "positive",
        description: "this month",
    },
    {
        title: "Total Bookings",
        value: "1,248",
        change: "+18%",
        changeType: "positive",
        description: "from last month",
    },
    {
        title: "Revenue",
        value: "₹8.4L",
        change: "+15%",
        changeType: "positive",
        description: "from last month",
    },
];

export const upcomingConcerts: UpcomingConcert[] = [
    {
        id: 1,
        name: "Summer Beats",
        artist: "The Midnight Echo",
        venue: "Bangalore Arena",
        date: "Aug 18, 2026",
        ticketsSold: 1850,
        totalTickets: 2500,
        status: "Selling Fast",
    },
    {
        id: 2,
        name: "Rock Night",
        artist: "Electric Avenue",
        venue: "Phoenix Hall",
        date: "Aug 22, 2026",
        ticketsSold: 1200,
        totalTickets: 2000,
        status: "On Sale",
    },
    {
        id: 3,
        name: "Indie Fest",
        artist: "Various Artists",
        venue: "City Grounds",
        date: "Aug 28, 2026",
        ticketsSold: 3000,
        totalTickets: 3000,
        status: "Sold Out",
    },
    {
        id: 4,
        name: "Acoustic Evening",
        artist: "Aria Thomas",
        venue: "Grand Auditorium",
        date: "Sep 03, 2026",
        ticketsSold: 650,
        totalTickets: 1500,
        status: "On Sale",
    },
];

export const recentBookings: RecentBooking[] = [
    {
        id: "BK-1024",
        customer: "Rahul Sharma",
        concert: "Summer Beats",
        tickets: 2,
        amount: "₹3,998",
        status: "Confirmed",
    },
    {
        id: "BK-1023",
        customer: "Ananya Menon",
        concert: "Rock Night",
        tickets: 3,
        amount: "₹5,997",
        status: "Confirmed",
    },
    {
        id: "BK-1022",
        customer: "Arjun Kumar",
        concert: "Indie Fest",
        tickets: 1,
        amount: "₹2,499",
        status: "Pending",
    },
    {
        id: "BK-1021",
        customer: "Priya Nair",
        concert: "Acoustic Evening",
        tickets: 2,
        amount: "₹2,998",
        status: "Confirmed",
    },
    {
        id: "BK-1020",
        customer: "Vikram Das",
        concert: "Summer Beats",
        tickets: 4,
        amount: "₹7,996",
        status: "Cancelled",
    },
];