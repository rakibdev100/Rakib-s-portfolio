import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-20 bg-neutral-100 shadow-md py-2 px-4 lg:px-16">
            <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">

                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-700 hover:text-blue-500 transition-colors duration-200"
                >
                    Portfolio
                </Link>


                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden block text-gray-900 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        {isOpen ? (

                            <path d="M6 6L14 14M6 14L14 6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        ) : (

                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        )}
                    </svg>
                </button>
                <div
                    className={`${isOpen ? "block" : "hidden"} 
                    w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out`}
                >
                    <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-lg font-semibold text-gray-700 mt-4 md:mt-0">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 md:py-0 hover:text-blue-500 text-blue-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 md:py-0 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/skills"
                                className="block py-2 md:py-0 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                My Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/work-place"
                                className="block py-2 md:py-0 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Work Place
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
