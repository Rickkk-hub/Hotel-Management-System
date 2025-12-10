import AdminHeader from "../../Components/Admin/Admin-Header";
import AdminSidebar from "../../Components/Admin/Admin-Sidebar";

export default function AdminSettings() {
  return (
    <div className='flex h-screen'>
        <AdminSidebar/>

        <div className='flex-1 flex flex-col'>
            <AdminHeader/>
        </div>
    </div>
  )
}

