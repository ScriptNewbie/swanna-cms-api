import React from "react";

export function Card({
    title,
    subtitle,
    content,
}: {
    title: string | React.ReactNode;
    subtitle?: string;
    content: React.ReactNode;
}) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white flex flex-col h-full">
            <div className="flex-grow">
                {typeof title === "string" ? (
                    <div className="font-bold text-xl mb-2">{title}</div>
                ) : (
                    title
                )}
                <p className="text-gray-600 text-sm mb-2">{subtitle}</p>
            </div>
            {content}
        </div>
    );
}
