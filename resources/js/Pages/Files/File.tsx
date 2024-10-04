import { ActionsCard } from "@/Components/ActionsCard";
import { useForm } from "@inertiajs/react";

export function File({ file }: { file: string }) {
    const { delete: destroy } = useForm();
    const handleDelete = () => {
        if (confirm(`Czy na pewno chesz usunąć plik ${file}?`)) {
            destroy(`/upload-files/${file}`, { preserveScroll: true });
        }
    };

    return (
        <ActionsCard
            title={
                <a
                    href={"/files/" + file}
                    target="_blank"
                    className="font-bold text-xl mb-2 break-all"
                >
                    {file}
                </a>
            }
            actions={
                <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                >
                    Usuń
                </button>
            }
        />
    );
}
