import Image from "next/image";

function MenuBarOption({ icon, label, onclick }) {
    return (
        <>
            <div className="flex flex-col shrink-0 justify-center items-center hover:bg-[#e8e9eb] h-[120px] w-[120px] md:h-[180px] md:w-[180px] border rounded-md cursor-pointer mb-2" onClick={onclick}>
                <Image
                    src={icon}
                    className="h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                    alt={label}
                />
                <p className="font-medium px-5 mt-4 md:mt-7 text-sm md:text-base text-center">
                    {label}
                </p>
            </div>
        </>
    );

}

export default MenuBarOption;