import { useState, type ReactNode } from "react";

interface Tab {
    id: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
}

function Tabs({ tabs, defaultTab }: TabsProps) {
    const firstAvailableTab = tabs.find((tab) => !tab.disabled)?.id ?? "";

    const [activeTab, setActiveTab] = useState(
        defaultTab ?? firstAvailableTab
    );

    const currentTab = tabs.find((tab) => tab.id === activeTab);

    return (
        <div className="w-full">
            <div
                role="tablist"
                className="flex flex-wrap gap-1 border-b border-[var(--color-border)]"
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            disabled={tab.disabled}
                            onClick={() => setActiveTab(tab.id)}
                            className={[
                                "relative px-4 py-3 text-sm font-medium",
                                "transition-colors duration-200",
                                "disabled:cursor-not-allowed disabled:opacity-40",
                                isActive
                                    ? "text-[var(--color-primary)]"
                                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
                                isActive
                                    ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--color-primary)]"
                                    : "",
                            ].join(" ")}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            <div
                role="tabpanel"
                className="pt-5"
            >
                {currentTab?.content}
            </div>
        </div>
    );
}

export default Tabs;