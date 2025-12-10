import React, { useEffect, useRef, useState } from "react";
import {Wifi, WavesLadder, HandPlatter, Dumbbell, Car, Coffee, ShieldCheck, Timer } from "lucide-react";

export default function HomeMain() {
  const rooms = [
    {
      price: "₱250",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
      title: "Standard Room",
      guests: "2 Guests",
      bed: "King Bed",
      view: "City View",
      button: "View Details",
    },
    {
      price: "₱350",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      title: "Deluxe Suite",
      guests: "3 Guests",
      bed: "Living Area",
      view: "Ocean View",
      button: "View Details",
    },
    {
      price: "₱500",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      title: "Presidential Suite",
      guests: "4 Guests",
      bed: "Private Balcony",
      view: "Penthouse",
      button: "View Details",
    },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // this for auto slide
  const delay = 3000;
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => resetTimeout();
  }, [index, rooms.length]);

  const resetTimeout = () =>  {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // this for manual control
  const nextSlide = () => {
    setIndex(index === rooms.length - 1 ? 0 : index + 1);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? rooms.length - 1 : index - 1);
  };

  return (

  <div>
  
      {/* Amenities Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Title */}
          <h2 className="text-4xl font-bold text-slate-600 text-center mb-4">
            World-Class Hotel
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-center text-gray-600 mb-12">
            Everything you need for a perfect stay
          </p>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Wi-Fi */}
            <div className="text-center p-6 border bg-white hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 rounded-lg">
              <div className="flex justify-center text-4xl">
                <Wifi />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Free Wi-Fi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                High-speed internet throughout the property
              </p>
            </div>

            {/* Swimming Pool */}
            <div className="text-center p-6 border bg-white hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 rounded-lg">
              <div className="flex justify-center text-4xl ">
                <WavesLadder />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Swimming Pool
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rooftop infinity pool with stunning views
              </p>
            </div>

            {/* Fine Dining */}
            <div className="text-center p-6 border bg-white hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 rounded-lg">
              <div className="flex justify-center text-4xl">
                <HandPlatter />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Fine Dining
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Award-winning restaurant and bar
              </p>
            </div>

            {/* Fitness Center */}
            <div className="text-center p-6 border bg-white hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 rounded-lg">
              <div className="flex justify-center text-4xl">
                <Dumbbell />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Fitness Center
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Award-winning restaurant and bar
              </p>
            </div>

            {/* Valet Parking */}
            <div className="text-center p-6 border bg-white hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 rounded-lg">
              <div className="flex justify-center text-4xl">
                <Car />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Valet Parking
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complimentary parking service
              </p>
            </div>

            {/* Room Service */}
            <div className="text-center p-6 border bg-white hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 rounded-lg">
              <div className="flex justify-center text-4xl">
                <Coffee />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Room Service
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                24-hour in-room dining
              </p>
            </div>

            {/* Security */}
            <div className="text-center p-6 border bg-white hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 rounded-lg">
              <div className="flex justify-center text-4xl">
                <ShieldCheck />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Security
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Round-the-clock security and CCTV
              </p>
            </div>

            {/* Concierge */}
            <div className="text-center p-6 border bg-white hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 rounded-lg">
              <div className="flex justify-center text-4xl">
                <Timer />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Concierge
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Personalized guest services
              </p>
            </div>
          </div>
        </div>
    </div>

    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
       <div className="text-center text-sm text-slate-700 tracking-widest uppercase mb-5">
         <h3>Accommodations</h3>
       </div>
        <h2 className="text-4xl font-bold mb-5 text-slate-700">
          Our Rooms & Suites
        </h2>
        <div className="text-center text-lg text-slate-700 mb-15">
          <h2>Meticulously designed spaces for the discerning traveler</h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden w-full">
          {/* Slider Container */}
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {rooms.map((room, idx) => (
              <div
                key={idx}
                className="min-w-full px-4 flex justify-center"
              >
                <div className="bg-white rounded-lg border shadow-lg w-full max-w-md overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={room.image}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-gray-600 text-white py-3 text-center">
                    <span className="text-2xl font-bold">{room.price}</span>
                    <span className="text-sm ml-1">/night</span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {room.title}
                    </h3>

                    <p className="text-gray-600">{room.guests}</p>
                    <p className="text-gray-600">{room.bed}</p>
                    <p className="text-gray-600">{room.view}</p>

                    <div className="border-t my-4" />

                    <a
                      href="/login"
                      className="block bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
                    >
                      {room.button}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-70 hover:opacity-100"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-70 hover:opacity-100"
          >
            ›
          </button>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {rooms.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === i ? "bg-gray-700" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
