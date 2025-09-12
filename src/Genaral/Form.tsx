const Form = () => {
  return (
    <form
      action="https://formspree.io/f/mvgaznyw"
      method="POST"
      className="flex flex-col gap-4 mt-4"
    >
      <input
        required
        type="text"
        name="name"
        className="border border-gray-300 rounded-xl p-3 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-300 outline-none placeholder:text-gray-400 open-sans shadow-sm transition-all duration-200"
        placeholder="Enter your name"
      />
      <input
        required
        type="tel"
        name="phone"
        className="border border-gray-300 rounded-xl p-3 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-300 outline-none placeholder:text-gray-400 open-sans shadow-sm transition-all duration-200"
        placeholder="Enter your phone number"
      />
      <input
        type="email"
        name="email"
        className="border border-gray-300 rounded-xl p-3 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-300 outline-none placeholder:text-gray-400 open-sans shadow-sm transition-all duration-200"
        placeholder="Enter your email (optional)"
      />
      <textarea
        id="message"
        name="message"
        className="border border-gray-300 rounded-xl p-3 h-28 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-300 outline-none placeholder:text-gray-400 open-sans shadow-sm transition-all duration-200 resize-none"
        placeholder="Enter your message"
      ></textarea>
      <button
        type="submit"
        className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-white rounded-xl py-3 mt-2 font-medium shadow-lg montserrat"
      >
        Book Now
      </button>

      {/* Small Note */}
      <p className="text-xs text-gray-300 text-center mt-2 open-sans">
        🔒 Your details are safe with us. We never share your information.
      </p>
    </form>
  );
};

export default Form;
