import React from "react";
import { Hotel, Info, UserSearch, UserPlus } from "lucide-react";


export default function HeaderGuestAdmin() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50 shadow-md">

      {/* parent div */}
      <div className="flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-2">
          <Hotel className="w-6 h-6 text-slate-800" />
          <h1 className="text-xl font-bold text-slate-600">RP Hotel</h1>
        </div>

        {/* Center Navigation Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2">

          <div className="flex items-center gap-6">

            <a href="/"
            className="relative flex text-center hover:text-gray-400 font-medium text-slate-600 rounded-md px-2 py-1 gap-1 transition-colors duration-200 overflow-hidden group">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>

            <a 
            className="relative flex text-center hover:text-gray-400 font-medium text-slate-600 rounded-md px-2 py-1 gap-1 transition-colors duration-200 overflow-hidden group">
              Service
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>

            <a
            className="relative flex text-center hover:text-gray-400 font-medium text-slate-600 rounded-md px-2 py-1 gap-1 transition-colors duration-200 overflow-hidden group">
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>

              <a className="relative flex text-center hover:text-gray-400 font-medium text-slate-600 rounded-md px-2 py-1 gap-1 transition-colors duration-200 overflow-hidden group">
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>
          </div>
        </div>

        {/* Right-side Auth Links */}
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="relative flex items-center text-center hover:text-gray-400 font-medium text-slate-600 rounded-md px-2 py-1 gap-2 transition-colors duration-200 overflow-hidden group"
          >
            <UserSearch className="w-4 h-4" />
            Sign In
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
          </a>

          <a
            href="/register"
            className="relative flex items-center text-center hover:text-gray-400 font-medium text-slate-600 rounded-md px-2 py-1 gap-2 transition-colors duration-200 overflow-hidden group"
          >
            <UserPlus className="w-4 h-4" />
            Sign Up
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
          </a>
        </div>

      </div>{/* parent div end */}

    </header>
  );
}