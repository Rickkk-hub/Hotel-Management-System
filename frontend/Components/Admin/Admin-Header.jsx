import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import Swal from "sweetalert2";

export default function AdminHeader() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      // Clear ONLY admin data
      localStorage.removeItem("Admin");
      
      Swal.fire({
        title: "Logged Out Successfully!",
        text: "You have been logged out....",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });

      setLoading(false);
      navigate("/login", { replace: true });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-between sticky p-5 top-0 shadow bg-white">
      <div>
        <h1 className="text-blue-400 text-2xl">
          Welcome Back! <span className="text-black">Admin</span>
        </h1>
      </div>

      <div>
        <button
          onClick={handleLogout}
          disabled={loading}
          className={`flex gap-2 items-center bg-red-100 hover:bg-red-200 duration-300 text-red-700 font-semibold py-2 px-4 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        > 
          <LogOut />
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
}