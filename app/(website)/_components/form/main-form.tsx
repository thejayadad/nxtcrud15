// MainForm.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useActionState } from "react";
import { ColorPicker } from './color-picker';
import { saveNote } from '@/lib/create-note';

interface Note {
    title: string;
    color: string;
    details: string; // Date as a string
    minutes: string; // Stored as a string
}

interface MainFormProps {
    selectedNote?: Note | null; // Accept null as well
}

export function MainForm({ selectedNote }: MainFormProps) {
    const [state, formAction] = useActionState(saveNote, null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null); // State for selected color
    const [title, setTitle] = useState('');
    const [minutes, setMinutes] = useState('');
    const [details, setDetails] = useState('');

    // Effect to pre-fill form when editing a note
    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
            setSelectedColor(selectedNote.color);
            setDetails(selectedNote.details);
            setMinutes(selectedNote.minutes);
        }
    }, [selectedNote]);

    return (
        <form className="h-full flex flex-col gap-6" action={formAction}>
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input
                    className="border rounded-lg p-2 outline-none"
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor} /> {/* Integrated ColorPicker */}

            <div className='flex flex-col'>
                <label htmlFor="minutes">Minutes</label>
                <input
                    className='border p-2 rounded-lg'
                    type="number"
                    id="minutes"
                    name="minutes"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    required
                    min="0"
                />
            </div>

            <div className="flex flex-col mb-4">
                <label htmlFor="details" className="mb-2 text-gray-700 font-medium">Event Date</label>
                <input
                    type="date"
                    id="details"
                    name="details"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                {selectedNote ? 'Update' : 'Save'} {/* Change button text based on action */}
            </button>
            <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
            </p>
        </form>
    );
}
