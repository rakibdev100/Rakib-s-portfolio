
import HomePage from "@/Components/modules/layout/HomePage";
import MainLayout from "@/Components/modules/layout/MainLayout";
import AboutPage from "@/pages/AboutPage";
import SkillPage from "@/pages/skillPage";
import WorkPlacePage from "@/pages/workPlace";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/about",
                Component: AboutPage
            },
            {
                path: "/skills",
                Component: SkillPage
            }, {
                path: "/work-place",
                Component: WorkPlacePage

            },




        ]

    }
])

export default router