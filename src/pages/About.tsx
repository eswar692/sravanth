import ImageGrid from "../Genaral/ImageGrid";

export default function About() {
  const slides = [
    {
      id: 1,
      img: "https://ravishankarguruji.com/storage/2025/03/3-2048x1366.jpeg",
    },
    { id: 2, img: "https://ravishankarguruji.com/storage/2025/03/2.jpeg" },
    { id: 3, img: "https://ravishankarguruji.com/storage/2025/03/1.jpeg" },
    {
      id: 4,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-23-at-14.18.17_0b522bc6-1024x768.jpg",
    },
    {
      id: 5,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/IMG-20241222-WA0003-1152x1536.jpg",
    },
    {
      id: 6,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-23-at-14.18.52_50457e75-1024x768.jpg",
    },
    {
      id: 7,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/IMG-20241222-WA0006-1152x1536.jpg",
    },
    {
      id: 8,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/IMG-20241222-WA0005-1152x1536.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-yellow-50 py-16 px-6 font-sans">
      <div className="max-w-6xl w-full mx-auto items-center">
        {/* Left Content */}
        <div className="w-full  mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-8">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed space-y-4">
            Astrologer{" "}
            <span className="font-bold text-red-700">
              Astrologer Sanjev Swamy
            </span>{" "}
            is a renowned and respected spiritual leader in India. With his deep
            knowledge of astrology and unwavering commitment to helping others,
            he has established himself as a trusted advisor to people across the
            country.
            <br />
            <br />
            Through his extensive experience and intuitive abilities, Astrologer
            <span className="font-semibold text-yellow-700">
              {" "}
              Sanjev Swamy
            </span>{" "}
            offers a wide range of services, including palm readings, face
            readings, photo readings, and phone consultations. His expertise
            spans astrology, spiritual guidance, and personal development,
            making him a versatile and influential figure in the spiritual
            community.
            <br />
            <br />
            Renowned for his{" "}
            <span className="font-semibold text-red-600">accuracy</span> and
            insightful interpretations, Astrologer Panikaran Guruji has built a
            loyal following of clients who attest to the transformative power of
            his readings.
            <br />
            <br />
            If you’re in need of a trusted spiritual guide, look no further.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-10">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative group overflow-hidden rounded-xl shadow-lg transition duration-300"
            >
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
        <ImageGrid />
      </div>
    </section>
  );
}
