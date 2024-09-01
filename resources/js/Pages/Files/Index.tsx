import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

export default function FileUpload({ auth }: PageProps) {
    const { data, setData, post, errors, reset } = useForm({
        file: null as File | null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        if (data.file) {
            formData.append("file", data.file);
        }
        post("/upload-files", {
            data: formData,
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="file"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Choose file to upload
                    </label>
                    <div className="mt-1">
                        <input
                            type="file"
                            id="file"
                            onChange={(e) =>
                                setData(
                                    "file",
                                    e.target.files ? e.target.files[0] : null
                                )
                            }
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                        />
                        {errors.file && (
                            <div className="mt-2 text-sm text-red-600">
                                {errors.file}
                            </div>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Upload
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
