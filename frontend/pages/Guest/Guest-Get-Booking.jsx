import GuestHeader from "../../Components/Guest/Guest-Header";
import GuestSidebar from "../../Components/Guest/Guest-Sidebar";

export default function GuestBooking(){
    return(
        <div className="flex h-screen">
            <GuestSidebar/>

            <div className="flex-1 flex flex-col">
                <GuestHeader/>

                <main>
                    
                </main>
                
            </div>
        </div>
    )
}