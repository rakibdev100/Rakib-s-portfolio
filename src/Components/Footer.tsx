import fbIcon from "../assets/images/facebook.png";
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";
import emailIcon from "../assets/images/email.png";
import phoneIcon from "../assets/images/phone.png";
import locationIcon from "../assets/images/location.png";

const Footer = () => {
    return (
        <footer
            id="Contact"
            className="bg-[#3c3c40] text-gray-400 bottom-0 left-0 right-0 z-10"
        >
            <div className="container mx-auto py-12 px-6">
                <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left gap-10 lg:gap-20">

                    <div className="max-w-sm">
                        <a href="/" className="block mb-4">
                            <span className="text-2xl font-semibold text-white">
                                Rakibul Hasan Portfolio
                            </span>
                        </a>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            Thank you for visiting my personal portfolio website. You can{" "}
                            <span className="text-amber-500 font-semibold">
                                connect with me on social media
                            </span>{" "}
                            to stay updated on my latest projects and developments.
                        </p>
                    </div>

                    <div className="max-w-xs">
                        <h2 className="text-xl pb-1 mb-4 border-b-4 border-blue-600 inline-block font-medium text-white">
                            Quick Links
                        </h2>
                        <ul className="space-y-2 text-sm">
                            {["Home", "About", "Education", "Contact"].map((link) => (
                                <li key={link} className="flex justify-center lg:justify-start items-center">
                                    <span className="mr-2 text-white">➤</span>
                                    <a
                                        href="#"
                                        className="hover:text-amber-500 font-medium text-white transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="max-w-sm">
                        <h2 className="text-xl pb-1 mb-4 border-b-4 border-blue-600 inline-block font-medium text-white">
                            Connect Me
                        </h2>

                        <div className="flex justify-center lg:justify-start flex-wrap gap-3 mb-4">
                            <a
                                href="https://www.facebook.com/share/1Gi2kaNaT3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:border-blue-400"
                            >
                                <img src={fbIcon} alt="Facebook" className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/feed/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:border-blue-400"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com/rakibdev100"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:border-blue-400"
                            >
                                <img src={githubIcon} alt="GitHub" className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:rakibdev100@gmail.com"
                                className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:border-blue-400"
                            >
                                <img src={emailIcon} alt="Email" className="h-5 w-5" />
                            </a>
                        </div>

                        <div className="space-y-2 text-sm text-white">
                            <p className="flex justify-center lg:justify-start items-center">
                                <img src={phoneIcon} alt="Phone" className="h-4 w-4 mr-2" />
                                +880 1814003876
                            </p>
                            <p className="flex justify-center lg:justify-start items-center">
                                <img src={emailIcon} alt="Email" className="h-4 w-4 mr-2" />
                                rakibdev100@gmail.com
                            </p>
                            <p className="flex justify-center lg:justify-start items-center">
                                <img src={locationIcon} alt="Location" className="h-4 w-4 mr-2" />
                                Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-indigo-700 py-4 text-gray-100 text-center">
                <p className="text-sm">© {new Date().getFullYear()} Designed by Rakibul Hasan</p>
            </div>
        </footer>
    );
};

export default Footer;
