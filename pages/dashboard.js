import SocialLinkBar from "../components/social_link_bar";
import MenuBar from "../components/menu_bar";
import Navbar from "../components/navbar";
import PortfolioTemplateBar from "../components/portfolio_template_bar";
import ProjectsBar from "../components/projects_bar";
import EducationBar from "../components/education_bar";
import CertificationBar from "../components/certification_bar";
import AchievementBar from "../components/achievement_bar";
import ExperienceBar from "../components/experience_bar";
import Footer from "../components/footer";
import {getCookies} from "cookies-next";
import {useEffect} from "react";
import GlobalController from "../controllers/controller";

export default function dashbaord({token}) {
    useEffect(()=>{
        const controller = GlobalController.getInstance();
        controller.apiClient.setToken(token);
    }, []);
    return (
        <>
            <div className="p-4 md:px-8 md:py-2 overflow-x-hidden">
                {/* Navbar  */}
                <Navbar/>
                {/* <!-- Menus --> */}
                <MenuBar />
                {/* Portfolio Template bar */}
                <PortfolioTemplateBar />
                {/* Projects */}
                <ProjectsBar />
                {/* <!-- Social Links --> */}
                <SocialLinkBar />
                {/* <!-- Education --> */}
                <EducationBar />
                {/* <!-- Certifications --> */}
                <CertificationBar />
                {/* <!-- Achievements --> */}
                <AchievementBar />
                {/* <!-- Experience --> */}
                <ExperienceBar />
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}


export async function getServerSideProps(context) {
    const { req, res } = context;
    const cookies = getCookies({ req });
    let token = '';
    if(!cookies.token ){
        res.redirect("/");
    }

    token = cookies.token;

    return {
        props: {
            token
        },
    };
}