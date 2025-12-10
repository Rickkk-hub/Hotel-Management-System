import {
  AirVentIcon,
  BedDouble,
  NotebookPen,
  Plus,
  Trash2,
  Tv,
  Wifi,
} from "lucide-react";
import Dropdown from "../Layout/Dropdown";
import { useState } from "react";
import Modal from "../Layout/Modal";

export default function RoomSystem() {
  const [open, setOpen] = useState(false);

  const [wifi, setWifi] = useState(false);
  const [tv, setTv] = useState(false);
  const [ac, setAc] = useState(false);
  const [coffee, setCoffee] = useState(false);

  return (
    <div className="">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl text-slate-700">Rooms</h1>
          <p className="text-slate-500">Manage hotel rooms and availability</p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center bg-blue-600 text-white border border-blue-500 hover:to-blue-400  rounded-lg px-4 py-2 gap-2 cursor-pointer"
        >
          <Plus /> Add Rooms
        </button>
      </div>
      {/* header end */}

      {/* body */}
      <div className="mt-6 p-5 bg-white border border-gray-200 shadow rounded-lg">
        <div className="flex gap-4 bg-white">
          <input
            className="bg-gray-100 py-1 px-2 w-4/3 focus:border focus:ring-gray-500 focus:ring-2 duration-200 outline-none rounded-md"
            type="text"
            placeholder="Search Rooms...."
          />
          <select className="bg-gray-100 px-1 py-2">
            <option>All Status</option>
            <option>Available</option>|<option>Occupied</option>
            <option>Maintenance</option>
            <option>Cleaning</option>
          </select>

          <select className="bg-gray-100 px-1 py-2">
            <option>All Types</option>
            <option>Standard Room</option>|<option>Deluxe Suite</option>
            <option>Executive Room</option>
            <option>Presidential Suite</option>
          </select>
        </div>
      </div>
      {/* body end */}

      {/* parent grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        {/* parent div for details */}
        <div className="flex flex-col shadow border border-gray-200 p-7 rounded-2xl">
          <div className="flex justify-between">
            <div>
              <span>Room 101</span>
              <p className="text-slate-600">Standard Room</p>
            </div>
            <div>
              <Dropdown />
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div>
              <h1 className="text-2xl">₱250</h1>
            </div>
            <div>
              <span className="text-slate-600">per night</span>
            </div>
          </div>

          <div className="flex gap-2 mt-5">
            <BedDouble className="w-4 text-slate-600" />
            <span className="text-slate-600 text-sm">Floor1</span>
            <span className="text-slate-600 text-sm">Capacity: 2</span>
          </div>

          <div className="mt-5">
            <span className="text-slate-600">
              Comfortable standard room with modern amenities
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            <div className="flex shadow border border-gray-200 w-fit px-2 gap-1 rounded-md">
              <Wifi className="w-4" />
              <span>WiFi</span>
            </div>

            <div className="flex shadow border border-gray-200 w-fit px-2 gap-1 rounded-md">
              <Tv className="w-4" />
              <span>TV</span>
            </div>

            <div className="flex shadow border border-gray-200 w-fit px-2 gap-1 rounded-md">
              <AirVentIcon className="w-4" />
              <span>AC</span>
            </div>
          </div>

          <div className="flex mt-5 gap-5">
            <div className="flex justify-center items-center gap-3 border border-gray-200  rounded-sm shadow w-2/2">
              <NotebookPen className="w-4 text-blue-500" />
              <button className="cursor-pointer text-blue-500">Edit</button>
            </div>
            <div className="flex shadow border border-gray-200 rounded-sm px-2 py-1 p-4">
              <Trash2 className="text-red-600 w-4 cursor-pointer" />
              <button></button>
            </div>
          </div>
        </div>
        {/* end parent div for details */}
      </div>
      {/* end parent grid */}

      <Modal open={open} onClose={() => setOpen(false)}>
        {/* parent div */}
        <div className="p-2">
          <div className="flex flex-col mb-5">
            <h1 className="text-md font-bold">Add New Room</h1>
            <p className="text-slate-500">Create a new room in the system</p>
          </div>

          {/* 1st parent grid */}
          <div className="grid gap-2 py-4">
            {/* 1st parent wt cols 2 grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex">Room Number</label>
                <input
                  type="text"
                  placeholder="101"
                  className="bg-gray-50 px-3 p-1 focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 rounded"
                />
              </div>

              <div className="space-y-2">
                <label className="flex">Floor</label>
                <input
                  type="number"
                  min={1}
                  step={1}
                  placeholder="1"
                  className="bg-gray-50 px-3 p-1 focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 rounded"
                />
              </div>
            </div>
            {/* 1st end parent wt cols 2grid */}

            <div className="space-y-2">
              <label className="flex">Room Type</label>
              <select className="w-4/4 px-3 p-1 rounded shadow border border-gray-200 bg-gray-50 duration-200 ">
                <option>Standard Room</option>
                <option>Deluxe Suite</option>
                <option>Executive Room</option>
                <option>Presidential Suite</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label>Price per night</label>
                <input
                  type="text"
                  placeholder="₱250"
                  className="px-3 p-1 rounded shadow focus:border focus:ring-2 focus:ring-gray-500 outline-none duration-200 bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <label>Capacity</label>
                <input
                  number="text"
                  min={1}
                  step={1}
                  placeholder="2"
                  className="px-3 p-1 rounded shadow focus:border focus:ring-2 focus:ring-gray-500 outline-none bg-gray-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label>Description</label>
              <input
                type="text"
                placeholder="Room description..."
                className="w-4/4 px-4 p-3 focus:border focus:ring-2 focus:ring-gray-500 ouline-none duration-200 bg-gray-50"
              />
            </div>

            {/* WiFi */}
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label>WiFi</label>
                <button
                  onClick={() => setWifi(!wifi)}
                  className={`px-3 py-1 rounded text-sm ${
                    wifi
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {wifi ? "ON" : "OFF"}
                </button>
              </div>
            </div>

            {/* TV */}
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label>TV</label>
                <button
                  onClick={() => setTv(!tv)}
                  className={`px-3 py-1 rounded text-sm ${
                    tv ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {tv ? "ON" : "OFF"}
                </button>
              </div>
            </div>

            {/* AC */}
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label>AC</label>
                <button
                  onClick={() => setAc(!ac)}
                  className={`px-3 py-1 rounded text-sm ${
                    ac ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {ac ? "ON" : "OFF"}
                </button>
              </div>
            </div>

            {/* Coffee Maker */}
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label>Coffee Maker</label>
                <button
                  onClick={() => setCoffee(!coffee)}
                  className={`px-3 py-1 rounded text-sm ${
                    coffee
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {coffee ? "ON" : "OFF"}
                </button>
              </div>
            </div>
          </div>
          {/* 1st grid parent end*/}
          <div className="flex justify-end gap-2 mt-5">
            <button 
            onClick={() => setOpen(false)}
            className="shadow border border-gray-300 px-3 p-1 rounded cursor-pointer"
            >
             Cancel
            </button>

            <button
            className="shadow bg-blue-500 text-white rounded px-3 p-1 cursor-pointer "
            >
              Add Room
            </button>
          </div>
        </div>
        {/* end parent div */}
      </Modal>
    </div>
    // end parent div
  );
}
