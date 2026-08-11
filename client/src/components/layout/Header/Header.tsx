import { Bell, Search } from "lucide-react";

interface HeaderProps {
    title?: string;
}

function Header({ title = "Dashboard" }: HeaderProps) {
    return (
        <header className="flex h-16 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6">
            <div>
                <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {title}
                </h2>
            </div>

            <div className="flex items-center gap-4">
                <button
                    type="button"
                    aria-label="Search"
                    className="rounded-[var(--radius-md)] p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-light)] hover:text-[var(--color-text-primary)]"
                >
                    <Search size={19} />
                </button>

                <button
                    type="button"
                    aria-label="Notifications"
                    className="relative rounded-[var(--radius-md)] p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-light)] hover:text-[var(--color-text-primary)]"
                >
                    <Bell size={19} />

                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[var(--color-error)]" />
                </button>

                <div className="h-8 w-px bg-[var(--color-border)]" />

                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                        KR
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-medium text-[var(--color-text-primary)]">
                            Admin
                        </p>

                        <p className="text-xs text-[var(--color-text-muted)]">
                            Administrator
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;