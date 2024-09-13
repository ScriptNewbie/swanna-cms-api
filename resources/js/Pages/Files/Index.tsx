import { FilePostForm } from "@/Components/FilePostForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";
import { File } from "./File";

export default function FileUpload({ auth, files }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Pliki" />
            <div className="p-4">
                <FilePostForm endpointUrl="/upload-files" />
            </div>
            <div className="p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {(files as []).map((file) => (
                    <File file={file} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
