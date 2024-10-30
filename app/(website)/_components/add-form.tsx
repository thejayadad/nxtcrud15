"use client";

import { useFormStatus } from "react-dom";
import { saveNote } from "@/lib/create-note"; // Adjust the import as necessary
import { useActionState } from "react";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            <span>{pending ? "Saving..." : "Save"}</span>
        </button>
    );
}

export function AddForm() {
    const [state, formAction] = useActionState(saveNote, null);

    return (
        <form action={formAction}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />

            <label htmlFor="color">Color</label>
            <input type="text" id="color" name="color" required />

            <label htmlFor="minutes">Minutes</label>
            <input type="number" id="minutes" name="minutes" required min="0" /> {/* Ensure it’s a non-negative integer */}

        
            <label htmlFor="note">Event Date</label>
        <input type="date" id="details" name="details" />
    
            <SubmitButton />
            <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
            </p>
        </form>
    );
}
