import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Strona główna" />

            <div className="flex justify-center items-center h-[50vh]">
                <div>
                    Poczekaj na zatwierdzenie twojego konta przez
                    administratora!
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
