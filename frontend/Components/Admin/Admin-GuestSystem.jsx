import { useState } from "react";
import { Plus, Search } from "lucide-react";
import Modal from "../Layout/Modal";

export default function GuestSystem() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl">Guests</h1>
          <p className="text-slate-600">Manage guest information and history</p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center bg-blue-600 text-white border border-blue-500 hover:bg-blue-500 rounded-lg px-4 py-2 gap-2"
        >
          <Plus /> Add Guests
        </button>
      </div>

      {/* Search */}
      <div className="mt-6 p-5 border border-gray-200 shadow rounded-lg">
        <div className="flex border border-gray-200 bg-gray-50 gap-2 rounded-md">
          <Search className="text-gray-400 w-4" />
          <input
            type="text"
            className="w-full focus:border-gray-500 focus:ring-2 focus:ring-gray-500 outline-none duration-200 rounded-md"
            placeholder="Search Guests..."
          />
        </div>

          <table className="w-full">
            <th>
              <tr className="flex justify-between text-center px-4 py-4">
                <td>Guest</td>
                <td>Contact</td>
                <td>Location</td>
                <td>Visits</td>
                <td>Total Spent</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </th>
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
  );
}
