import { Mail, MapPin, Phone } from "lucide-react";

export default function HomeRate() {
  const testimonials = [
    {
      icon: <MapPin className="w-10 text-center border rounded-full text-blue-700"/>,
      title: `Address`,
      text: `Quezon city, Novaliches, 1124`,
    
    },
    { 
      icon: <Phone className="w-10  text-center border rounded-full text-red-700"/>,
      title: `Phone`,
      text: `+63 (99) 123-999`
    
    },
    { 
      icon: <Mail className="w-10 text-center border rounded-full text-green-700"/>,
      title: `Email"`,
      text: `info@RPHotel.com`,

    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-slate-700 uppercase mb-2 tracking-wide">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-slate-700 mb-3">
          Contact
        </h2>
        <p className="text-lg text-slate-700">
          We're here to help you plan your perfect stay
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-black hover:shadow-[0_0_15px_rgba(0,0,0,0.7)] duration-300 text-left"
            >
               
            <div className="flex justify-center mb-2">
                  {item.icon}
            </div>
           
               <p className="text-gray-600 leading-relaxed text-center mb-4">{item.title}</p>
              <p className="text-gray-600 leading-relaxed text-center mb-4">{item.text}</p>
        
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
