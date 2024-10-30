'use client';
import React from 'react';

interface SideDrawerProps {
    children?: React.ReactNode; // Accept children
    isOpen: boolean; // Control visibility
    onClose: () => void; // Callback to close the drawer
}

export function SideDrawer({ children, isOpen, onClose }: SideDrawerProps) {
    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose} // Close on backdrop click
        >
            <div
                className={`fixed top-0 left-0 bg-white w-[480px] h-full shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the drawer
            >
                <div className='flex flex-col h-full'> {/* Set flex column and full height */}
                    <div className="p-4 border-b">
                        <h2 className="text-lg font-bold">Event Tracker</h2>
                    </div>
                    <div className="flex-grow p-4"> {/* Allow this section to grow and take up remaining space */}
                        {children} {/* Render children here */}
                    </div>
                    <footer className="p-4 border-t">
                        <p className="text-sm text-gray-600">By thejayadad @2024</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
