import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-black">S</span>
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900 leading-none group-hover:text-blue-700 transition-colors">
              SAIT
            </h1>
            <p className="text-xs text-gray-400 leading-none mt-0.5">Student Information</p>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Students
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            About
          </Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Navbar;