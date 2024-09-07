import { FilePostForm } from "@/Components/FilePostForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function FileUpload({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Pliki" />
            <div className="p-4">
                <FilePostForm endpointUrl="/upload-files" />
            </div>
        </AuthenticatedLayout>
    );
}
