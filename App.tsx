import React, { useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen w-full bg-black text-white font-['EB_Garamond'] selection:bg-red-900 selection:text-white overflow-hidden">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="w-full h-screen relative">
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
      </main>
    </div>
  );
}