import Image from "next/image";

function ProjectOption({icon, label, onClick}) {
    return (
        <>
            <div className="shrink-0 border-2 rounded-lg mb-2 p-2 cursor-pointer" onClick={onClick}>
                <Image src={icon} alt={label} className="w-[60vw] h-auto md:h-[170px] md:w-auto rounded-lg"  />
                <p className="text-sm md:text-base text-center font-medium px-2 mt-2">{label}</p>
            </div>
        </>
    );
}

export default ProjectOption;