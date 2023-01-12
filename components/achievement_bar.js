import {useEffect, useState} from "react";
import AchievementRecord from "./independent/achievement_record";
import AddAchievementsRecordModal from "./independent/add_achievements_record_modal";
import AddAchievementRecord from "./independent/add_achievement_record";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import GlobalController from "../controllers/controller";

function AchievementBar() {
    const controller = GlobalController.getInstance().achievementController;
    const [achievements, setAchievements] = useState([]);
    let [isOpenNewAchievementModal, setIsOpenNewAchievementModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    const submitNewAchievement = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setAchievements([...achievements, res.record])
                setIsOpenNewAchievementModal(false);
            }
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
                <AddAchievementRecord onClick={()=>setIsOpenNewAchievementModal(true)} />
                {achievements.map((ele)=> <AchievementRecord record={ele} key={ele.id} onClick={()=>setIsOpenEditDeleteLinkModal(true)} />)}
                {/*<AchievementRecord onClick={()=>setIsOpenEditDeleteLinkModal(true)} />*/}
            </div>

            {/* Add Achievement Record */}
            <AddAchievementsRecordModal isOpen={isOpenNewAchievementModal} onClickCloseModal={()=>setIsOpenNewAchievementModal(false)} onClickSave={(e)=>submitNewAchievement(e)} />
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