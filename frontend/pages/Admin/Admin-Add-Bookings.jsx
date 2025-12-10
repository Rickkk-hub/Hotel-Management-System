import AdminHeader from "../../Components/Admin/Admin-Header";
import AdminSidebar from "../../Components/Admin/Admin-Sidebar";
import BookingSystem from "../../Components/Admin/Admin-BookingSystem";

export default function AdminBookings() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader />

        <main className="p-6 overflow-y-auto">
          <BookingSystem/>
        </main>
      </div>
    </div>
  );
}


