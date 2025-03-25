export default function Header() {
    return (
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-4xl font-bold">WhatBytes</div>
  
        {/* Profile */}
        <div className="flex items-center gap-2 rounded-md border-1 border-gray-300">
          <img
            src="/rahil_siddique.webp" // Replace with actual image path
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold">Rahil Siddique</span>
        </div>
      </header>
    );
  }
  