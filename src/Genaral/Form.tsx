const Form = () => {
  return (
    <form
      action="https://formspree.io/f/mvgaznyw"
      method="POST"
      className="flex flex-col gap-5 mt-6 bg-white/70 backdrop-blur-md"
    >
      {/* Name */}
      <input
        required
        type="text"
        name="name"
        className="border border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none placeholder:text-gray-400 open-sans shadow-sm transition-all duration-200"
        placeholder="✨ Enter your name"
      />

      {/* Phone */}
      <input
        required
        type="tel"
        name="phone"
        className="border border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none placeholder:text-gray-400 open-sans shadow-sm transition-all duration-200"
        placeholder="📞 Enter your phone number"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        className="border border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none placeholder:text-gray-400 open-sans shadow-sm transition-all duration-200"
        placeholder="📧 Enter your email (optional)"
      />

      {/* Message */}
      <textarea
        id="message"
        name="message"
        className="border border-gray-200 rounded-xl p-3 h-28 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none placeholder:text-gray-400 open-sans shadow-sm transition-all duration-200 resize-none"
        placeholder="💬 Enter your message"
      ></textarea>

      {/* Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 hover:from-orange-600 hover:via-yellow-600 hover:to-red-600 transition-all duration-300 text-white rounded-xl py-3 mt-2 font-semibold shadow-lg montserrat hover:shadow-orange-300/70"
      >
        🚀 Book Now
      </button>

      {/* Trust Note */}
      <p className="text-xs text-gray-500 text-center mt-2 open-sans">
        🔒 Your details are{" "}
        <span className="font-semibold text-orange-600">100% safe</span> with
        us. We never share your information.
      </p>
    </form>
  );
};

export default Form;
