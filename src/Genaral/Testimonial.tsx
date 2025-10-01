import { Quote } from "lucide-react";
import { person_name } from "./secrete";

const testimonials = [
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `${person_name} Ji gave me advice on business-related issues. I sought his advice when I was in the midst of a significant loss; his remedies are effective and yield results quickly.`,
  },
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `I'm appreciative of Pandith ${person_name}. For me, his prophecies come true. The fact that he is constantly there to lead me makes me feel lucky. It was great for me.`,
  },

  {
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "My kids abruptly stopped paying attention to me. I sought his advice when I started to feel concerned. He offered solutions that improved my kids’ behavior and brought peace at home.",
  },
  {
    name: "Ravi Singh",
    location: "Bangalore",
    image:
      "https://i.pinimg.com/736x/a7/99/d0/a799d0592bae082bbd34c3ce9476491b.jpg",
    text: "I was having relationship issues with my spouse. I sought his advice, and he provided me with remedies that helped me resolve my issues and brought harmony to my relationship.",
  },
  {
    name: "Sneha Nair",
    location: "Kochi",
    image:
      "https://i.pinimg.com/736x/19/c8/c7/19c8c789aec27508fee721babf82597e.jpg",
    text: `I was struggling with career growth. ${person_name} Ji gave me clear guidance and after following his remedies, I found new opportunities at work.`,
  },
  {
    name: "Karan Mehta",
    location: "Ahmedabad",
    image:
      "https://i.pinimg.com/736x/7e/46/c6/7e46c6d2798eff446b365c5246f4c9ca.jpg",
    text: "I faced unexpected financial hurdles. With ${person_name} Ji's guidance, my situation turned around and I regained stability.",
  },
  {
    name: "Divya Sharma",
    location: "Jaipur",
    image:
      "https://i.pinimg.com/736x/ad/14/bf/ad14bf9ce76a0751060657d57e177ca4.jpg",
    text: "I felt mentally low and anxious. His positive energy and remedies gave me peace of mind and restored my confidence.",
  },
  {
    name: "Vikram Chauhan",
    location: "Chandigarh",
    image:
      "https://i.pinimg.com/1200x/0e/1b/49/0e1b4984c22ff810051677b8c7a29e7d.jpg",
    text: `Family disputes were creating stress at home. ${person_name} Ji gave me practical solutions and now harmony has returned to my family life.`,
  },
  {
    name: "Neha Reddy",
    location: "Hyderabad",
    image:
      "https://i.pinimg.com/736x/50/90/f6/5090f6123b7570102d14d6dbac939756.jpg",
    text: "My marriage was being delayed. With his remedies and pujas, within months my marriage got fixed happily.",
  },
  {
    name: "Rahul Bansal",
    location: "Lucknow",
    image:
      "https://i.pinimg.com/736x/c4/d8/f8/c4d8f8f64e1f00a5ca02253f5ecc27d0.jpg",
    text: `I had constant health issues. Following ${person_name} Ji’s guidance, my health improved steadily and I feel much stronger now.`,
  },
  {
    name: "Pooja Iyer",
    location: "Chennai",
    image:
      "https://i.pinimg.com/736x/56/2e/eb/562eeb2796c005cfb01a6cfd79094dc9.jpg",
    text: `I was worried about my job abroad visa getting rejected. ${person_name} Ji guided me with remedies, and finally my visa got approved without obstacles.`,
  },
  {
    name: "Siddharth Joshi",
    location: "Pune",
    image:
      "https://i.pinimg.com/736x/28/6b/03/286b03b2ad1c09bf52cbcc99a4dabba4.jpg",
    text: `I had constant misunderstandings with my partner. With ${person_name} Ji's support, our bond became stronger and filled with love again.`,
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-100 py-20 px-6 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
          ✨ Client Testimonials ✨
        </h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Real experiences from people who found solutions with{" "}
          <span className="font-semibold text-red-600">{person_name}</span>.
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative group bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 border border-pink-200 hover:scale-105"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-red-500 shadow-md">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 top-0 left-0   backdrop-blur-xs rounded-full border-4 border-red-600"></span>
              </div>

              {/* Name */}
              <h3 className="mt-5 text-xl font-bold text-gray-900">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.location}</span>

              {/* Testimonial Text */}
              <p className="mt-4 text-gray-700 leading-relaxed italic">
                "{t.text}"
              </p>

              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-red-200 w-10 h-10 group-hover:scale-110 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
