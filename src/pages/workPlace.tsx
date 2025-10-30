import Project1 from "../assets/images/jobplace1.jpg";
import Project2 from "../assets/images/jobplace2.jpg";
import Project3 from "../assets/images/jobplace3.avif";

const WorkPlacePage = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8  bg-blue-100">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Work Place
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Check out some of our recent work and case studies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            <div className=" overflow-hidden bg-blue-500">
              <img
                src={Project1}
                alt="Project 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Website Design Company
              </h3>
              <p className="mt-2 text-gray-600">
                Complete redesign of corporate website with improved UX and
                modern aesthetics.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  Web Design
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  UX
                </span>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View case study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            <div className=" overflow-hidden bg-green-500">
              <img
                src={Project2}
                alt="Project 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Mobile Applications Company
              </h3>
              <p className="mt-2 text-gray-600">
                Cross-platform mobile app for health tracking with real-time
                analytics.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                  React Native
                </span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                  Health Tech
                </span>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View case study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            <div className="overflow-hidden bg-purple-500">
              <img
                src={Project3}
                alt="Project 3"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                E-commerce Platform Company
              </h3>
              <p className="mt-2 text-gray-600">
                Custom e-commerce solution with integrated payment processing
                and inventory management.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                  E-commerce
                </span>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                  Payment Gateway
                </span>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View case study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
          >
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkPlacePage;
