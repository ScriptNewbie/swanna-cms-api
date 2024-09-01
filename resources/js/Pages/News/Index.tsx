import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { PageProps } from "@/types";
import { News } from "./News";
import { NewForm } from "./NewForm";

export default function NewPage({ auth, news }: PageProps & { news: News[] }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Aktualności
                </h2>
            }
        >
            <NewForm />
            {news.map((news) => (
                <News key={news.id} news={news} />
            ))}
        </AuthenticatedLayout>
    );
}
