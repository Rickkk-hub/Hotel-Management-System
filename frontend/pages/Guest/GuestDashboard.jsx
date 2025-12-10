import GuestHeader from "../../Components/Guest/Guest-Header";
import GuestSidebar from "../../Components/Guest/Guest-Sidebar";
import GuestDashboardOverview from "../../Components/Guest/Guest-DashboardOverview";

export default function GuestDashboard(){
  return(
    <div className="flex h-screen">
      <GuestSidebar/>

      <div className="flex-1 flex flex-col">
        <GuestHeader/>

        <main className="p-6 overflow-y-auto">
         <GuestDashboardOverview/>
        </main>
      </div>
    </div>
  )
}