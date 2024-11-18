import React, {FormEvent} from "react";
import {useAppDispatch} from "@/app/hooks";

interface AddPostFormFields extends HTMLFormControlsCollection {
    postTitle: HTMLInputElement
    postContent: HTMLTextAreaElement
}

interface AddPostFormElements extends HTMLFormElement {
    readonly elements: AddPostFormFields;
}

export default function AddPostForm() {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
        e.preventDefault()

        const {elements} = e.currentTarget;
        const title = elements.postTitle.value;
        const content = elements.postContent.value;

        console.log('Values:', {title, content});

        // dispatch(AddPostForm({title: title, content: content}))

        e.currentTarget.reset();
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="postTitle" className="form-label">Title</label>
                <input id="postTitle" type="text" title="postTitle"/>
                <label htmlFor="postContent" className="form-label">Content</label>
                <input id="postContent" type="text" title="postContent"/>
                <button type="submit">Save</button>
            </form>
        </section>
    )
};