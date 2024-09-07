import { useState } from "react";

export function DragAndDrop({ file, setFile, errors }: any) {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div
            className={`border-2 border-dashed rounded-lg p-6 ${
                dragging
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300 bg-white"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700 text-center"
            >
                {file
                    ? file.name
                    : "Upuść plik tutaj lub kliknij tutaj aby wybrać plik z dysku!"}
            </label>
            <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="hidden"
            />
            {errors && (
                <div className="mt-2 text-sm text-red-600 text-center">
                    {errors}
                </div>
            )}
        </div>
    );
}
