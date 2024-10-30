'use client';
import React from 'react';

interface MinutesInputProps {
    selectedMinutes: number; // The currently selected minutes
    setSelectedMinutes: React.Dispatch<React.SetStateAction<number>>; // Function to update selected minutes
}

export function MinutesInput({ selectedMinutes, setSelectedMinutes }: MinutesInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        // Ensure the value is within acceptable range (0-9)
        if (value >= 0 && value <= 9) {
            setSelectedMinutes(value); // Update selected minutes
        }
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="minutes" className="mb-2">Minutes</label>
            <input
                className="border p-2 rounded-lg outline-none focus:border-blue-500 transition duration-300" // Stylish input
                type="number"
                id="minutes"
                name="minutes"
                value={selectedMinutes} // Controlled input
                onChange={handleChange} // Update on change
                required
                min="0"
                max="9" // Limit input to 9
            />
        </div>
    );
}
