import React from "react";
import { Card } from "./Card";

export function ActionsCard({
    title,
    subtitle,
    actions,
}: {
    title: string | React.ReactNode;
    subtitle?: string;
    actions: React.ReactNode | React.ReactNode[];
}) {
    return (
        <Card
            title={title}
            subtitle={subtitle}
            content={<div className="flex justify-end mt-4">{actions}</div>}
        />
    );
}
