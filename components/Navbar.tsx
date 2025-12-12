import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface NavbarProps {
  activeTab: 'home' | 'about';
  setActiveTab: (tab: 'home' | 'about') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-end items-center mix-blend-difference">
      <div className="flex gap-8 text-lg italic">
        <button 
          onClick={() => setActiveTab('home')}
          className={clsx(
            "relative px-2 py-1 transition-colors duration-300 outline-none focus:outline-none",
            activeTab === 'home' ? "text-white" : "text-gray-500 hover:text-gray-300"
          )}
        >
          home
          {activeTab === 'home' && (
            <motion.div 
              layoutId="underline" 
              className="absolute bottom-0 left-0 w-full h-[1px] bg-red-800"
            />
          )}
        </button>
        <button 
          onClick={() => setActiveTab('about')}
          className={clsx(
            "relative px-2 py-1 transition-colors duration-300 outline-none focus:outline-none",
            activeTab === 'about' ? "text-white" : "text-gray-500 hover:text-gray-300"
          )}
        >
          about
          {activeTab === 'about' && (
            <motion.div 
              layoutId="underline" 
              className="absolute bottom-0 left-0 w-full h-[1px] bg-red-800"
            />
          )}
        </button>
      </div>
    </nav>
  );
};
