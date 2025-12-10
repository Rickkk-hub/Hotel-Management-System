import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// for home and security
import ProtectedRoute from "../Http/Middleware/ProtectedRoute";
import Homepage from "../pages/Home/Homepage";
// for admin imports
{/* import Admin from "../pages/Admin/Admin"; */}
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminRooms from "../pages/Admin/Admin-Add-Rooms";
import AdminBookings from "../pages/Admin/Admin-Add-Bookings";
import AdminGuests from "../pages/Admin/Admin-Add-Guests";
import AdminSettings from "../pages/Admin/Admin-Edit-Settings";
// for guest imports
import GuestRegister from "../pages/Guest/Guest-Get-Register";
import GuestLogin from "../pages/Guest/Guest-Get-Login";
import GuestDashboard from "../pages/Guest/GuestDashboard";
import GuestBooking from "../pages/Guest/Guest-Get-Booking";
import GuestRoom from "../pages/Guest/Guest-Get-Room";
import GuestProfile from "../pages/Guest/Guest-Edit-Profile";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Protected Routes */}
        <Route 
          path="/admindashboard" 
          element={
            <ProtectedRoute userType="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/guestdashboard" 
          element={
            <ProtectedRoute userType="guest">
              <GuestDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin pages */}
        <Route path="/bookings"  element={<AdminBookings />} />
        <Route path="/rooms"     element={<AdminRooms />} />
        <Route path="/guests"    element={<AdminGuests />} />
        <Route path="/settings"  element={<AdminSettings />} />


         {/* Guest pages */}
         <Route path="/GetBooking" element={<GuestBooking/>} />
         <Route path="/GetRoom" element={<GuestRoom/>} />
         <Route path="/GetProfile" element={<GuestProfile/>} />


        {/* Auth */}
        <Route path="/register" element={<GuestRegister />} />
        <Route path="/login"    element={<GuestLogin />} />
         {/* <Route path="/admin"    element={<Admin />} /> */} 

        {/* Home */}
        <Route path="/" element={<Homepage />} />

      </Routes>
    </Router>
  );
}


