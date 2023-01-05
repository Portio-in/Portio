import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddSocialLinkModal from "./independent/add_social_link_modal";
import AddSocialLinkOption from "./independent/add_social_link_option";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import SocialLinkOption from "./independent/social_link_option";

function SocialLinkBar() {
    let [isOpenNewLinkModal, setIsOpenNewLinkModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)
    const providers = [
        { name: 'Facebook' },
        { name: 'Instagram' },
        { name: 'Github' },
        { name: 'Website' },
        { name: 'Blog' },
        { name: 'Portfolio' },
    ]

    function editSocialLink() {
        setIsOpenEditDeleteLinkModal(true)
    }

    return (
        <>
            {/* title */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Social Links</p>
            {/* <!-- Social Links List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                <AddSocialLinkOption onClick={()=>setIsOpenNewLinkModal(true)} />
                <SocialLinkOption onClick={()=>editSocialLink()} icon={faLink} label="Website" color="#CC6B2C" />
                <SocialLinkOption icon={faFacebookF} label="Facebook" color="#1771E6" />
                <SocialLinkOption icon={faGithub} label="Github" color="#22272C" />
            </div>
            {/* Add  Social link modal */}
            <AddSocialLinkModal isOpen={isOpenNewLinkModal} providers={providers} onClickCloseModal={()=>setIsOpenNewLinkModal(false)} onClickSave={()=>{}} />
            {/* Edit Social link modal */}
            <EditDeleteChoiceModal 
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Social Link"
                deleteLabel="Delete Social Link"
                onClickEdit={()=>{}}
                onClickDelete={()=>{}}
            />
        </>
    );
}

export default SocialLinkBar;