import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialLinkOption({ icon, label, color, onClick }) {
    return (
        <>
            <div className="flex flex-col shrink-0 justify-center items-center hover:bg-[#e8e9eb] h-[120px] w-[120px] md:h-[180px] md:w-[180px] border rounded-md mb-2 cursor-pointer" onClick={onClick}>
                <div className={"flex justify-center items-center h-[30px] w-[30px] md:h-[50px] md:w-[50px] text-white text-sm md:text-xl rounded-full"} style={{
                    backgroundColor: color
                }}>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <p className="font-medium px-5 mt-4 md:mt-7 text-sm md:text-base text-center">
                    {label}
                </p>
            </div>
        </>
    );
}

export default SocialLinkOption;