import SocialLinkBar from "../components/social_link_bar";
import MenuBar from "../components/menu_bar";
import Navbar from "../components/navbar";
import PortfolioTemplateBar from "../components/portfolio_template_bar";
import ProjectsBar from "../components/projects_bar";
import EducationBar from "../components/education_bar";
import CertificationBar from "../components/certification_bar";

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
                <p class="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Achievements</p>
                {/* <!-- Achievements List --> */}
                <div class="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                    <div class="flex flex-row justify-center items-center shrink-0 border rounded-lg mb-2 p-4 hover:bg-[#e8e9eb] w-48">
                        <div class="flex justify-center items-center h-[50px] w-[50px] text-white text-base md:text-xl bg-brand rounded-full">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div class="flex flex-row shrink-0 border rounded-lg mb-2 p-4 hover:bg-[#e8e9eb]">
                        <div class="flex flex-col gap-y-1 mr-6">
                            <p class="font-medium text-sm md:text-base">Hackodisha 2.0 Winner</p>
                            <p class="italic text-sm md:text-base">by NITR</p>
                            <p>01/2021 - 07/2021</p>
                        </div>
                        <div class="flex justify-center items-center text-white text-3xl h-auto w-20 bg-brand rounded-lg">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>
                </div>
                <div class="mt-12 mb-4">
                    Created by @Tanmoy741127 with ❤️
                </div>

            </div>
        </>
    );
}