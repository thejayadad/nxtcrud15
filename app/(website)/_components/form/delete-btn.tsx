// DeleteButton.tsx
'use client';
import React from 'react';
import { deleteNote } from "@/lib/delete-note";

export const DeleteButton = ({ id }: { id: string }) => {
    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form submission
        await deleteNote(id); // Call deleteNote with the id
        // Optionally trigger a state update or re-fetch notes here if necessary
    };

    return (
        <form onSubmit={handleDelete}>
            <button type="submit" className="rounded-sm border p-1 hover:bg-gray-100">
                Delete
            </button>
        </form>
    );
};
