import { DragAndDrop } from "@/Components/DragAndDrop";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

export function FilePostForm({ endpointUrl }: { endpointUrl: string }) {
    const { data, setData, post, errors, reset } = useForm({
        file: null as File | null,
        preserveScroll: true,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        if (data.file) {
            formData.append("file", data.file);
        }

        post(endpointUrl, {
            data: formData,
            onSuccess: () => {
                reset();
                alert("Udało się!");
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <DragAndDrop
                setFile={(file: File) => {
                    setData("file", file);
                }}
                file={data.file}
                errors={errors.file}
            />
            <button
                type="submit"
                className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Upload
            </button>
        </form>
    );
}
