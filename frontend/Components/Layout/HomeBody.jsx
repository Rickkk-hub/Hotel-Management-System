export default function HomeBody() {
  return (
    <div className="min-h-screen bg-[url('./assets/Hotel.jpg')] bg-cover bg-center">
      {/* Very subtle glass overlay */}
      <div className="min-h-screen backdrop-blur-sm bg-white/5">
        <div className="min-h-screen flex flex-col items-center justify-center text-center gap-2 px-6">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-white ">Welcome to RP Hotel</h1>
          
          {/* Description */}
          <p className="text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
            Experience luxury redefined with world-class service and amenities
          </p>
          
          {/* Primary Button */}
          <a href="/login"className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 mb-6">
            Book Your Stay
          </a>
          
          {/* Secondary Link */}
          <a 
            href="/login" 
            className="text-black hover:text-gray-300 font-medium text-lg underline underline-offset-4 transition-colors duration-300"
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </div>
  );
}