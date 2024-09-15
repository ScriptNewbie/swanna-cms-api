import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { PageProps, User as UserType } from "@/types";
import { Head } from "@inertiajs/react";
import { User } from "./User";

export default function NewPage({
    auth,
    users,
}: PageProps & { users: UserType[] }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Użytkownicy" />
            <div className="p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {users.map((user) => (
                    <User
                        disabled={auth.user.id === user.id}
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
