import {
    MDXEditor,
    UndoRedo,
    BoldItalicUnderlineToggles,
    toolbarPlugin,
    linkDialogPlugin,
    linkPlugin,
    CreateLink,
    MDXEditorMethods,
    listsPlugin,
    ListsToggle,
    StrikeThroughSupSubToggles,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

import React, { useEffect } from "react";

export function MarkdownEditor({
    content,
    setContent,
}: {
    content: string;
    setContent: (content: string) => void;
}) {
    const mdxEditorRef = React.useRef<MDXEditorMethods>(null);
    useEffect(() => {
        mdxEditorRef.current?.setMarkdown(content);
    }, [content, mdxEditorRef]);

    return (
        <>
            <MDXEditor
                ref={mdxEditorRef}
                className="markdowneditor rounded p-1 bg-white border"
                contentEditableClassName="h-72"
                markdown={content}
                onChange={setContent}
                plugins={[
                    linkDialogPlugin(),
                    linkPlugin(),
                    listsPlugin(),
                    toolbarPlugin({
                        toolbarContents: () => (
                            <>
                                <UndoRedo />
                                <BoldItalicUnderlineToggles
                                    options={["Bold", "Italic"]}
                                />
                                <StrikeThroughSupSubToggles
                                    options={["Strikethrough"]}
                                />
                                <CreateLink />
                                <ListsToggle options={["bullet", "number"]} />
                            </>
                        ),
                    }),
                ]}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-2"
            />
        </>
    );
}
