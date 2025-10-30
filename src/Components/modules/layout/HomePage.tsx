import AboutMe from "@/Components/AboutMe";
import SkillPage from "@/Components/Clint";
import Hero from "@/Components/Hero";
import Skills from "@/Components/Skills";
import WorkPlace from "@/Components/WorkPlace";



const HomePage = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Skills />
            <WorkPlace />
            <SkillPage/>
            

        </div>
    );
};

export default HomePage;