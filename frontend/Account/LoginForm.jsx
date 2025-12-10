import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hotel, Mail, Lock, User, Shield } from "lucide-react";
import api from "../Http/Services/api";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("guest");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Auto-redirect based on existing session
  useEffect(() => {
    const adminRaw = localStorage.getItem("Admin");
    const userRaw = localStorage.getItem("user");

    if (adminRaw) {
      try {
        const admin = JSON.parse(adminRaw);
        if (admin && admin.role === "Admin") {
          navigate("/admindashboard", { replace: true });
        }
      } catch {
        localStorage.removeItem("Admin");
      }
    }

    if (userRaw) {
      try {
        const user = JSON.parse(userRaw);
        if (user && user.role === "Guest" || user.role === "User") {
          navigate("/guestdashboard", { replace: true });
        }
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUserTypeToggle = (type) => {
     setUserType(type);
    // Reset form when switching types
    setForm({ email: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!form.email || !form.password) {
      return Swal.fire({
        title: "Missing Fields",
        text: "Please fill in all fields.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // Check if opposite account type is already logged in
    if (userType === "admin") {
      const userRaw = localStorage.getItem("user");
      if (userRaw) {
        try {
          const user = JSON.parse(userRaw);
          if (user) {
            return Swal.fire({
              title: "Guest Account Detected",
              text: "Please logout from guest account first.",
              icon: "warning",
              timer: 2000,
              showConfirmButton: false,
            });
          }
        } catch {
          localStorage.removeItem("user");
        }
      }
    } else if (userType === "guest") {
      const adminRaw = localStorage.getItem("Admin");
      if (adminRaw) {
        try {
          const admin = JSON.parse(adminRaw);
          if (admin) {
            return Swal.fire({
              title: "Admin Account Detected",
              text: "Please logout from admin account first.",
              icon: "warning",
              timer: 2000,
              showConfirmButton: false,
            });
          }
        } catch {
          localStorage.removeItem("Admin");
        }
      }
    }

    setLoading(true);

    try {
      let endpoint, storageKey, redirectPath, successMessage;

      if (userType === "admin") {
        endpoint = "/Admin/admin-login";
        storageKey = "Admin";
        redirectPath = "/admindashboard";
        successMessage = "Admin Login Successful!";
      } else {
        endpoint = "/User/login";
        storageKey = "user";
        redirectPath = "/guestdashboard";
        successMessage = "Login Successful!";
      }

      const res = await api.post(endpoint, form);

      if (res.data) {
        // Clear opposite storage
        if (userType === "admin") {
          localStorage.removeItem("user");
        } else {
          localStorage.removeItem("Admin");
        }

        // Store user data
        let userData;
        if (userType === "admin") {
          // Handle both response formats for admin
          userData = res.data.admin || res.data.user;
          if (userData && !userData.role) {
            userData.role = "Admin";
          }
        } else {
          userData = res.data.user;
          if (userData && !userData.role) {
            userData.role = "Guest";
          }
        }

        if (userData) {
          localStorage.setItem(storageKey, JSON.stringify(userData));

          await Swal.fire({
            title: "Welcome Back!",
            text: res.data.message || successMessage,
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });

          navigate(redirectPath, { replace: true });
        } else {
          throw new Error("Invalid response format from server");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please check credentials.";

      Swal.fire({
        title: "Login Failed",
        text: message,
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image/Info */}
      <div className="hidden md:flex w-1/2 bg-[url('./assets/Hotel.jpg')] bg-cover bg-center relative text-white flex-col justify-center items-center p-10">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center items-center gap-3 mb-5">
            <Hotel className="w-10 h-10 bg-white text-slate-700 p-2 rounded-lg" />
            <h1 className="text-3xl font-bold">RP Hotel</h1>
          </div>
          <h2 className="text-xl font-semibold mb-3">
            Premium Hotel Management System
          </h2>
          <p className="text-gray-200 max-w-md mx-auto">
            Streamline your hotel operations with our comprehensive management
            platform. From reservations to housekeeping, manage everything in
            one place.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/80 border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5"
        >
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="text-2xl font-bold text-slate-600">Welcome Back!</h1>
            <p className="text-gray-600 text-sm mt-2">
              Choose your account type and enter credentials
            </p>
          </div>

          {/* User Type Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              onClick={() => handleUserTypeToggle("guest")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition ${
                userType === "guest"
                  ? "bg-blue-50 border-blue-300 text-blue-700"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <User className="w-5 h-5" />
              <span>Guest Login</span>
            </button>
            <button
              type="button"
              onClick={() => handleUserTypeToggle("admin")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition ${
                userType === "admin"
                  ? "bg-purple-50 border-purple-300 text-purple-700"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Shield className="w-5 h-5" />
              <span>Admin Login</span>
            </button>
          </div>

          {/* Account Type Indicator */}
          <div className={`${userType === "admin" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`}>
          </div>

          {/* Email */}
          <div>
            <label className="font-medium text-gray-700">Email</label>
            <div className="flex items-center backdrop-blur-sm bg-white/60 border border-gray-200 rounded-lg p-2">
              <Mail className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={
                  userType === "admin"
                    ? "admin@example.com"
                    : "guest@example.com"
                }
                className="bg-transparent outline-none w-full placeholder-gray-500"
                disabled={loading}
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="font-medium text-gray-700">Password</label>
            <div className="flex items-center backdrop-blur-sm bg-white/60 border border-gray-200 rounded-lg p-2">
              <Lock className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="bg-transparent outline-none w-full placeholder-gray-500"
                disabled={loading}
                autoComplete="current-password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-3 rounded-lg transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : userType === "admin"
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading
              ? "Logging in..."
              : userType === "admin"
              ? "Login as Admin"
              : "Login as Guest"}
          </button>

          {/* Additional Links */}
          {userType === "guest" && (
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-blue-600 hover:underline font-medium"
              >
                Register
              </a>
            </p>
          )}

          <div className="text-center">
            <a href="/" className="underline text-gray-600 hover:text-gray-800">
              Back to Home
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}