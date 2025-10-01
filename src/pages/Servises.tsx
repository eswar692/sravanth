import { Phone, MessageCircle } from "lucide-react";
import { phone_number, whatsapp_number } from "../Genaral/secrete";

const services = [
  {
    name: "Love Problems",
    desc: "Solutions for lost love, misunderstandings, and building strong relationships.",
    img: "https://i.pinimg.com/1200x/3f/f5/89/3ff5895bca8970847577656ffe788eff.jpg",
  },
  {
    name: "Marriage Issues",
    desc: "Guidance for happy married life, compatibility, and resolving conflicts.",
    img: "https://i.pinimg.com/736x/fa/ee/46/faee46287149c9a2470c20d26318fee1.jpg",
  },
  {
    name: "Court Cases",
    desc: "Astrological remedies to overcome legal challenges and disputes.",
    img: "https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg",
  },
  {
    name: "Finance Problems",
    desc: "Effective remedies for wealth, investments, and financial stability.",
    img: "https://i.pinimg.com/736x/53/3a/25/533a25d0fd940cc5fc8b5fdaf457b14a.jpg",
  },
  {
    name: "Education Guidance",
    desc: "Astrology support for students seeking focus, success, and higher studies.",
    img: "https://i.pinimg.com/736x/7f/8a/60/7f8a6099a523cc79342eaee0a29e92f8.jpg",
  },
  {
    name: "Career Growth",
    desc: "Clarity for job opportunities, promotions, and professional success.",
    img: "https://i.pinimg.com/736x/2d/21/ff/2d21ff0997bd7bdfb46491c3d13798c3.jpg",
  },
  {
    name: "Vashikaran",
    desc: "Powerful vashikaran solutions to influence situations positively.",
    img: "https://i.pinimg.com/1200x/bd/dc/94/bddc94a7fcefc3598976dec33665645a.jpg",
  },
  {
    name: "Future Predictions",
    desc: "Accurate horoscope readings to understand your destiny and future.",
    img: "https://i.pinimg.com/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
  },
  {
    name: "All Types of Vashikaran",
    desc: "Specialized remedies for love, family, and professional life.",
    img: "https://i.pinimg.com/736x/34/1d/eb/341deb4d9ba9bd2934f0d996567b37a3.jpg",
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-100 py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-extrabold text-orange-700 drop-shadow-sm montserrat">
          Our Astrology Services
        </h2>
        <p className="text-gray-700 mt-6 text-lg leading-relaxed roboto">
          Explore our wide range of astrology services designed to bring
          clarity, peace, and solutions to your life problems.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-90 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-orange-700 mb-3 montserrat">
                {service.name}
              </h3>
              <p className="text-gray-600 flex-grow roboto">{service.desc}</p>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 roboto">
                <a href={`tel:${phone_number}`}>
                  <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition">
                    <Phone size={18} /> Call
                  </button>
                </a>
                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                    <MessageCircle size={18} /> WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
