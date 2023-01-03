import SocialLinkBar from "../components/social_link_bar";
import MenuBar from "../components/menu_bar";
import Navbar from "../components/navbar";
import PortfolioTemplateBar from "../components/portfolio_template_bar";
import ProjectsBar from "../components/projects_bar";
import EducationBar from "../components/education_bar";
import CertificationBar from "../components/certification_bar";
import AchievementBar from "../components/achievement_bar";
import Footer from "../components/footer";

export default function dashbaord() {
    return (
        <>
            <div class="p-4 md:px-8 md:py-2 overflow-x-hidden">
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
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}