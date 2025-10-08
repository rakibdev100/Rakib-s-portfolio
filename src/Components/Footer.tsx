import fbIcon from "../assets/images/facebook.png";
import twitterIcon from "../assets/images/twitter.png";
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";
import emailIcon from "../assets/images/email.png";
import phoneIcon from "../assets/images/phone.png";
import locationIcon from "../assets/images/location.png";

import { motion } from "framer-motion";

const Footer = () => {
    // Animation Variants
    const container = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.footer id="Contuct me"
            className="bg-[#3c3c40] text-gray-400 bottom-0 left-0 right-0 z-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-wrap justify-start items-start gap-8">
                    {/* Portfolio Info */}
                    <motion.div
                        variants={item}
                        className="w-full sm:w-auto lg:flex-1 ml-0 lg:ml-20"
                    >
                        <a href="/" className="block mb-4">
                            <span className="text-2xl font-medium text-white">
                                Tajul Islam Portfolio
                            </span>
                        </a>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            Thank you for visiting my personal portfolio website. You can{" "}
                            <span className="text-amber-600 font-semibold">
                                connect with me on social media
                            </span>{" "}
                            to stay updated on my latest projects and developments.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        variants={item}
                        className="w-full sm:w-auto lg:flex-1 lg:ml-36 mt-6 sm:mt-0"
                    >
                        <h2 className="text-xl pb-1 mb-3 border-b-4 border-blue-600 inline-block font-medium text-white">
                            Quick Links
                        </h2>
                        <ul className="space-y-1 text-sm">
                            {["Home", "About", "Education", "Contact"].map((link) => (
                                <li key={link} className="flex items-center">
                                    <span className="mr-2 text-white">➤</span>
                                    <a
                                        href="#"
                                        className="hover:text-amber-500 font-medium text-white"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Me */}
                    <motion.div
                        variants={item}
                        className="w-full sm:w-auto lg:flex-1 mt-6 sm:mt-0"
                    >
                        <h2 className="text-xl pb-1 mb-3 border-b-4 border-blue-600 inline-block font-medium text-white">
                            Connect Me
                        </h2>
                        <div className="flex flex-wrap mb-3 space-x-2 text-sm">
                            <a
                                href="https://www.facebook.com/share/1Gi2kaNaT3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:border-blue-400"
                            >
                                <img src={fbIcon} alt="Facebook" className="h-5 w-5" />
                            </a>
                            <a
                                href="https://x.com/TajulIslam43453"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:border-blue-400"
                            >
                                <img src={twitterIcon} alt="Twitter" className="h-5 w-5" />
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
                                href="mailto:developer.tajulislam@gmail.com"
                                className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:border-blue-400"
                            >
                                <img src={emailIcon} alt="Email" className="h-5 w-5" />
                            </a>
                        </div>

                        <div className="space-y-1 text-sm">
                            <p className="flex items-center text-white">
                                <img src={phoneIcon} alt="Phone" className="h-4 w-4 mr-2" />
                                +088 1814003876
                            </p>
                            <p className="flex items-center text-white">
                                <img src={emailIcon} alt="Email" className="h-4 w-4 mr-2" />
                                devrakib100@gmail.com
                            </p>
                            <p className="flex items-center text-white">
                                <img src={locationIcon} alt="Location" className="h-4 w-4 mr-2" />
                                Dhaka, Bangladesh
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                variants={item}
                className="bg-indigo-700 py-3 text-gray-100 text-center"
            >
                <p className="text-sm">Designed with ❤ by Rakibul Hasan.</p>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
