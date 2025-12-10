import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProtectedRoute = ({ children, userType }) => {
  // Get raw data from localStorage
  const userRaw = localStorage.getItem("user");
  const adminRaw = localStorage.getItem("Admin");

  // Parse the data safely
  let user = null;
  let admin = null;

  try {
    if (userRaw) user = JSON.parse(userRaw);
    if (adminRaw) admin = JSON.parse(adminRaw);
  } catch{
    // Clear invalid data
    localStorage.removeItem("user");
    localStorage.removeItem("Admin");
  }

  // Helper function to extract role from stored data
  const getUserRole = () => {
    if (admin && (admin.role === "Admin" || admin.role === "admin")) {
      return "admin";
    }
    if (user && (user.role === "Guest" || user.role === "User" || user.role === "guest" || user.role === "user")) {
      return "guest";
    }
    return null;
  };

  const currentUserRole = getUserRole();

  // Admin route protection
  if (userType === "admin") {
    if (currentUserRole !== "admin") {
      // If no one is logged in
      if (!admin && !user) {
        Swal.fire({
          title: "Access Denied!",
          text: "Please login as administrator.",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        return <Navigate to="/login" replace />;
      }
      
      // If guest is logged in instead of admin
      if (currentUserRole === "guest") {
        Swal.fire({
          title: "Wrong Account Type!",
          text: "You are logged in as a guest. Please login with admin credentials.",
          icon: "warning",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        return <Navigate to="/login" replace />;
      }
    }
    
    // If admin exists but role is not set, set it
    if (admin && !admin.role) {
      admin.role = "Admin";
      localStorage.setItem("Admin", JSON.stringify(admin));
    }
    
    return children;
  }

  // Guest route protection
  if (userType === "guest") {
    if (currentUserRole !== "guest") {
      // If no one is logged in
      if (!user && !admin) {
        Swal.fire({
          title: "Access Denied!",
          text: "Please login to access your dashboard.",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        return <Navigate to="/login" replace />;
      }
      
      // If admin is logged in instead of guest
      if (currentUserRole === "admin") {
        Swal.fire({
          title: "Wrong Account Type!",
          text: "You are logged in as an admin. Please login with guest credentials.",
          icon: "warning",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        return <Navigate to="/login" replace />;
      }
    }
    
    // If user exists but role is not set, set it
    if (user && !user.role) {
      user.role = "Guest";
      localStorage.setItem("user", JSON.stringify(user));
    }
    
    return children;
  }

  // Default: redirect to home
  return <Navigate to="/" replace />;  
};

export default ProtectedRoute;