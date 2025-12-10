import AdminDashboardOverview from '../../Components/Admin/Admin-DashboardOverview';
import AdminHeader from '../../Components/Admin/Admin-Header';
import AdminSidebar from '../../Components/Admin/Admin-Sidebar';


export default function AdminDashboard() {
  return (
    <div className='flex h-screen'>
      <AdminSidebar/>
      <div className='flex-1 flex flex-col'>
       <AdminHeader/> 
       <main className='p-6 overflow-y-auto'>
        <AdminDashboardOverview/>
       </main>
      </div>
    </div>
  )
}

