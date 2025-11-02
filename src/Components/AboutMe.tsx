import AboutImage from "../assets/images/rakibpro2.jpg";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-br from-blue-50 via-yellow-5 py-20"
        >
            <div className="max-w-screen-xl mx-auto px-6">               
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-900 via-fuchsia-900 to-red-600 bg-clip-text text-transparent">
                        Abut me
                    </h1>
                </div>
                
                <div className="flex flex-col-reverse md:flex-row items-stretch justify-between">
                  
                    <div className="flex-1 flex flex-col justify-center text-center md:text-left bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-md md:min-h-[420px]">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-20 text-purple-800">
                            I am{" "}
                            <span className="text-blue-500 bg-gradient-to-r from-red-900 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent"> full-stack
                                Web Developer
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-700 text-base sm:text-lg lg:text-xl  leading-relaxed">
                            I am a professional User Experience Designer and
                            Developer. I specialize in creating stylish, modern
                            websites, web services, and online stores. My passion
                            is to design digital user experiences that are
                            intuitive, immersive, and visually appealing.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row sm:gap-4 justify-center md:justify-start">
                             <a
                        href="https://github.com/rakibdev100"
                        className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white rounded-md  bg-gradient-to-r from-purple-500 via-purple-400 
hover:from-purple-900 hover:via-fuchsia-800 to-fuchsia-400
transition-all duration-500 shadow-lg"
                    >
                        My Github
                    </a>
                            <button className="mt-3 sm:mt-0 px-8 py-3 text-lg font-semibold bg-white text-gray-800 rounded-md border border-blue-300 shadow-md hover:bg-purple-500 transition-all duration-200">
                                Download CV
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end flex-1 md:min-h-[400px]">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-full max-w-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 hover:scale-105 transition-transform duration-300">
                            <img
                                src={AboutImage}
                                alt="About me"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
