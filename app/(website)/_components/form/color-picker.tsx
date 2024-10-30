'use client';
import React from 'react';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF', '#33FFF2']; // Array of colors

interface ColorPickerProps {
    selectedColor: string | null;
    setSelectedColor: (color: string) => void; // Function to set the selected color
}

export function ColorPicker({ selectedColor, setSelectedColor }: ColorPickerProps) {
    return (
        <div>
                    <label htmlFor="color" className="block font-medium text-lg">Color</label>
                <div className='rounded-lg p-2 border bg-slate-50'>
<div className="flex space-x-2">
                {colors.map((color) => (
                    <div
                        key={color}
                        onClick={() => setSelectedColor(color)} // Handle color selection
                        className={`w-12 h-12 rounded-full cursor-pointer border-2 transition duration-300 ${
                            selectedColor === color ? 'border-black' : 'border-transparent'
                        }`}
                        style={{
                            backgroundColor: color,
                        }}
                    />
                ))}
            </div>
            <input hidden type="text" id="color" name="color" value={selectedColor || ''} readOnly className="mt-2 border rounded p-2" />
        </div>
        </div>
    );
}
