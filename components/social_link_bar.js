import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import {useEffect, useRef, useState} from "react";
import toast from 'react-hot-toast';
import AddEditSocialLinkModal from "./independent/add_edit_social_link_modal";
import AddSocialLinkOption from "./independent/add_social_link_option";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import SocialLinkOption from "./independent/social_link_option";
import GlobalController from "../controllers/controller";
import {faLink} from "@fortawesome/free-solid-svg-icons";

function SocialLinkBar() {
    const controller = GlobalController.getInstance().socialLinkController;
    const [socialLink, setSocialLink] = useState([]);
    const currentRecord = useRef(null);
    let [isOpenNewSocialLinkModal, setIsOpenNewSocialLinkModal] = useState(false)
    let [isEditSocialLinkModal, setIsEditSocialLinkModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    const editSocialLink = (record) => {
        controller.update(record).then((res) => {
            if (res.success) {
                setSocialLink(socialLink.map((e) => {
                    if (e.id === record.id) {
                        return record;
                    }
                    return e;
                }))
                setIsOpenNewSocialLinkModal(false);
                toast.success("Social link updated");
            } else {
                toast.error("Social link not updated, please try again.");
            }
        })
    }

    const submitNewSocialLink = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setSocialLink([...socialLink, res.record])
                setIsOpenNewSocialLinkModal(false);
                toast.success("New social link added");
            } else {
                toast.error("Social link not added, please try again.");
            }
            setIsOpenEditDeleteLinkModal(false);
        })
    }

    const deleteSocialLink = (record) => {
        controller.delete(record).then((res) => {
            if (res) {
                setSocialLink(socialLink.filter((e) => e.id !== record.id))
                setIsOpenEditDeleteLinkModal(false);
                toast.success("Social link removed");
            } else {
                toast.error("Social link not removed, please try again.");
            }
            setIsOpenEditDeleteLinkModal(false);
        })
    }

    useEffect(()=>{
        controller.fetch_all().then((records)=>{
            setSocialLink(records);
        });
    }, []);

    return (
        <>
            {/* title */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Social Links</p>
            {/* <!-- Social Links List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                <AddSocialLinkOption onClick={()=> {
                    setIsEditSocialLinkModal(false);
                    setTimeout(()=>setIsOpenNewSocialLinkModal(true), 100);
                }} />
                {
                    socialLink.map((ele)=>
                        <SocialLinkOption
                            key={ele.id}
                            label={ele.type.getTitle()}
                            icon={ele.type.type === "facebook" ? faFacebookF :
                                ele.type.type === "github" ? faGithub : faLink}
                            color={
                                ele.type.type === "facebook" ? "#3F72E5" :
                                ele.type.type === "github" ? "#161B23" : "#cc6b2c"
                            }
                            onClick={()=>{
                                currentRecord.current = ele;
                                setIsOpenEditDeleteLinkModal(true);
                            }}
                        />
                    )
                }
            </div>
            {/* Add  Social link modal */}
            <AddEditSocialLinkModal
                isOpen={isOpenNewSocialLinkModal}
                isEdit={isEditSocialLinkModal}
                currentSocialLinkRef={currentRecord}
                onClickCloseModal={()=>setIsOpenNewSocialLinkModal(false)}
                onClickSave={(e)=>submitNewSocialLink(e)}
                onClickEdit={(e)=>editSocialLink(e)} />
            {/* Edit Social link modal */}
            <EditDeleteChoiceModal 
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Social Link"
                deleteLabel="Delete Social Link"
                onClickEdit={()=>{
                    setIsEditSocialLinkModal(true);
                    setIsOpenNewSocialLinkModal(true);
                }}
                onClickDelete={(e)=>{
                    deleteSocialLink(currentRecord.current)
                }}
            />
        </>
    );
}

export default SocialLinkBar;