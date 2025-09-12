import { Mail, Phone } from "lucide-react"; // icons
import Form from "../Genaral/Form";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-orange-50 to-orange-100 min-h-screen py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-extrabold text-orange-700 drop-shadow-sm">
          Contact Us
        </h2>
        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
          We’re here to guide you on your spiritual journey. Reach out through{" "}
          <span className="font-medium text-orange-600">email</span>,{" "}
          <span className="font-medium text-orange-600">phone</span>, or fill
          out the form below. Guruji will connect with you personally.
        </p>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        {/* Contact Info */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-orange-700 mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Whether you seek answers about your{" "}
            <span className="font-medium text-orange-600">career</span>,{" "}
            <span className="font-medium text-orange-600">love life</span>, or{" "}
            <span className="font-medium text-orange-600">spiritual path</span>,
            we’re here to help you find the right direction.
          </p>

          <div className="space-y-5 text-lg">
            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-orange-600" />
              <span>
                <span className="font-semibold">Email:</span> guruji@example.com
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-orange-600" />
              <span>
                <span className="font-semibold">Phone:</span> +91 98765 43210
              </span>
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h3 className="text-3xl font-semibold text-orange-700 mb-6 w-full mx-auto text-center">
            Booking Now
          </h3>
          <Form />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-20 max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-orange-700 drop-shadow-sm">
          Our Astrology Services
        </h3>
        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
          We provide expert guidance in{" "}
          <span className="font-medium text-orange-600">palm reading</span>,{" "}
          <span className="font-medium text-orange-600">
            horoscope matching
          </span>
          , <span className="font-medium text-orange-600">photo readings</span>,
          and{" "}
          <span className="font-medium text-orange-600">
            vastu consultation
          </span>
          . Discover life-changing solutions for{" "}
          <span className="italic">
            love, career, finance, and spiritual growth
          </span>{" "}
          with our trusted astrology services.
        </p>
      </div>
    </div>
  );
}
