import client1 from "../assets/images/cl1.png";
import client2 from "../assets/images/cl2.png";
import client3 from "../assets/images/cl3.png";
import client4 from "../assets/images/cl4.png";

const testimonials = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    feedback:
      "Rakibul is an amazing developer! His React and TailwindCSS skills are outstanding.",
    img: client1,
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    feedback:
      "Very professional and detail-oriented. Delivered the project on time with excellent quality.",
    img: client2,
  },
  {
    name: "Michael Lee",
    role: "UI/UX Designer",
    feedback:
      "His collaboration skills and communication were top-notch. Would love to work again!",
    img: client3,
  },
  {
    name: "Sarah Kim",
    role: "CEO, StartupX",
    feedback:
      "Rakibul helped us create a beautiful and functional product. Highly recommended!",
    img: client4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 lg:px-16 py-24 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4 
              hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-500 border-2 border-transparent 
              transition-all duration-300 ease-in-out group"
            >
              <div className="relative">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 object-cover rounded-full border-2 border-indigo-600 mb-2 
                  group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 rounded-full border-2 border-indigo-400 opacity-0 
                group-hover:opacity-100 blur-sm transition-all duration-300"></div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                {t.name}
              </h3>
              <p className="text-sm text-indigo-600">{t.role}</p>
              <p className="text-gray-600 text-center text-sm lg:text-base italic group-hover:text-gray-800 transition-colors duration-300">
                "{t.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
