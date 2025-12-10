import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function GuestDashboard() {
  const navigate = useNavigate();

  // Check authentication on mount
  useEffect(() => {
    const userRaw = localStorage.getItem("user");
    const adminRaw = localStorage.getItem("Admin");
    
    let user = null;
    let admin = null;

    try {
      if (userRaw) user = JSON.parse(userRaw);
      if (adminRaw) admin = JSON.parse(adminRaw);
    } catch {
      localStorage.removeItem("user");
      localStorage.removeItem("Admin");
    }

    // If no user is logged in, redirect to login
    if (!user) {
      Swal.fire({
        title: "Access Denied!",
        text: "Please login as guest.",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login", { replace: true });
      return;
    }

    if (admin) {
      Swal.fire({
        title: "Admin Account Detected!",
        text: "Redirecting to admin dashboard.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/admindashboard", { replace: true });
      return;
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <p className="text-gray-600 mt-2">Manage your bookings and profile here.</p>
        
        {/* Add guest-specific content here */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="font-bold text-lg">My Bookings</h3>
            <p className="text-gray-500 mt-2">View and manage your reservations</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="font-bold text-lg">Profile</h3>
            <p className="text-gray-500 mt-2">Update your personal information</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="font-bold text-lg">Room Service</h3>
            <p className="text-gray-500 mt-2">Request additional services</p>
          </div>
        </div>
      </div>
    </div>
  );
}