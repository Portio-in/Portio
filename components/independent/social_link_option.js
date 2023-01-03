import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialLinkOption({ icon, label, color }) {
    return (
        <>
            <div class="flex flex-col shrink-0 justify-center items-center hover:bg-[#e8e9eb] h-[120px] w-[120px] md:h-[180px] md:w-[180px] border rounded-md mb-2 cursor-pointer">
                <div class={"flex justify-center items-center h-[30px] w-[30px] md:h-[50px] md:w-[50px] text-white text-sm md:text-xl bg-["+color+"] rounded-full"}>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <p class="font-medium px-5 mt-4 md:mt-7 text-sm md:text-base text-center">
                    {label}
                </p>
            </div>
        </>
    );
}

export default SocialLinkOption;