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
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-700 via-fuchsia-800 to-red-600 bg-clip-text text-transparent mb-10">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4 
              hover:shadow-2xl hover:-translate-y-2 hover:border-purple-600 border-2 border-transparent 
              transition-all duration-300 ease-in-out group"
            >
              <div className="relative">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 object-cover rounded-full border-2 border-indigo-700 mb-2 
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
      <div className="mt-20 text-center">
        <button
          className="inline-flex items-center border border-transparent px-6 py-3  font-medium bg-gradient-to-r from-amber-700 via-fuchsia-800 to-red-600 bg-clip-text text-transparent shadow-sm text-2xl"
        >
          Contact me
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto mt-6">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
        border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
        focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 
        duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
        peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
        peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
        border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
        focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 
        duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
        peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
        peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
      border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
      focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 
      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
      peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
      peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
      border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
      focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 
      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
      peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
      peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="confirm_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
      border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
      focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 
      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
      peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
      peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>


        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-400 
                         hover:from-purple-900 hover:via-fuchsia-800 to-fuchsia-400
                         transition-all duration-500 shadow-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
      focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 
      text-center"
          >
            Submit
          </button>
        </div>
      </form>

    </section>
  );
};

export default Testimonials;
