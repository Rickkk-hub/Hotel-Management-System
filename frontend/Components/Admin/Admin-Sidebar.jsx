import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Hotel,
  CalendarDays,
  BedDouble,
  Users,
  Settings,
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 lg:sticky bg-white shadow flex flex-col justify-between">
      {/* --- Logo Section --- */}
      <div>
        <div className="flex items-center gap-3 p-5 shadow">
          <div className="bg-gray-600 p-2 rounded-lg">
            <Hotel className="text-white" size={24} />
          </div>
          <h1 className="text-lg font-bold text-slate-800">RP Hotel</h1>
        </div>

        {/* --- Navigation Links --- */}
        <nav className="mt-4 px-3 flex flex-col gap-2">
          <SidebarItem icon={<Hotel className="text-green-500" size={18} />} label="Overview" href="/admindashboard" />
          <SidebarItem icon={<CalendarDays className="text-violet-500" size={18} />} label="Bookings" href="/Bookings" />
          <SidebarItem icon={<BedDouble className="text-blue-500" size={18} />} label="Rooms" href="/Rooms" />
          <SidebarItem icon={<Users className="text-red-500" size={18} />} label="Guests" href="/Guests" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" href="/Settings" />
        </nav>
      </div>

      {/* --- User Card --- */}
      <div className="p-4 shadow-[0_-5px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
            RP
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-800">Ricky Picardal</p>
            <p className="text-xs text-gray-500">Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, href }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
        isActive
          ? "bg-blue-50 text-blue-600 font-medium"
          : "text-gray-600 hover:bg-gray-100 duration-300"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

