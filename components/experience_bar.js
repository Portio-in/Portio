import {useEffect, useRef, useState} from "react";
import ExperienceRecord from "./independent/experience_record";
import AddEditExperienceRecordModal from "./independent/add_edit_experience_record_modal";
import AddExperienceRecord from "./independent/add_experience_record";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import GlobalController from "../controllers/controller";

function ExperienceBar() {
    const controller = GlobalController.getInstance().experienceController;
    const [experience, setExperience] = useState([]);
    const currentRecord = useRef(null);
    let [isOpenNewExperienceModal, setIsOpenNewExperienceModal] = useState(false)
    let [isEditExperienceModal, setIsEditExperienceModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    const submitNewExperience = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setExperience([...experience, res.record])
                setIsOpenNewExperienceModal(false);
            }
        })
    }

    const editExperience = (record) => {
        controller.update(record).then((res) => {
            if (res.success) {
                setExperience(experience.map((e) => {
                    if (e.id === record.id) {
                        return record;
                    }
                    return e;
                }))
                setIsOpenNewExperienceModal(false);
            }
        })
    }

    const deleteExperience = (record) => {
        controller.delete(record).then((res) => {
            if (res) {
                setExperience(experience.filter((e) => e.id !== record.id))
                setIsOpenEditDeleteLinkModal(false);
            }
        })
    }

    useEffect(()=>{
        controller.fetch_all().then((records)=>{
            setExperience(records);
        });
    }, []);

    return (
        <>
            {/* title */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Experiences</p>
            {/* <!-- Experience List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddExperienceRecord onClick={()=> {
                    setIsEditExperienceModal(false);
                    setTimeout(()=>setIsOpenNewExperienceModal(true), 100);
                }} />
                {
                    experience.map((ele)=>
                        <ExperienceRecord
                            record={ele}
                            key={ele.id}
                            onClick={()=>{
                                currentRecord.current = ele;
                                setIsOpenEditDeleteLinkModal(true);
                            }}
                        />
                    )
                }
            </div>

            {/* Add Experience Record */}
            <AddEditExperienceRecordModal
                isOpen={isOpenNewExperienceModal}
                isEdit={isEditExperienceModal}
                currentExperienceRef={currentRecord}
                onClickCloseModal={()=>setIsOpenNewExperienceModal(false)}
                onClickSave={(e)=>submitNewExperience(e)}
                onClickEdit={(e)=>editExperience(e)}
            />
            {/* Edit/Delete Record */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteLinkModal}
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)}
                editLabel="Edit Experience  Details"
                deleteLabel="Delete Experience Record"
                onClickEdit={()=>{
                    setIsEditExperienceModal(true);
                    setTimeout(()=>{
                        setIsOpenNewExperienceModal(true);
                        setIsOpenEditDeleteLinkModal(false);
                    }, 100);
                }}
                onClickDelete={()=>{
                    deleteExperience(currentRecord.current);
                }}
            />
        </>
    );
}

export default ExperienceBar;