import { Star } from "lucide-react";

export default function HomeRate() {
  const testimonials = [
    {
      text: `"Absolutely stunning hotel! The service was impeccable and the rooms were beautiful."`,
    
    },
    {
      text: `"Best hotel experience I've ever had. The staff went above and beyond."`,
    
    },
    {
      text: `"Perfect location, amazing amenities, and wonderful hospitality. Highly recommend!"`,

    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-slate-700 uppercase mb-2 tracking-wide">
          Testimonials
        </p>
        <h2 className="text-4xl font-bold text-slate-700 mb-3">Guest Reviews</h2>
        <p className="text-lg text-slate-700">
          What our guests say about their experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 text-left"
            >
           
              <div className="flex space-x-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>

          
              <p className="text-gray-600 leading-relaxed mb-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
