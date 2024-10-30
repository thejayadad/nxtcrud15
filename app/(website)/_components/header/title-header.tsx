'use client';
import React, { useState } from 'react';
import { SideDrawer } from '../drawer/side-drawer';
import { MainForm } from '../form/main-form';

export function TitleHeader() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpenDrawer = () => setIsDrawerOpen(true);
    const handleCloseDrawer = () => setIsDrawerOpen(false);

    return (
        <header className="w-full flex justify-between items-center p-4">
            <nav className="flex justify-between items-center w-full">
                <p className="text-gray-700 font-medium leading-tight">Start Tracking Today!</p>
                <button onClick={handleOpenDrawer} className="px-2 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded">
                    Add Event
                </button>
            </nav>

            <SideDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                <MainForm />          
            </SideDrawer>
        </header>
    );
}
