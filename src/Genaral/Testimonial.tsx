import { Quote } from "lucide-react";
import { person_name } from "./secrete";

const testimonials = [
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `I'm appreciative of Astrologer ${person_name}. For me, his prophecies come true. The fact that he is constantly there to lead me makes me feel lucky. It was great for me.`,
  },
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `Astrologer ${person_name} gave me advice on business-related issues. I sought his advice when I was in the midst of a significant loss; his remedies are effective and yield results quickly.`,
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
    image: "https://astrologerdeepaksharma.in/images/client-3.png",
    text: "I was having relationship issues with my spouse. I sought his advice, and he provided me with remedies that helped me resolve my issues and brought harmony to my relationship.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-yellow-50 via-orange-50 to-red-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
          Client Words
        </h2>
        <p className="mt-3 text-gray-600">
          Astrologer {person_name} has remedies for all your problems.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-red-500 shadow-md">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {t.name}{" "}
                <span className="text-sm text-gray-500 font-medium">
                  {t.location}
                </span>
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">{t.text}</p>

              <Quote className="absolute bottom-4 right-4 text-red-200 w-10 h-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
