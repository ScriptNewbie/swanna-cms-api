import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FilePostForm } from "../../Components/FilePostForm";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Announcements({ auth }: PageProps) {
    const { put } = useForm();
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="p-4 gap-2 flex flex-col">
                <h2>Ten tydzień</h2>
                <FilePostForm endpointUrl="/announcements" />
                <h2 className="mt-4">Następny</h2>
                <FilePostForm endpointUrl="/announcements/next" />
                <PrimaryButton
                    className="justify-center items-center"
                    onClick={() => put("/announcements/next-as-current")}
                >
                    Ogłoszenia z następnego tygodnia jako aktualne!
                </PrimaryButton>
            </div>
        </AuthenticatedLayout>
    );
}
