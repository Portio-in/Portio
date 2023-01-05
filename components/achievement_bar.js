import { useState } from "react";
import AchievementRecord from "./independent/achievement_record";
import AddAchievementsRecordModal from "./independent/add_achievements_record_modal";
import AddAchievementRecord from "./independent/add_achievement_record";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";

function AchievementBar() {
    let [isOpenNewAchievementModal, setIsOpenNewAchievementModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    return (
        <>
            {/* title */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Achievements</p>
            {/* <!-- Achievements List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddAchievementRecord onClick={()=>setIsOpenNewAchievementModal(true)} />
                <AchievementRecord onClick={()=>setIsOpenEditDeleteLinkModal(true)} />
            </div>

            {/* Add Achievement Record */}
            <AddAchievementsRecordModal isOpen={isOpenNewAchievementModal} onClickCloseModal={()=>setIsOpenNewAchievementModal(false)} onClickSave={()=>{}} />
            {/* Edit/Delete Record */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Achievement  Details"
                deleteLabel="Delete Achievement Record"
                onClickEdit={()=>{}}
                onClickDelete={()=>{}}
            />       
        </>
    );
}

export default AchievementBar;