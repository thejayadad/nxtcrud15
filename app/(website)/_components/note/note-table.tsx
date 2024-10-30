// NotesTable.tsx
'use client';
import React, { useState } from 'react';
import { SideDrawer } from '../drawer/side-drawer';
import { MainForm } from '../form/main-form';
import { DeleteButton } from '../form/delete-btn';

interface Note {
    id: string; // Assuming there's an id for each note
    title: string;
    color: string;
    details: string; // Date as a string
    minutes: string; // Stored as a string
}

interface NotesTableProps {
    notes: Note[]; // Array of notes to display
}

export function NotesTable({ notes }: NotesTableProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null); // State for the currently selected note

    const handleOpenDrawer = (note: Note) => {
        setSelectedNote(note); // Set the selected note to edit
        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
        setSelectedNote(null); // Clear the selected note when closing
    };

    return (
        <table className="max-w-screen-sm w-full mx-auto bg-white border border-gray-300">
            <thead>
                <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-4 border-b">Title</th>
                    <th className="py-2 px-4 border-b">Color</th>
                    <th className="py-2 px-4 border-b">Details (Date)</th>
                    <th className="py-2 px-4 border-b">Minutes</th>
                    <th className="py-2 px-4 border-b">Action</th>
                </tr>
            </thead>
            <tbody>
                {notes.map(note => (
                    <tr key={note.id} className="text-center">
                        <td className="py-2 px-4 border-b">{note.title}</td>
                        <td className="py-2 px-4 border-b" style={{ backgroundColor: note.color }}>
                            <span className="text-white">{note.color}</span>
                        </td>
                        <td className="py-2 px-4 border-b">{note.details}</td>
                        <td className="py-2 px-4 border-b">{note.minutes}</td>
                        <td className='flex items-center justify-center space-x-2'>
                            <button onClick={() => handleOpenDrawer(note)} className="text-gray-800">
                                Update
                            </button>
                            <SideDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                                <MainForm selectedNote={selectedNote} /> {/* Pass the selected note to the form */}
                            </SideDrawer>
                            <span>
                                <DeleteButton
                                    id={note.id}
                                    
                                />
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
