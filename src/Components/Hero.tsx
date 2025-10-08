
import HeroImage from "../assets/images/photo.png";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
            {/* Text Section */}
            <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                <div className="text-left">
                    <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                        Hello I'm  <span className="text-blue-500"> Rakibul Hasan</span>
                    </h2>
                    <p className="max-w-md mx-auto mt-3 text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        I'm a full stack web developer. I am a student of Ahmad Education.I can make any kind of website for you. if you need any type of web side yon can hire me. thank you so much for visiting my portfolio.
                    </p>

                    <div className="mt-5 sm:flex md:mt-8 gap-3">
                        <a
                            href="#about"
                            className="flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 transition duration-150 ease-in-out md:py-4 md:text-xl md:px-10"
                        >
                            About Me
                        </a>
                        <a
                            href="#projects"
                            className="flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-blue-500 bg-white border border-gray-300 rounded-md shadow hover:text-blue-600 transition duration-150 ease-in-out md:py-4 md:text-xl md:px-10 mt-3 sm:mt-0 sm:ml-3"
                        >
                            Projects
                        </a>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                <div className="relative w-full p-3 rounded md:p-8">
                    <div className="rounded-lg bg-white w-full">
                        <img src={HeroImage} alt="Hero img" className="rounded-[20px] w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
