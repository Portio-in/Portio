import { useState, useRef, useEffect } from "react";
import toast from 'react-hot-toast';
import AddEducationRecord from "./independent/add_education_record";
import AddEditEducationRecordModal from "./independent/add_edit_education_record_modal";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import EducationRecord from "./independent/education_record";
import GlobalController from "../controllers/controller";

function EducationBar() {
    const controller = GlobalController.getInstance().educationController;
    const [education, setEducation] = useState([]);
    const currentRecord = useRef(null);
    const [isOpenNewEducationModal, setIsOpenNewEducationModal] = useState(false);
    let [isEditEducationModal, setIsEditEducationModal] = useState(false)
    const [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    const submitNewEducation = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setEducation([...education, res.record])
                setIsOpenNewEducationModal(false);
                toast.success("New Education record added");
            } else {
                toast.error("Education record not added, please try again.");
            }
        })
    }

    const editEducation = (record) => {
        controller.update(record).then((res) => {
            if (res.success) {
                setEducation(education.map((e) => {
                    if (e.id === record.id) {
                        return record;
                    }
                    return e;
                }))
                setIsOpenNewEducationModal(false);
                toast.success("Education record updated");
            } else {
                toast.error("Education record not updated, please try again.");
            }
        })
    }

    const deleteEducation = (record) => {
        controller.delete(record).then((res) => {
            if (res) {
                setEducation(education.filter((e) => e.id !== record.id))
                setIsOpenEditDeleteLinkModal(false);
                toast.success("New Education record removed");
            } else {
                toast.error("Education record not removed, please try again.");
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
                <AddEducationRecord onClick={()=>{
                    setIsEditEducationModal(false);
                    setTimeout(()=>setIsOpenNewEducationModal(true), 100);
                }} />
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
            </div>

            {/* Modal to add education record */}
            <AddEditEducationRecordModal
                isOpen={isOpenNewEducationModal}
                isEdit={isEditEducationModal}
                currentEducationRef={currentRecord}
                onClickCloseModal={()=>setIsOpenNewEducationModal(false)}
                onClickSave={(e)=>submitNewEducation(e)}
                onClickEdit={(e)=>editEducation(e)}
            />
            {/* Edit Social link modal */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Education Record"
                deleteLabel="Delete Education Record"
                onClickEdit={()=>{
                    setIsEditEducationModal(true);
                    setTimeout(()=>{
                        setIsOpenNewEducationModal(true);
                        setIsOpenEditDeleteLinkModal(false);
                    }, 100);
                }}
                onClickDelete={()=>{deleteEducation(currentRecord.current);}}
            />
        </>
    );
}

export default EducationBar;