import React from "react";

export interface News {
    id: number;
    title: string;
    publicationDate: string; // or Date if you handle date parsing in TypeScript
    author: string;
    content: string;
}

export function News({ news }: { news: News }) {
    return (
        <div style={{ border: "sold 2px" }}>
            <b>{news.title}</b>
            <p>{news.content}</p>
        </div>
    );
}
