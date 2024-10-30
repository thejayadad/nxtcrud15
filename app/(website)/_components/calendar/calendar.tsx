'use client';
import React, { useState } from 'react';

interface Note {
    title: string;
    color: string;
    details: string; // Assuming this is the date in string format
}

interface CalendarProps {
    notes: Note[];
}

export function Calendar({ notes }: CalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Function to change the month
    const changeMonth = (increment: number) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + increment);
        setCurrentDate(newDate);
    };

    // Get the start of the month and calculate the first day of the month
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startDay = startOfMonth.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Get the total days in the current month
    const totalDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Create an array for the days in the month, padded with empty days at the start
    const daysArray: (number | null)[] = Array(startDay).fill(null) // Empty spaces for previous month days
        .concat(Array.from({ length: totalDaysInMonth }, (_, i) => i + 1)); // Days in current month

    // Prepare a map of colors based on notes
    const notesMap = notes.reduce((acc: Record<number, string>, note) => {
        const noteDate = new Date(note.details).getDate(); // Extract day from note's date string
        acc[noteDate] = note.color; // Map the day to the note color
        return acc;
    }, {});

    // Render the calendar
    return (
        <div className="p-4 rounded-md max-w-screen-sm mx-auto pt-2">
            <p className='text-center mb-6 font-light leading-loose text-gray-600'>Below are the dates events are tracked</p>
            <header className="flex justify-between items-center mb-4">
                <button onClick={() => changeMonth(-1)} className="px-2 py-1 bg-gray-600 text-white rounded">
                    Prev
                </button>
                <h2 className="text-xl text-gray-600 font-bold">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
                <button onClick={() => changeMonth(1)} className="px-2 py-1 bg-gray-600 text-white rounded">
                    Next
                </button>
            </header>
            <div className="grid grid-cols-7 gap-2 text-center">
            {daysArray.map((day, index) => (
                    <div
                        key={index}
                        className={`p-1 border rounded-md    ${day !== null ? 'bg-white' : 'bg-transparent'}`}
                        style={{ backgroundColor: notesMap[day! - 1] || 'transparent' }} // Add one to day
                    >
                        {day}
                    </div>
                ))} 
            </div>
        </div>
    );
}
