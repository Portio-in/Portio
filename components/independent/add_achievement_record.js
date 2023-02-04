import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddAchievementRecord({onClick}) {
    return (
        <>
            <div className="flex flex-row justify-center items-center shrink-0 border rounded-lg mb-2 p-4 hover:bg-[#e8e9eb] w-48 cursor-pointer" onClick={onClick}>
                <div className="flex justify-center items-center h-[50px] w-[50px] text-white text-base md:text-xl bg-brand rounded-full">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
            {/* <div className="flex flex-col shrink-0 justify-center items-center hover:bg-[#e8e9eb] h-auto w-auto border rounded-md mb-2 px-8 py-8 cursor-pointer" onClick={onClick}>
                <div className="flex justify-center items-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] text-white text-sm md:text-xl bg-brand rounded-full">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <p className="font-medium px-5 mt-4 md:mt-7 text-sm md:text-base text-center">
                    Add Achievement
                </p>
            </div> */}
        </>
    );
}
export default AddAchievementRecord;