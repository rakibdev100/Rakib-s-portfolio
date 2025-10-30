import skillImage from "../assets/images/rakibpro1.jpg";
const Skills = () => {
    return (
        <section id="skills" className="flex items-center justify-center py-12  bg-blue-50">
            <div className="w-full max-w-4xl text-center px-6">
                <h2 className="text-3xl font-bold text-black mb-8">My Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {/* HTML */}
                    <div className="flex flex-col items-center p-6  bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            alt="HTML"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">HTML5</span>
                    </div>

                    {/* CSS */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            alt="CSS"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">CSS3</span>
                    </div>

                    {/* JavaScript */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">JavaScript</span>
                    </div>

                    {/* React */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">React.js</span>
                    </div>

                    {/* Next.js */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            alt="Next.js"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">Next.js</span>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                            alt="TailwindCSS"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">TailwindCSS</span>
                    </div>

                    {/* Node.js */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">Node.js</span>
                    </div>

                    {/* Git */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            alt="Git"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">Git</span>
                    </div>
                </div>
                <div className=" mt-4 block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
                    <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                        <div className="sm:order-last sm:shrink-0">
                            <img
                                alt="Author"
                                src={skillImage}
                                className="size-16 rounded-full object-cover sm:size-[72px]"
                            />
                        </div>

                        <div className="mt-4 sm:mt-0">
                            <h3 className="text-lg font-medium text-pretty text-gray-900">
                                HTML, CSS, JavaScript, React.js, Next.js, TailwindCSS, Node.js, git all are my skills.  I build my first portfolio website with these.
                            </h3>

                            <p className="mt-1 text-sm text-gray-700">By Rakibul hasan</p>

                            <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                                Hi there!
                                I’m a passionate Web Developer, and I love creating modern, responsive, and user-friendly websites.
                                If you’re looking to have your portfolio website built, I’d be happy to design and develop one for you clean, fast, and fully customized to match your style and goals.
                                Let’s work together and bring your online presence to life!
                            </p>
                        </div>
                    </div>

                    <dl className="mt-6 flex gap-4 lg:gap-6">
                        <div className="flex items-center gap-2">
                            <dt className="text-gray-700">
                                <span className="sr-only"> Published on </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 
                   0 0 1 2.25-2.25h13.5A2.25 2.25 
                   0 0 1 21 7.5v11.25m-18 
                   0A2.25 2.25 0 0 0 5.25 
                   21h13.5A2.25 2.25 0 0 0 
                   21 18.75m-18 0v-7.5A2.25 
                   2.25 0 0 1 5.25 9h13.5A2.25 
                   2.25 0 0 1 21 11.25v7.5"
                                    />
                                </svg>
                            </dt>
                            <dd className="text-xs text-gray-700">30/10/2025</dd>
                        </div>

                        <div className="flex items-center gap-2">
                            <dt className="text-gray-700">
                                <span className="sr-only"> Reading time </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.042A8.967 8.967 0 0 0 6 
                   3.75c-1.052 0-2.062.18-3 
                   .512v14.25A8.987 8.987 0 0 1 
                   6 18c2.305 0 4.408.867 6 
                   2.292m0-14.25a8.966 8.966 
                   0 0 1 6-2.292c1.052 0 2.062.18 
                   3 .512v14.25A8.987 8.987 
                   0 0 0 18 18a8.967 8.967 
                   0 0 0-6 2.292m0-14.25v14.25"
                                    />
                                </svg>
                            </dt>
                            <dd className="text-xs text-gray-700">12 minutes</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Skills;
