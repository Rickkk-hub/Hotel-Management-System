import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BedDouble, Calendar, PhilippinePeso, Users, Clock } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

function DashboardOverview() {
  const navigate = useNavigate();

  // FIXED: Check authentication on component mount
  useEffect(() => {
    const adminRaw = localStorage.getItem("Admin");
    const userRaw = localStorage.getItem("user");
    
    // Parse admin data safely
    let admin = null;
    try {
      if (adminRaw) admin = JSON.parse(adminRaw);
    } catch {
      localStorage.removeItem("Admin");
    }
    
    // Parse user data safely
    let user = null;
    try {
      if (userRaw) user = JSON.parse(userRaw);
    } catch{
      localStorage.removeItem("user");
    }
    
    // If no admin is logged in, redirect to admin login
    if (!admin) {
      Swal.fire({
        title: "Access Denied!",
        text: "Please login as administrator.",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      navigate("/login", { replace: true });
      return;
    }
    
    // If guest user is logged in but admin is not, clear guest data for admin route
    if (user && !admin) {
      localStorage.removeItem("user");
    }
    
  }, [navigate]);

  const datas = [
    { month: "Jan", bookings: 120 },
    { month: "Feb", bookings: 145 },
    { month: "Mar", bookings: 135 },
    { month: "Apr", bookings: 170 },
    { month: "May", bookings: 150 },
    { month: "Jun", bookings: 190 },
  ];

  const data = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 50000 },
    { month: "Mar", revenue: 48000 },
    { month: "Apr", revenue: 62000 },
    { month: "May", revenue: 57000 },
    { month: "Jun", revenue: 68000 },
  ];

  return (
    <div>
      
      {/* 1st grid parent */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 gap-5">
        {/* 1st card */}
        <div className="shadow border border-gray-300 rounded-xl p-5 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center">
            <div className="bg-green-100 p-3 rounded-xl">
              <PhilippinePeso className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-green-500 text-sm font-medium">+12.5%</span>
          </div>
          <div className="flex flex-col mt-5 gap-1">
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h1 className="text-2xl">₱67,000</h1>
          </div>
        </div>

        {/* 2nd card */}
        <div className="shadow border border-gray-300 rounded-xl p-5 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center">
            <div className="bg-blue-100 p-3 rounded-xl">
              <BedDouble className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-green-500 text-sm font-medium">+5.2%</span>
          </div>
          <div className="flex flex-col mt-5 gap-1">
            <p className="text-gray-500 text-sm">Occupancy Rate</p>
            <h1 className="text-2xl">74.3%</h1>
          </div>
        </div>

        {/* 3rd card */}
        <div className="shadow border border-gray-300 rounded-xl p-5 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center">
            <div className="bg-violet-100 p-3 rounded-xl">
              <Calendar className="w-5 h-5 text-violet-600" />
            </div>
            <span className="text-green-500 text-sm font-medium">+8.1%</span>
          </div>
          <div className="flex flex-col mt-5 gap-1">
            <p className="text-gray-500 text-sm">Total Bookings</p>
            <h1 className="text-2xl">185</h1>
          </div>
        </div>

        {/* 4th card */}
        <div className="shadow border border-gray-300 rounded-xl p-5 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center">
            <div className="bg-red-100 p-3 rounded-xl">
              <Users className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-red-500 text-sm font-medium">-2.4%</span>
          </div>
          <div className="flex flex-col mt-5 gap-1">
            <p className="text-gray-500 text-sm">Active Guests</p>
            <h1 className="text-2xl">78</h1>
          </div>
        </div>
      </div>

      {/* 2nd grid parent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Revenue Chart */}
        <div className="shadow border border-gray-300 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-lg text-gray-800">Revenue Overview</h1>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Monthly revenue for the last 6 months
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  formatter={(value) => [`₱${value.toLocaleString()}`, 'Revenue']}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#3b82f6" }}
                  activeDot={{ r: 6, fill: "#2563eb" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bookings Chart */}
        <div className="shadow border border-gray-300 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-lg text-gray-800">Bookings Overview</h1>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Monthly bookings for the last 6 months
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={datas}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  formatter={(value) => [`${value} bookings`, 'Bookings']}
                />
                <Bar
                  dataKey="bookings"
                  fill="#8b5cf6"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="mt-8">
        <div className="shadow border border-gray-300 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-violet-100 p-3 rounded-xl">
                <Calendar className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <p className="font-bold text-lg text-gray-800">Recent Bookings</p>
                <p className="text-gray-500 text-sm">Latest reservations from your guests</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/bookings")}
              className="shadow border font-medium hover:bg-gray-100 border-gray-300 px-4 py-2 rounded-xl text-sm transition-colors"
            >
              View All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-900">BK001</td>
                  <td className="py-3 px-4 text-sm text-gray-900">Sarah Johnson</td>
                  <td className="py-3 px-4">
                    <div className="inline-flex items-center justify-center w-16 px-3 py-1 rounded-full border border-gray-300 bg-gray-50 text-gray-700 text-sm">
                      305
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">2025-11-02</td>
                  <td className="py-3 px-4 text-sm text-gray-900">2025-11-05</td>
                  <td className="py-3 px-4">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-blue-500 bg-blue-100 text-sm">
                      <Clock className="w-3 h-3" />
                      Confirmed
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">₱450</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;