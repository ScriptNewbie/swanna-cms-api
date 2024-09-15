import { MarkdownEditor } from "@/Components/MarkdownEditor";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

export function NewForm({ author }: { author: string }) {
    const { data, setData, post, errors, reset } = useForm({
        title: "",
        content: "",
        author,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post("/news", {
            onSuccess: () => reset(),
        });
    };
    return (
        <div className="p-3">
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
                            onChange={(e) => setData("title", e.target.value)}
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

                <div>
                    <input type="hidden" id="author" value={data.author} />
                    {errors.author && <div>{errors.author}</div>}
                </div>

                <button
                    type="submit"
                    className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Opublikuj
                </button>
            </form>
        </div>
    );
}
