import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can We Meet Astrologer Sanjeeva Swamy?",
    answer:
      "Yes, personal meetings are available with prior appointment. Whatsapp Number:916302133653 ",
  },
  {
    question: "Is Telephonic Consultation Available?",
    answer:
      "Yes, you can connect via phone from anywhere in the world. Phone Number:916302133653",
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
    <section className="bg-gradient-to-b from-orange-50 to-yellow-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-red-700 montserrat">
          FAQs
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-red-200 rounded-2xl shadow-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-red-50 transition montserrat"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="text-red-600 w-6 h-6" />
                ) : (
                  <Plus className="text-red-600 w-6 h-6" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed animate-fadeIn open-sans">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
