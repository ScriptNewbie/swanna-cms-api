import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

interface AppConfig {
    id: number;
    version: string;
}

interface AppConfigProps extends PageProps {
    config: AppConfig;
}

export default function AppConfigIndex({ auth, config }: AppConfigProps) {
    const { data, setData, put, processing, errors } = useForm({
        version: config.version,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put("/app-config", {
            preserveScroll: true,
            onSuccess: () => {
                alert("Udało się!");
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Konfiguracja aplikacji" />
            <div className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-6">
                        Konfiguracja aplikacji
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <InputLabel htmlFor="version" value="Wersja" />
                            <TextInput
                                id="version"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.version}
                                onChange={(e) =>
                                    setData("version", e.target.value)
                                }
                                placeholder="1.0.0"
                            />
                            <InputError
                                message={errors.version}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex justify-end">
                            <PrimaryButton disabled={processing}>
                                Zapisz
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

