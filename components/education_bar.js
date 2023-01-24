import { useState, useRef, useEffect } from "react";
import AddEducationRecord from "./independent/add_education_record";
import AddEditEducationRecordModal from "./independent/add_edit_education_record_modal";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import EducationRecord from "./independent/education_record";
import GlobalController from "../controllers/controller";

function EducationBar() {
    const controller = GlobalController.getInstance().educationController;
    const [education, setEducation] = useState([]);
    const currentRecord = useRef(null);
    const [isAddEducationModalOpen, setIsAddEducationModalOpen] = useState(false);
    const [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    const submitNewEducation = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setEducation([...education, res.record])
                setIsAddEducationModalOpen(false);
            }
        })
    }

    const deleteEducation = (record) => {
        controller.delete(record).then((res) => {
            if (res) {
                setEducation(education.filter((e) => e.id !== record.id))
                setIsOpenEditDeleteLinkModal(false);
            }
        })
    }

    useEffect(()=>{
        controller.fetch_all().then((records)=>{
            setEducation(records);
        });
    }, []);

    return (
        <>
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Education</p>
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddEducationRecord onClick={()=>setIsAddEducationModalOpen(true)} />
                {
                    education.map((ele)=>
                        <EducationRecord
                            record={ele}
                            key={ele.id}
                            onClick={()=>{
                                currentRecord.current = ele;
                                setIsOpenEditDeleteLinkModal(true);
                            }}
                        />
                    )
                }
                {/*<EducationRecord onClick={()=>setIsOpenEditDeleteLinkModal(true)} />               */}
            </div>

            {/* Modal to add education record */}
            <AddEditEducationRecordModal isOpen={isAddEducationModalOpen} onClickSave={(e)=>{submitNewEducation(e)}} onClickCloseModal={()=>setIsAddEducationModalOpen(false)} />
            {/* Edit Social link modal */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Education Record"
                deleteLabel="Delete Education Record"
                onClickEdit={()=>{}}
                onClickDelete={()=>{deleteEducation(currentRecord.current);}}
            />
        </>
    );
}

export default EducationBar;