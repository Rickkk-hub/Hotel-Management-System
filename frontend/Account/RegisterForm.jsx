import React, { useState } from "react";
import { Hotel, Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../Http/Services/api";
import Swal from "sweetalert2";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    Fullname: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  });
   
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (!form.Fullname || !form.Email || !form.Password || !form.ConfirmPassword) {
      setLoading(false);
      return Swal.fire({
        title: "Missing Fields",
        text: "Please fill in all fields.",
        icon: "warning",
        timer: 1500,
        showConfirmButton: false,
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.Email)) {
      setLoading(false);
      return Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "warning",
        timer: 1500,
        showConfirmButton: false,
      });
    }

    // Password match validation
    if (form.Password !== form.ConfirmPassword) {
      setLoading(false);
      return Swal.fire({
        title: "Password Mismatch",
        text: "Password and Confirm Password do not match.",
        icon: "warning",
        timer: 1500,
        showConfirmButton: false,
      });
    }

    try {
      const res = await api.post("/User/register", form);

      if (res.data) {
        await Swal.fire({
          title: "Registration Successful!",
          text: res.data.message || "Your account has been created successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        // Clear the form
        setForm({
          Fullname: "",
          Email: "",
          Password: "",
          ConfirmPassword: ""
        });

        // Redirect to login page
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.error("Registration error:", error);
      
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Registration failed. Please try again.";

      setError(message);

      Swal.fire({
        title: "Registration Failed!",
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
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
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

      {/* Right Side - Registration Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-50">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5">
          <div className="text-center mb-5">
            <h1 className="text-2xl font-bold text-slate-700">Create an Account</h1>
            <p className="text-gray-500 text-sm mt-2">
              Enter your information to get started
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}

          {/* Full Name Field */}
          <div>
            <label className="font-medium text-gray-700">Full Name</label>
            <div className="flex items-center bg-gray-100 rounded-lg p-2 mt-1">
              <User className="text-gray-400 w-5 h-5 mr-2" />
              <input
                name="Fullname"
                onChange={handleChange}
                value={form.Fullname}
                type="text"
                placeholder="John Doe"
                className="bg-transparent outline-none w-full placeholder-gray-500"
                disabled={loading}
                autoComplete="name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="font-medium text-gray-700">Email Address</label>
            <div className="flex items-center bg-gray-100 rounded-lg p-2 mt-1">
              <Mail className="text-gray-400 w-5 h-5 mr-2" />
              <input
                name="Email"
                onChange={handleChange}
                value={form.Email}
                type="email"
                placeholder="guest@example.com"
                className="bg-transparent outline-none w-full placeholder-gray-500"
                disabled={loading}
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="font-medium text-gray-700">Password</label>
            <div className="flex items-center bg-gray-100 rounded-lg p-2 mt-1">
              <Lock className="text-gray-400 w-5 h-5 mr-2" />
              <input
                name="Password"
                onChange={handleChange}
                value={form.Password}
                type="password"
                placeholder="Create a password"
                className="bg-transparent outline-none w-full placeholder-gray-500"
                disabled={loading}
                autoComplete="new-password"
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="font-medium text-gray-700">Confirm Password</label>
            <div className="flex items-center bg-gray-100 rounded-lg p-2 mt-1">
              <Lock className="text-gray-400 w-5 h-5 mr-2" />
              <input
                name="ConfirmPassword"
                value={form.ConfirmPassword}
                onChange={handleChange}
                type="password"
                placeholder="Confirm your password"
                className="bg-transparent outline-none w-full placeholder-gray-500"
                disabled={loading}
                autoComplete="new-password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-3 rounded-lg transition mt-4 ${
              loading 
                ? "bg-blue-400 cursor-not-allowed" 
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a 
              href="/login" 
              className="text-blue-600 hover:underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login", { replace: true });
              }}
            >
              Login
            </a>
          </p>

          {/* Back to Home */}
          <div className="text-center pt-2">
            <a 
              href="/" 
              className="text-gray-600 hover:text-gray-800 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                navigate("/", { replace: true });
              }}
            >
              Back to home
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}