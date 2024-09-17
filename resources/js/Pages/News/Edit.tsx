import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { News } from "./News";
import { FormEvent } from "react";
import { MarkdownEditor } from "@/Components/MarkdownEditor";

export default function Edit({ auth, news }: PageProps & { news: News }) {
    const { data, setData, put, errors, reset } = useForm({
        title: news.title,
        content: news.content,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        put(`/news/${news.id}`, {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="p-4">
                Edytujesz artykuł: {news.id + " - " + news.title}
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Tytuł
                        </label>
                        <div>
                            <input
                                type="text"
                                id="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.title && (
                                <div className="text-sm text-red-600">
                                    {errors.title}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-2">
                        <MarkdownEditor
                            content={data.content}
                            setContent={(content: string) =>
                                setData("content", content)
                            }
                        />
                        {errors.content && (
                            <div className="text-sm text-red-600">
                                {errors.content}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Zapisz zmiany
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
