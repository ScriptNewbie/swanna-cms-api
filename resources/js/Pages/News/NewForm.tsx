import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

export function NewForm() {
    const { data, setData, post, errors, reset } = useForm({
        title: "",
        content: "",
        author: "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post("/news", {
            onSuccess: () => reset(), // Reset the form on success
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                {errors.title && <div>{errors.title}</div>}
            </div>

            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={data.content}
                    onChange={(e) => setData("content", e.target.value)}
                />
                {errors.content && <div>{errors.content}</div>}
            </div>

            <div>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    value={data.author}
                    onChange={(e) => setData("author", e.target.value)}
                />
                {errors.author && <div>{errors.author}</div>}
            </div>

            <button type="submit">Create Post</button>
        </form>
    );
}
