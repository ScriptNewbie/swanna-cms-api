import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function FileUpload({ auth }: PageProps) {
    const { data, setData, post, errors, reset } = useForm({
        file: null as File | null,
    });

    const [dragging, setDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setData("file", e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setData("file", e.target.files[0]);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        if (data.file) {
            formData.append("file", data.file);
        }
        post("/upload-files", {
            data: formData,
            onSuccess: () => {
                reset();
                alert("Udało się!");
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <form className="p-4" onSubmit={handleSubmit}>
                <div
                    className={`border-2 border-dashed rounded-lg p-6 ${
                        dragging
                            ? "border-indigo-500 bg-indigo-50"
                            : "border-gray-300 bg-white"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <label
                        htmlFor="file"
                        className="block text-sm font-medium text-gray-700 text-center"
                    >
                        {data.file
                            ? data.file.name
                            : "Upuść plik tutaj lub kliknij tutaj aby wybrać plik z dysku!"}
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    {errors.file && (
                        <div className="mt-2 text-sm text-red-600 text-center">
                            {errors.file}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Upload
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
