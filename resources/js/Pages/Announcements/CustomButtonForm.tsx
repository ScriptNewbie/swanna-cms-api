import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export interface CustomButtonSettings {
    enabled: boolean;
    name: string;
    url: string;
}

interface CustomButtonFormProps {
    settings: CustomButtonSettings;
}

export default function CustomButtonForm({ settings }: CustomButtonFormProps) {
    const { data, setData, put, processing, errors } = useForm({
        enabled: settings.enabled,
        name: settings.name,
        url: settings.url,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put("/announcements/custom-button", {
            preserveScroll: true,
            onSuccess: () => {
                alert("Udało się!");
            },
        });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">
                Konfiguracja przycisku
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="enabled"
                        checked={data.enabled}
                        onChange={(e) => setData("enabled", e.target.checked)}
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                    />
                    <InputLabel htmlFor="enabled" className="ml-2">
                        Włącz przycisk
                    </InputLabel>
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Nazwa" />
                    <TextInput
                        id="name"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        placeholder="Plan kolędy"
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="url" value="URL" />
                    <TextInput
                        id="url"
                        type="url"
                        className="mt-1 block w-full"
                        value={data.url}
                        onChange={(e) => setData("url", e.target.value)}
                        placeholder="https://swanna.net.pl/pdf/koleda2025.pdf"
                    />
                    <InputError message={errors.url} className="mt-2" />
                </div>

                <div className="flex justify-end">
                    <PrimaryButton disabled={processing}>Zapisz</PrimaryButton>
                </div>
            </form>
        </div>
    );
}
