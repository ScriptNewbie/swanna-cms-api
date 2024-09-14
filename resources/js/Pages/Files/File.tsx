import { useForm } from "@inertiajs/react";

export function File({ file }: { file: string }) {
    const { delete: destroy } = useForm();
    const handleDelete = () => {
        if (confirm(`Czy na pewno chesz usunąć plik ${file}?`)) {
            destroy(`/upload-files/${file}`);
        }
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white flex flex-col h-full">
            <div className="flex-grow">
                <a
                    href={"/files/" + file}
                    target="_blank"
                    className="font-bold text-xl mb-2 break-all"
                >
                    {file}
                </a>
            </div>
            <div className="flex justify-end mt-4">
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
