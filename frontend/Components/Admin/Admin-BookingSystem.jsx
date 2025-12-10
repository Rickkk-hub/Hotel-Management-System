import { Plus, Download } from "lucide-react";
import Modal from "../Layout/Modal";
import { useState } from "react";

export default function BookingSystem() {
  const [open, setOpen] = useState(false);

  return (
    // parent div
    <div className="">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl text-slate-700">Bookings</h1>
          <p className="text-slate-500">Manage all hotel reservations</p>
        </div>
        <button onClick={() => setOpen(true)}
        className="flex items-center bg-blue-600 text-white border border-blue-500 hover:to-blue-400  rounded-lg px-4 py-2 gap-2 cursor-pointer">
          <Plus /> Add Bookings
        </button>
      </div>
      {/* end header */}
      <div className="mt-6 p-5  border border-gray-200 shadow rounded-lg">
        <div className="flex gap-4 bg-white">
          <input
            className="bg-gray-100 px-2 py-1 w-4/4 focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 rounded-md"
            type="text"
            placeholder="Search bookings...."
          />

          <select className="bg-gray-100 px-2 py-1">
            <option>All Status</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Checked In</option>
            <option>Checked Out</option>
            <option>Cancelled</option>
          </select>

          <div className="flex justify-center p-1 w-28 border border-gray-200">
            <button className="flex gap-5 text-center cursor-pointer">
              <Download className="w-4" />
              Export
            </button>
          </div>
        </div>

        <table className="w-full">
          <th>
            <tr className="flex justify-between text-center px-4 py-4">
              <td>Booking</td>
              <td>Guest</td>
              <td>Room</td>
              <td>Check In</td>
              <td>Check Out</td>
              <td>Status</td>
              <td>Amount</td>
              <td>Actions</td>
            </tr>
          </th>
          <tbody>
            <tr className="flex justify-between text-center px-4 py-4">
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        {/* parent div */}
        <div className="p-2">
          <div className="flex flex-col mb-5">
            <h1 className="text-md font-bold">Add New Guest</h1>
            <p className="text-slate-500">Create a new guest profile</p>
          </div>

          {/* 1st parent grid */}
          <div className="grid gap-2 py-4">
            <label>Full Name</label>
            <div>
              <input
                type="text"
                placeholder="John doe"
                className="w-4/4 shadow px-3 p-1 rounded focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 bg-gray-50"
              />
            </div>

            {/* 2nd grid parent */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex">Email</label>
                <input
                  type="text"
                  className="shadow px-3 p-1 rounded focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 bg-gray-50"
                  placeholder="Guest@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="flex">Phone</label>
                <input
                  type="text"
                  placeholder="+63 9922 222 333"
                  inputMode="numeric"
                  pattern="[0-11]"
                  className="shadow px-3 p-1 rounded focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 bg-gray-50"
                />
              </div>
            </div>
            {/* 2nd grid parent end */}

            <div className="space-y-4">
              <label>Address</label>
              <input
                type="text"
                placeholder="1124 Novaliches Q.C"
                className="w-4/4 shadow px-3 p-1 rounded focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 bg-gray-50"
              />
            </div>

            {/* 3rd grid parent */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <label>Nationality</label>
                <input
                  type="text"
                  placeholder="Philippines"
                  className="shadow px-3 p-1 focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 bg-gray-50"
                />
              </div>

              <div className="space-y-4">
                <label>ID/Passport Number</label>
                <input
                  type="text"
                  placeholder="AB203481"
                  className="shadow px-3 p-1 rounded focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 bg-gray-50"
                />
              </div>
            </div>
            {/* 3rd parent div grid */}

            <div className="flex justify-end gap-2 mt-5">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 border border-gray-300 rounded-md"
              >
                Cancel
              </button>

              <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
                Add Guest
              </button>
            </div>
          </div>
          {/* 1st grid parent end*/}
        </div>
        {/* end parent div */}
      </Modal>
    </div>
    // end parent div
  );
}
