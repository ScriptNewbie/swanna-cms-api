import { ActionsCard } from "@/Components/ActionsCard";
import { useForm, Link } from "@inertiajs/react";

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
            destroy(`/news/${news.id}`, { preserveScroll: true });
        }
    };

    return (
        <ActionsCard
            title={`${news.id} - ${news.title}`}
            subtitle={`${new Date(news.publicationDate).toLocaleDateString()} ${
                news.author
            }`}
            actions={[
                <Link
                    href={`/news/${news.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2"
                >
                    Edytuj
                </Link>,
                <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                >
                    Usuń
                </button>,
            ]}
        />
    );
}
