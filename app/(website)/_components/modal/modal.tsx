'use client';
import React from 'react';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void; // Callback to close the modal
    children?: React.ReactNode; // Accept children
}

export function Modal({ title, isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null; // If not open, don't render anything

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className='flex justify-between items-center'>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
                <button
                    onClick={onClose}
                    className="p-1 rounded-full bg-gray-500 text-white hover:bg-gray-600"
                >
                    X
                </button>
            </div>
                <div className="mb-4">{children}</div> 

            </div>
        </div>
    );
}
