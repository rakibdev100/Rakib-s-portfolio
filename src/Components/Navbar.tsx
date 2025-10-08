import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="lg:px-16 px-4 bg-neutral-200 flex flex-wrap items-center py-1 shadow-md top-0 left-0 right-0 fixed z-20">
            {/* Logo */}
            <div className="flex-1 flex justify-between items-center">
                <a
                    href="#"
                    className="text-xl font-bold text-amber-700 text-[26px] hover:text-blue-500"
                >
                    Portfolio
                </a>

                {/* Mobile menu button */}
                <button
                    className="md:hidden block text-gray-900 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                    >
                        {isOpen ? (
                            <path d="M6 6L14 14M6 14L14 6" /> // X icon
                        ) : (
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> // Menu icon
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu Items */}
            <div
                className={`${isOpen ? "block" : "hidden"
                    } w-full md:flex md:items-center md:w-auto`}
            >
                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0 text-[20px] font-bold">
                    <li>
                        <a
                            className="md:p-4 py-3 px-0 block hover:text-blue-500 text-blue-500"
                            href="#"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="md:p-4 py-3 px-0 block hover:text-blue-500" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="md:p-4 py-3 px-0 block hover:text-blue-500" href="#skills">
                            My Skills
                        </a>
                    </li>
                    <li>
                        <a
                            className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:text-blue-500"
                            href="#Contuct me"
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
