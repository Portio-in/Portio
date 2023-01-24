import {useEffect, useRef, useState} from "react";
import ExperienceRecord from "./independent/experience_record";
import AddExperienceRecordModal from "./independent/add_experience_record_modal";
import AddExperienceRecord from "./independent/add_experience_record";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import GlobalController from "../controllers/controller";

function ExperienceBar() {
    const controller = GlobalController.getInstance().achievementController;
    const [experience, setExperience] = useState([]);
    const currentRecord = useRef(null);
    let [isOpenNewExperienceModal, setIsOpenNewExperienceModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    const submitNewExperience = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setExperience([...experience, res.record])
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
                <AddExperienceRecord onClick={()=>setIsOpenNewExperienceModal(true)} />
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
            <AddExperienceRecordModal isOpen={isOpenNewExperienceModal} onClickCloseModal={()=>setIsOpenNewExperienceModal(false)} onClickSave={(e)=>submitNewExperience(e)} />
            {/* Edit/Delete Record */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteLinkModal}
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)}
                editLabel="Edit Achievement  Details"
                deleteLabel="Delete Achievement Record"
                onClickEdit={()=>{}}
                onClickDelete={()=>{
                    deleteExperience(currentRecord.current);
                }}
            />
        </>
    );
}

export default ExperienceBar;