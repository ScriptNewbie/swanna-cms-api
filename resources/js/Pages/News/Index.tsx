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
            <NewForm author={auth.user.name} />
            <div className="p-3 grid grid-cols-4 gap-3">
                {news.map((news) => (
                    <News key={news.id} news={news} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
