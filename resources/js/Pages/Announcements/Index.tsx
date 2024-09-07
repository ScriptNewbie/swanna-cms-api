import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FilePostForm } from "../../Components/FilePostForm";
import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Announcements({ auth, nextAvailable }: PageProps) {
    const { put } = useForm();
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Ogłoszenia" />
            <div className="p-4 gap-2 flex flex-col">
                <h2>Ten tydzień</h2>
                <FilePostForm endpointUrl="/announcements" />
                <h2 className="mt-4">Następny</h2>
                <FilePostForm endpointUrl="/announcements/next" />
                {!!nextAvailable && (
                    <PrimaryButton
                        className="justify-center items-center"
                        onClick={() =>
                            put("/announcements/next-as-current", {
                                onSuccess: () => {
                                    alert("Udało się!");
                                },
                                onError: (e) => {
                                    alert(
                                        Object.values(e)?.[0] ||
                                            "Coś poszło nie tak!"
                                    );
                                },
                            })
                        }
                    >
                        Ogłoszenia z następnego tygodnia jako aktualne!
                    </PrimaryButton>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
