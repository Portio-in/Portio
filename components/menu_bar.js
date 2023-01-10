import MenuBarOption from "./independent/menubar_option";
import profilePicIcon from "../assets/img/profile-pic-icon.png";
import uploadResumeIcon from "../assets/img/upload-resume-icon.png";
import copyPortfolioIcon from "../assets/img/copy-portfolio-link-icon.png";
import domainManageIcon from "../assets/img/domain-manage-icon.png";
import { useState } from "react";
import DomainConfigureModal from "./independent/domain_configure_modal";
import EditProfileModal from "./independent/ediit_profile_modal";

function MenuBar() {
    const [isDomainConfigureModallOpen, setisDomainConfigureModallOpen] = useState(false)
    const [isEditProfileModallOpen, setisEditProfileModallOpen] = useState(false)


    return (
        <>
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto mt-6 md:mt-10">
                <MenuBarOption icon={profilePicIcon} label="Edit Profile" onclick={()=>setisEditProfileModallOpen(true)} />
                <MenuBarOption icon={domainManageIcon} label="Domain Management" onclick={()=>setisDomainConfigureModallOpen(true)} />
                <MenuBarOption icon={uploadResumeIcon} label="Upload Resume" />
                <MenuBarOption icon={copyPortfolioIcon} label="Copy Portfolio" />
            </div>

            <DomainConfigureModal isOpen={isDomainConfigureModallOpen} onClickCloseModal={()=>setisDomainConfigureModallOpen(false)} onClickSave={()=>{}} />
            <EditProfileModal isOpen={isEditProfileModallOpen} onClickCloseModal={()=>setisEditProfileModallOpen(false)} />
        </>
    );
}

export default MenuBar;