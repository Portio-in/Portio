import {useEffect, useRef, useState} from "react";
import toast from 'react-hot-toast';
import AchievementRecord from "./independent/achievement_record";
import AddEditAchievementsRecordModal from "./independent/add_edit_achievements_record_modal";
import AddAchievementRecord from "./independent/add_achievement_record";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import GlobalController from "../controllers/controller";

function AchievementBar() {
    const controller = GlobalController.getInstance().achievementController;
    const [achievements, setAchievements] = useState([]);
    const currentRecord = useRef(null);
    let [isOpenNewAchievementModal, setIsOpenNewAchievementModal] = useState(false)
    let [isEditAchievementModal, setIsEditAchievementModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    const submitNewAchievement = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setAchievements([...achievements, res.record])
                setIsOpenNewAchievementModal(false);
                toast.success("New achievement added");
            } else {
                toast.error("Achievement not added, please try again.");
            }

        })
    }

    const editAchievement = (record) => {
        controller.update(record).then((res) => {
            if (res.success) {
                setAchievements(achievements.map((e) => {
                    if (e.id === record.id) {
                        return record;
                    }
                    return e;
                }))
                setIsOpenNewAchievementModal(false);    
                toast.success("Achievement updated");
            } else {
                toast.error("Achievement not updated, please try again.");
            }
            setIsOpenEditDeleteLinkModal(false);
        })
    }

    const deleteAchievement = (record) => {
        controller.delete(record).then((res) => {
            if (res) {
                setAchievements(achievements.filter((e) => e.id !== record.id))
                setIsOpenEditDeleteLinkModal(false);
                toast.success("Achievement removed");
            } else {
                toast.error("Achievement not removed, please try again.");
            }
            setIsOpenEditDeleteLinkModal(false);
        })
    }

    useEffect(()=>{
        controller.fetch_all().then((records)=>{
            setAchievements(records);
        });
    }, []);



    return (
        <>
            {/* title */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Achievements</p>
            {/* <!-- Achievements List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddAchievementRecord onClick={()=> {
                    setIsEditAchievementModal(false);
                    setTimeout(()=>setIsOpenNewAchievementModal(true), 100);
                }} />
                {
                    achievements.map((ele)=>
                        <AchievementRecord
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

            {/* Add Achievement Record */}
            <AddEditAchievementsRecordModal
                isOpen={isOpenNewAchievementModal}
                isEdit={isEditAchievementModal}
                currentAchievementRef={currentRecord}
                onClickCloseModal={()=>setIsOpenNewAchievementModal(false)}
                onClickSave={(e)=>submitNewAchievement(e)}
                onClickEdit={(e)=>editAchievement(e)}
            />
            {/* Edit/Delete Record */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Achievement  Details"
                deleteLabel="Delete Achievement Record"
                onClickEdit={()=>{
                    setIsEditAchievementModal(true);
                    setIsOpenNewAchievementModal(true);
                }}
                onClickDelete={()=>{
                    deleteAchievement(currentRecord.current);
                }}
            />       
        </>
    );
}

export default AchievementBar;