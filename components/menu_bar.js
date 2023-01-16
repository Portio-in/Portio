import MenuBarOption from "./independent/menubar_option";
import profilePicIcon from "../assets/img/profile-pic-icon.png";
import uploadResumeIcon from "../assets/img/upload-resume-icon.png";
import copyPortfolioIcon from "../assets/img/copy-portfolio-link-icon.png";
import domainManageIcon from "../assets/img/domain-manage-icon.png";
import {useRef, useState} from "react";
import DomainConfigureModal from "./independent/domain_configure_modal";
import EditProfileModal from "./independent/ediit_profile_modal";
import GlobalController from  "../controllers/controller";
import Profile from "../models/profile";

function MenuBar() {
    const [isDomainConfigureModalOpen, setIsDomainConfigureModalOpen] = useState(false)
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false)
    const profile = useRef(Profile.empty());

    const openDomainConfigureModal = () => {
        GlobalController.fetchProfile()
            .then((updated_profile)=>{
                profile.current = updated_profile;
                if(profile.current.domain){
                    setIsDomainConfigureModalOpen(true);
                }else{
                    setIsEditProfileModalOpen(true);
                }
            })
    }

    const updateDomain = (profile_updated) =>{
        GlobalController.getInstance().profileController.updateDomain(profile_updated.domain).then((res)=>{
            if(res.success){
                GlobalController.profile = res.record;
                profile.current = res.record;
                setIsDomainConfigureModalOpen(false);
            }
        })
    }

    const openProfileConfigureModal = () => {
        GlobalController.fetchProfile()
            .then((updated_profile)=>{
                profile.current = updated_profile;
                setIsEditProfileModalOpen(true);
            })
    }

    const updateProfile = (profile_updated) =>{
        GlobalController.getInstance().profileController.update(profile_updated).then((res)=>{
            if(res.success){
                GlobalController.profile = res.record;
                profile.current = res.record;
                setIsEditProfileModalOpen(false);
            }
        })
    }

    return (
        <>
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto mt-6 md:mt-10">
                <MenuBarOption icon={profilePicIcon} label="Edit Profile" onclick={openProfileConfigureModal} />
                <MenuBarOption icon={domainManageIcon} label="Domain Management" onclick={openDomainConfigureModal} />
                <MenuBarOption icon={uploadResumeIcon} label="Upload Resume" />
                <MenuBarOption icon={copyPortfolioIcon} label="Copy Portfolio" />
            </div>

            <DomainConfigureModal profileRef={profile} isOpen={isDomainConfigureModalOpen} onClickCloseModal={()=>setIsDomainConfigureModalOpen(false)} onClickUpdate={updateDomain} />
            <EditProfileModal profileRef={profile} isOpen={isEditProfileModalOpen} onClickCloseModal={()=>setIsEditProfileModalOpen(false)} onClickUpdate={updateProfile}  />
        </>
    );
}

export default MenuBar;