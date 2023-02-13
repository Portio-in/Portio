import MenuBarOption from "./independent/menubar_option";
import uploadResumeIcon from "../assets/img/upload-resume-icon.png";
import copyPortfolioIcon from "../assets/img/copy-portfolio-link-icon.png";
import domainManageIcon from "../assets/img/domain-manage-icon.png";
import {useEffect, useRef, useState} from "react";
import DomainConfigureModal from "./independent/domain_configure_modal";
import EditProfileModal from "./independent/edit_profile_modal";
import GlobalController from  "../controllers/controller";
import Profile from "../models/profile";
import toast from 'react-hot-toast';

function MenuBar() {
    const [isDomainConfigureModalOpen, setIsDomainConfigureModalOpen] = useState(false)
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false)
    const profile = useRef(Profile.empty());
    const [avatar, setAvatar] = useState("https://portio-content.s3.ap-south-1.amazonaws.com/167631382200540418cd29fad71aa0a11ddfdcb192c4f.png");

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
        if(!profile_updated.domain.endsWith(".portio.in"))  {
            toast.error("Domain must be a subdomain of portio");
            return;
        }
        GlobalController.getInstance().profileController.updateDomain(profile_updated.domain).then((res)=>{
            if(res.success) {
                GlobalController.profile = res.record;
                profile.current = res.record;
                setIsDomainConfigureModalOpen(false);
                toast.success("Domain updated");
            }else {
                toast.error("Domain not updated, , please try again.");
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
                toast.success("Profile updated");
            }else {
                toast.error("Profile not updated, please try again.");
            }
        })
    }

    const copyPortfolioLinkToClipboard = async () => {
        await navigator.clipboard.writeText(profile.current.domain);
        toast.success("link copied to clipboard");
    }

    const openPortfolioLinkToNewTab = async () => {
        window.open("//"+profile.current.domain, '_blank');
    }

    useEffect(()=>{
        GlobalController.fetchProfile()
            .then((fetched_profile)=>{
                profile.current = fetched_profile;
                setAvatar(profile.current.avatar);
            })
    })

    return (
        <>
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto mt-6 md:mt-10">
                <MenuBarOption icon={avatar} label="Edit Profile" onclick={openProfileConfigureModal} />
                <MenuBarOption icon={domainManageIcon} label="Update Domain" onclick={openDomainConfigureModal} />
                {/*<MenuBarOption icon={uploadResumeIcon} label="Upload Resume" />*/}
                <MenuBarOption icon={copyPortfolioIcon} label="Copy Portfolio" onclick={copyPortfolioLinkToClipboard}/>
                <MenuBarOption icon={copyPortfolioIcon} label="Open Portfolio" onclick={openPortfolioLinkToNewTab}/>
            </div>

            <DomainConfigureModal profileRef={profile} isOpen={isDomainConfigureModalOpen} onClickCloseModal={()=>setIsDomainConfigureModalOpen(false)} onClickUpdate={updateDomain} />
            <EditProfileModal profileRef={profile} isOpen={isEditProfileModalOpen} onClickCloseModal={()=>setIsEditProfileModalOpen(false)} onClickUpdate={updateProfile}  />
        </>
    );
}

export default MenuBar;