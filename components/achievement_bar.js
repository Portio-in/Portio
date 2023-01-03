import AchievementRecord from "./independent/achievement_record";
import AddAchievementRecord from "./independent/add_achievement_record";

function AchievementBar() {
    return (
        <>
            {/* title */}
            <p class="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Achievements</p>
            {/* <!-- Achievements List --> */}
            <div class="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddAchievementRecord />
                <AchievementRecord />
            </div>
        </>
    );
}

export default AchievementBar;