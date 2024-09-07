import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { PageProps } from "@/types";
import { News } from "./News";
import { NewForm } from "./NewForm";
import { Head } from "@inertiajs/react";

export default function NewPage({ auth, news }: PageProps & { news: News[] }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Aktualności" />
            <NewForm author={auth.user.name} />
            <div className="p-3 grid grid-cols-4 gap-3">
                {news.map((news) => (
                    <News key={news.id} news={news} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
