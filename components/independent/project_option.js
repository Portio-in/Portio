import Image from "next/image";
import templateIcon from "../../assets/img/template.png";


function ProjectOption({record, onClick}) {
    return (
        <>
            <div className="shrink-0 border-2 rounded-lg mb-2 p-2 cursor-pointer" onClick={onClick}>
                <Image src={record.coverImage ?? templateIcon} alt={record.title} width={600} height={600} className="w-[60vw] h-auto md:h-[170px] md:w-auto rounded-lg"  />
                <p className="text-sm md:text-base text-center font-medium px-2 mt-2">{record.title}</p>
            </div>
        </>
    );
}

export default ProjectOption;