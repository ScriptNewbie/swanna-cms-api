import { FilePostForm } from "@/Components/FilePostForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function FileUpload({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="p-4">
                <FilePostForm endpointUrl="/upload-files" />
            </div>
        </AuthenticatedLayout>
    );
}
