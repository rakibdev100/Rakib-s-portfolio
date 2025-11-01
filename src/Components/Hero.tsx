import { useEffect, useState } from "react";
import { Link } from "react-router";
import HeroImage from "../assets/images/rakibpro1.jpg";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "full-stack web developer_";
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 100 : 150;
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(fullText.substring(0, index + 1));
                setIndex(index + 1);
                if (index === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setText(fullText.substring(0, index - 1));
                setIndex(index - 1);
                if (index === 0) setIsDeleting(false);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting]);

    return (
        <section className=" bg-blue-50 flex flex-col-reverse items-center justify-center max-w-screen-xl px-6 mx-auto py-10 mt-3 md:flex-row md:py-16">
            <div className="w-full text-center md:w-1/2 md:text-left mt-8 md:mt-0 flex flex-col justify-center min-h-[420px]">
                <h2 className="text-4xl font-extrabold leading-tight text-gray-800">
                    Hello I'm{" "}
                    <h3 className="text-blue-600">Rakibul Hasan{" "}</h3>
                    <span className="text-pink-900 ml-2 border-r-2 border-blue-500 animate-pulse">
                        {text}
                    </span>
                </h2>

                <p className="max-w-md mx-auto mt-4 text-base text-gray-700 sm:text-lg md:mx-0 md:mt-6 md:text-xl">
                    I’m a passionate Full-Stack Developer specializing in React.js and Node.js.
                    I love building modern, fast, and responsive web applications with clean and efficient code.
                    My goal is to turn creative ideas into seamless, user-friendly digital experiences.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-6">
                    <Link
                        to="/about"
                        className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 transition-all duration-200"
                    >
                        About Me
                    </Link>
                    <a
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-blue-500 bg-white border border-gray-300 rounded-md shadow hover:text-blue-600 transition-all duration-200"
                    >
                        Projects
                    </a>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center w-full md:w-1/2">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-gray-100">
                    <img
                        src={HeroImage}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
