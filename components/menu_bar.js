import MenuBarOption from "./independent/menubar_option";
import profilePicIcon from "../assets/img/profile-pic-icon.png";
import uploadResumeIcon from "../assets/img/upload-resume-icon.png";
import copyPortfolioIcon from "../assets/img/copy-portfolio-link-icon.png";
import domainManageIcon from "../assets/img/domain-manage-icon.png";

function MenuBar() {
    return (
        <>
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto mt-6 md:mt-10">
                <MenuBarOption icon={profilePicIcon} label="Edit Profile" />
                <MenuBarOption icon={domainManageIcon} label="Domain Management" />
                <MenuBarOption icon={uploadResumeIcon} label="Upload Resume" />
                <MenuBarOption icon={copyPortfolioIcon} label="Copy Portfolio" />
            </div>
        </>
    );
}

export default MenuBar;