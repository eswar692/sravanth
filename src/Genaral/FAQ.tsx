import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { person_name, phone_number } from "./secrete";

const faqs = [
  {
    question: `Can We Meet Astrologer ${person_name}?`,
    answer: `Yes, personal meetings are available with prior appointment. Whatsapp Number:${phone_number} `,
  },
  {
    question: "Is Telephonic Consultation Available?",
    answer: `Yes, you can connect via phone from anywhere in the world. Phone Number:${phone_number}`,
  },
  {
    question: "What Kind Of Astrology Services Are Available Here?",
    answer:
      "We provide Vastu, horoscope, career, marriage, health, and business guidance.",
  },
  {
    question: "What Kind Of Products Are Available?",
    answer:
      "Astrological remedies, gemstones, yantras, and spiritual products are available.",
  },
  {
    question: "Do We Avail Courses On Astrology?",
    answer: "Yes, astrology learning courses are offered for different levels.",
  },
  {
    question: "What Do We Teach In The Astrology Course?",
    answer:
      "We cover horoscope reading, palmistry basics, and predictive astrology.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-red-700 montserrat drop-shadow-md">
          ❓ Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mt-3 open-sans">
          Get quick answers to the most common questions from our clients.
        </p>

        {/* FAQ List */}
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group w-full bg-white/90 backdrop-blur-sm border border-amber-200 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl"
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg md:text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-all montserrat"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="text-red-600 w-6 h-6 transition-transform duration-300" />
                ) : (
                  <Plus className="text-red-600 w-6 h-6 transition-transform duration-300" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 text-base leading-relaxed open-sans">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
