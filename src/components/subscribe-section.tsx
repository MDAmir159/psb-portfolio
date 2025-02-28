"use client";
// components/SubscribeSection.tsx
import React, { useState } from 'react';
import SubscriptionDrawer from './subscription-drawer';

const SubscribeSection: React.FC = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const openDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);

    return (
        <div className="bg-sky-800 text-white p-10 text-center relative max-w-[79%] mx-auto mt-10 rounded-lg h-[40vh] flex align-middle justify-center flex-col">
            <h2 className="text-4xl font-bold mb-4">Stay up to date</h2>
            <p className="text-lg mb-6">Receive monthly updates on content you won’t want to miss</p>
            <div>
                <button
                    className="bg-color3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-[250px]"
                    onClick={openDrawer}
                >
                    Subscribe
                </button>

            </div>
            <SubscriptionDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        </div>
    );
};

export default SubscribeSection;