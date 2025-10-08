
const Skills = () => {
    return (
        <section id="skills" className="flex items-center justify-center py-12">
            <div className="w-full max-w-4xl text-center px-6">
                <h2 className="text-3xl font-bold text-black mb-8">My Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {/* HTML */}
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            alt="HTML"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">HTML5</span>
                    </div>

                    {/* CSS */}
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            alt="CSS"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">CSS3</span>
                    </div>

                    {/* JavaScript */}
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">JavaScript</span>
                    </div>

                    {/* React */}
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">React.js</span>
                    </div>

                    {/* Next.js */}
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            alt="Next.js"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">Next.js</span>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                            alt="TailwindCSS"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">TailwindCSS</span>
                    </div>

                    {/* Node.js */}
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">Node.js</span>
                    </div>

                    {/* Git */}
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            alt="Git"
                            className="w-12 h-12 mb-2"
                        />
                        <span className="text-gray-300">Git</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
