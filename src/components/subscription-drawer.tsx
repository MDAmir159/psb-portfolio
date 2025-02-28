// components/SubscriptionDrawer.tsx
import React from 'react';

interface SubscriptionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionDrawer: React.FC<SubscriptionDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-end">
      {/* Backdrop for blurring the background */}
      <div
        className="bg-gray-600 bg-opacity-50 fixed inset-0 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      {/* Drawer content */}
      <div className="bg-white w-96 p-6 z-10">
        <h2 className="text-2xl font-bold mb-4 text-black">Subscribe to Our Newsletter</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-start mb-5">Register here to receive updates featuring our newest content.</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="bg-color3 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionDrawer;