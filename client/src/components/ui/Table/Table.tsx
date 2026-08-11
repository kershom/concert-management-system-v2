import type { ReactNode } from "react";

interface TableColumn<T> {
    key: keyof T | string;
    header: string;
    render?: (row: T) => ReactNode;
}

interface TableProps<T extends object> {
    columns: TableColumn<T>[];
    data: T[];
    emptyMessage?: string;
}
function Table<T extends object>({
    columns,
    data,
    emptyMessage = "No data available.",
}: TableProps<T>) {
    return (
        <div className="w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-light)]">
                            {columns.map((column) => (
                                <th
                                    key={String(column.key)}
                                    className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]"
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-4 py-8 text-center text-sm text-[var(--color-text-muted)]"
                                >
                                    {emptyMessage}
                                </td>
                            </tr>
                        ) : (
                            data.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-surface-light)]/50"
                                >
                                    {columns.map((column) => (
                                        <td
                                            key={String(column.key)}
                                            className="px-4 py-3 text-sm text-[var(--color-text-primary)]"
                                        >
                                            {column.render
                                                ? column.render(row)
                                                : String(row[column.key as keyof T] ?? "")}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;