import AboutImage from "../assets/images/rakibpro2.jpg";

const AboutPage = () => {
    return (
        <div>
            <section id="about" className="via-yellow-50 to-orange-50 py-20 bg-blue-50">
                <div className="max-w-screen-xl mx-auto px-6">

                    {/* About Me Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-[33px] sm:text-[35px] font-extrabold text-blue-500">
                            About Me
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">

                        {/* Image Section */}
                        <div className="flex justify-center md:justify-start w-full md:w-1/2">
                            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-blue-50 rounded-xl p-3 shadow-md">
                                <img
                                    src={AboutImage}
                                    alt="About photo"
                                    className="rounded-2xl w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                I am <span className="text-blue-500">Web Developer</span>
                            </h2>
                            <p className="mt-6 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                                Hi, I’m Rakibul Hasan, a passionate Full Stack Developer specializing in React.js and Node.js.
                                I focus on building modern, high-performance, and visually appealing digital experiences that are fast,
                                accessible, and fully responsive across all devices.
                                <br /><br />
                                With over one year of hands-on experience in web application development, I’ve worked on crafting seamless
                                user experiences and bringing creative ideas to life through clean, efficient code.
                                <br /><br />
                                As both a User Experience Designer and Developer, I love blending creativity with technology — designing
                                elegant, user-friendly interfaces while ensuring strong, scalable backend architecture.
                                <br /><br />
                                My mission is simple: to create beautiful, intuitive, and immersive digital experiences that leave a lasting
                                impression. Even after a year in this field, my passion for web development continues to grow — every project
                                feels as exciting as the first.
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-col sm:flex-row sm:gap-4 justify-center md:justify-start">
                                <a
                                    href="https://github.com/"
                                    className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-purple-500 transition"
                                >
                                    My GitHub
                                </a>
                                <button className="mt-3 sm:mt-0 px-6 py-3 bg-white text-gray-800 rounded-md border border-blue-300 shadow-sm hover:bg-purple-400 transition">
                                    Download CV
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
