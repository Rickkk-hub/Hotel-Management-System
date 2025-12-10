import GuestSystem from "../../Components/Admin/Admin-GuestSystem";
import AdminHeader from "../../Components/Admin/Admin-Header";
import AdminSidebar from "../../Components/Admin/Admin-Sidebar";

export default function AdminGuests() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader />

        <main className="p-6 overflow-y-auto">
          <GuestSystem />
        </main>
      </div>
    </div>
  );
}


