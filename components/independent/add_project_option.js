import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AddProjectOption() {
    return (
        <>
            <div class="flex flex-col shrink-0 justify-center items-center hover:bg-[#e8e9eb] h-auto w-auto border rounded-md mb-2 px-8 cursor-pointer">
                <div class="flex justify-center items-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] text-white text-sm md:text-xl bg-brand rounded-full">
                    <i class="fa-solid fa-plus"></i>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <p class="font-medium px-5 mt-4 md:mt-7 text-sm md:text-base text-center">
                    Add Project
                </p>
            </div>
        </>
    );
}

export default AddProjectOption;