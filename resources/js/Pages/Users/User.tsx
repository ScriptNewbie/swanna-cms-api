import { User as UserType } from "@/types";
import { useForm } from "@inertiajs/react";

export function User({
    user,
    disabled,
}: {
    user: UserType;
    disabled: boolean;
}) {
    const { delete: destroy, patch } = useForm();
    const handleDelete = () => {
        if (confirm(`Czy na pewno chesz usunąć użytkownika z id ${user.id}?`)) {
            destroy(`/users/${user.id}`, { preserveScroll: true });
        }
    };

    const handleMakeSuperAdmin = () => {
        if (
            confirm(
                `Czy na pewno chesz uczynić użytkownika z id ${user.id} super adminem?`
            )
        ) {
            patch(`/users/super-admin/${user.id}`, { preserveScroll: true });
        }
    };

    const handleMakeAdmin = () => {
        if (
            confirm(
                `Czy na pewno chesz uczynić użytkownika z id ${user.id} adminem?`
            )
        ) {
            patch(`/users/admin/${user.id}`, { preserveScroll: true });
        }
    };

    const handleDemote = () => {
        if (
            confirm(
                `Czy na pewno chesz zdegradować użytkownika z id ${user.id} do zwykłego użytkownika?`
            )
        ) {
            patch(`/users/demote/${user.id}`, { preserveScroll: true });
        }
    };

    const role = `${user.admin}`;
    return (
        <div className="max-w-md rounded overflow-hidden shadow-lg p-4 bg-white flex flex-col h-full">
            <div className="flex-grow">
                <div className="font-bold text-xl mb-2">
                    {user.id} - {user.name}
                </div>
                <p className="text-gray-600 text-sm mb-2">
                    {role in roleMap ? roleMap[role] : "Unknown role"} -{" "}
                    {user.email}
                </p>
            </div>
            <div className="flex justify-end mt-4 ">
                <div className="grid gap-1 grid-cols-2">
                    <button
                        disabled={disabled}
                        onClick={handleMakeAdmin}
                        className={`${
                            disabled
                                ? "bg-gray-500"
                                : "bg-red-500 hover:bg-red-700"
                        } text-white font-bold py-1 px-4 rounded`}
                    >
                        Admin
                    </button>
                    <button
                        disabled={disabled}
                        onClick={handleMakeSuperAdmin}
                        className={`${
                            disabled
                                ? "bg-gray-500"
                                : "bg-red-500 hover:bg-red-700"
                        } text-white font-bold py-1 px-4 rounded`}
                    >
                        Super admin
                    </button>
                    <button
                        disabled={disabled}
                        onClick={handleDemote}
                        className={`${
                            disabled
                                ? "bg-gray-500"
                                : "bg-red-500 hover:bg-red-700"
                        } text-white font-bold py-1 px-4 rounded`}
                    >
                        Zdegraduj
                    </button>
                    <button
                        disabled={disabled}
                        onClick={handleDelete}
                        className={`${
                            disabled
                                ? "bg-gray-500"
                                : "bg-red-500 hover:bg-red-700"
                        } text-white font-bold py-1 px-4 rounded`}
                    >
                        Usuń
                    </button>
                </div>
            </div>
        </div>
    );
}

const roleMap: Record<string, string> = {
    "0": "Użytkownik",
    "1": "Admin",
    "10": "Super Admin",
};
