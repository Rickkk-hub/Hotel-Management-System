    {/* 
   
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hotel, Mail, Lock } from "lucide-react";
import api from "../Http/Services/api";
import Swal from "sweetalert2";

export default function AdminForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FIXED: Auto redirect - only if admin exists
  useEffect(() => {
    const adminRaw = localStorage.getItem("Admin");
    if (adminRaw) {
      try {
        const admin = JSON.parse(adminRaw);
        if (admin && admin.role === "Admin") {
          navigate("/admindashboard", { replace: true });
        }
      } catch (error) {
        console.error("Error parsing admin data:", error);
        localStorage.removeItem("Admin");
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CHECK: If guest is already logged in, prevent admin login
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
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
    }

    if (!form.email || !form.password) {
      return Swal.fire({
        title: "Missing Fields",
        text: "Please fill in all fields.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    }

    setLoading(true);

    try {
      console.log("Sending admin login request:", form);
      const res = await api.post("/Admin/admin-login", form);

      console.log("Response received:", res.data);

      if (res.data && res.data.admin) {
        // Store admin data
        localStorage.setItem("Admin", JSON.stringify(res.data.admin));
        localStorage.removeItem("user");

        await Swal.fire({
          title: "Welcome Back!",
          text: res.data.message || "Admin Login Successful!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate("/admindashboard", { replace: true });
      } else if (res.data && res.data.user) {
        // If backend returns "user" instead of "admin", convert it
        const adminData = {
          ...res.data.user,
          Role: "Admin",
        };
        localStorage.setItem("Admin", JSON.stringify(adminData));
        localStorage.removeItem("user");

        await Swal.fire({
          title: "Welcome Back!",
          text: res.data.message || "Admin Login Successful!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate("/admindashboard", { replace: true });
      } else {
        console.error("Unexpected response format:", res.data);
        throw new Error("Invalid response format from server");
      }
    } catch (error) {
      console.error("Admin login error:", error);
      console.error("Error response:", error.response?.data);

      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Admin login failed. Please check credentials.";

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

      <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/80 border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5"
        >
          <div className="flex flex-col text-center mb-5 gap-2">
            <h1 className="text-2xl font-bold text-slate-600">Welcome Back!</h1>
            <h3 className="text-2xl text-gray-500">Admin Portal</h3>
            <p className="text-gray-600 text-sm">
              Enter your credentials to access your admin dashboard
            </p>
          </div>

          <div>
            <label className="font-medium text-gray-700">Email</label>
            <div className="flex items-center backdrop-blur-sm bg-white/60 border border-gray-200 rounded-lg p-2">
              <Mail className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="admin@example.com"
                className="bg-transparent outline-none w-full placeholder-gray-500"
                disabled={loading}
                autoComplete="email"
              />
            </div>
          </div>

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

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-2 rounded-lg transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

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
   */}
