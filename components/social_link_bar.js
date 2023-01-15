import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import {useEffect, useRef, useState} from "react";
import AddSocialLinkModal from "./independent/add_social_link_modal";
import AddSocialLinkOption from "./independent/add_social_link_option";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import SocialLinkOption from "./independent/social_link_option";
import GlobalController from "../controllers/controller";
import {faLink} from "@fortawesome/free-solid-svg-icons";

function SocialLinkBar() {
    const controller = GlobalController.getInstance().socialLinkController;
    const [socialLinks, setSocialLinks] = useState([]);
    const currentRecord = useRef(null);
    let [isOpenNewLinkModal, setIsOpenNewLinkModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    function editSocialLink() {
        setIsOpenEditDeleteLinkModal(true)
    }

    const submitNewSocialLink = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setSocialLinks([...socialLinks, res.record])
                setIsOpenNewLinkModal(false);
            }
        })
    }

    const deleteSocialLink = (record) => {
        controller.delete(record).then((res) => {
            if (res) {
                setSocialLinks(socialLinks.filter((e) => e.id !== record.id))
                setIsOpenEditDeleteLinkModal(false);
            }
        })
    }
    useEffect(()=>{
        controller.fetch_all().then((records)=>{
            setSocialLinks(records);
        });
    }, []);

    return (
        <>
            {/* title */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Social Links</p>
            {/* <!-- Social Links List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                <AddSocialLinkOption onClick={()=>setIsOpenNewLinkModal(true)} />
                {
                    socialLinks.map((ele)=>
                        <SocialLinkOption
                            label={ele.type.getTitle()}
                            icon={ele.type.type === "facebook" ? faFacebookF :
                                ele.type.type === "github" ? faGithub : faLink}
                            color={
                                ele.type.type === "facebook" ? "#3F72E5" :
                                ele.type.type === "github" ? "#161B23" : "#cc6b2c"
                            }
                            key={ele.id}
                            onClick={()=>{
                                currentRecord.current = ele;
                                setIsOpenEditDeleteLinkModal(true);
                            }}
                        />
                    )
                }
            </div>
            {/* Add  Social link modal */}
            <AddSocialLinkModal isOpen={isOpenNewLinkModal} onClickCloseModal={()=>setIsOpenNewLinkModal(false)} onClickSave={(e)=>{submitNewSocialLink(e)}} />
            {/* Edit Social link modal */}
            <EditDeleteChoiceModal 
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Social Link"
                deleteLabel="Delete Social Link"
                onClickEdit={()=>{}}
                onClickDelete={(e)=>{
                    deleteSocialLink(currentRecord.current)
                }}
            />
        </>
    );
}

export default SocialLinkBar;