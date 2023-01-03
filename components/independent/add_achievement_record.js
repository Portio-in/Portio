import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddAchievementRecord() {
    return (
        <>
            <div class="flex flex-row justify-center items-center shrink-0 border rounded-lg mb-2 p-4 hover:bg-[#e8e9eb] w-48 cursor-pointer">
                <div class="flex justify-center items-center h-[50px] w-[50px] text-white text-base md:text-xl bg-brand rounded-full">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        </>
    );
}
export default AddAchievementRecord;