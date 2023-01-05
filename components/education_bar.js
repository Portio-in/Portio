import { useState } from "react";
import AddEducationRecord from "./independent/add_education_record";
import AddEducationRecordModal from "./independent/add_education_record_modal";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import EducationRecord from "./independent/education_record";

function EducationBar() {
    const [isAddEducationModalOpen, setIsAddEducationModalOpen] = useState(false);
    const [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    return (
        <>
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Education</p>
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddEducationRecord onClick={()=>setIsAddEducationModalOpen(true)} />
                <EducationRecord onClick={()=>setIsOpenEditDeleteLinkModal(true)} />
                <EducationRecord />                
            </div>

            {/* Modal to add education record */}
            <AddEducationRecordModal isOpen={isAddEducationModalOpen} onClickSave={()=>{}} onClickCloseModal={()=>setIsAddEducationModalOpen(false)} />
            {/* Edit Social link modal */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Education Record"
                deleteLabel="Delete Education Record"
                onClickEdit={()=>{}}
                onClickDelete={()=>{}}
            />
        </>
    );
}

export default EducationBar;