import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="flex justify-center items-center h-[50vh]">
                <div>
                    Poczekaj na zatwierdzenie twojego konta przez
                    administratora!
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
