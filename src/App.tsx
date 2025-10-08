import Education from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Skills from "@/Components/Skills";
import WorkPlace from "@/Components/WorkPlace";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <WorkPlace />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;