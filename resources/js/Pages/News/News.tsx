import React from "react";
import { useForm } from "@inertiajs/react";

export interface News {
    id: number;
    title: string;
    publicationDate: string;
    author: string;
    content: string;
}

export function News({ news }: { news: News }) {
    const { delete: destroy } = useForm();
    const handleDelete = () => {
        if (confirm(`Czy na pewno chesz usunąć artykuł z id ${news.id}?`)) {
            destroy(`/news/${news.id}`);
        }
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white flex flex-col h-full">
            <div className="flex-grow">
                <div className="font-bold text-xl mb-2">
                    {news.id} - {news.title}
                </div>
                <p className="text-gray-600 text-sm mb-2">
                    {new Date(news.publicationDate).toLocaleDateString()}{" "}
                    {news.author}
                </p>
            </div>
            <div className="flex justify-end mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2">
                    Edytuj
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                >
                    Usuń
                </button>
            </div>
        </div>
    );
}
