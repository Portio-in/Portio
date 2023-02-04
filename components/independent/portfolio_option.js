import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {faArrowUpRightFromSquare, faStar} from "@fortawesome/free-solid-svg-icons";

/**
 * @param {template} PortfolioTemplate
 * */
function PortfolioOption({ template, active, onClick }) {
    return (
        <>
            <div className={"shrink-0 " + (active ? "border-brand border-4" : "border") + " rounded-lg mb-2 p-2 cursor-pointer relative"} onClick={()=>onClick(template.id)}>
                <Image src={template.previewimg} width={600} height={600} className="w-[60vw] h-auto md:h-[170px] md:w-auto rounded-lg" alt={template.name} />
                <p className="text-sm md:text-base text-center font-medium p-2 pt-0">‎</p>
                <p className="text-sm md:text-base text-center font-medium p-2 pt-0">‎</p>
                <p className="text-sm md:text-base text-center font-medium p-2 pt-0">‎</p>
                <p className="absolute text-sm md:text-base text-center font-medium inset-x-2 bottom-2 text-ellipsis whitespace-nowrap overflow-hidden">
                    {template.name}
                    <br></br>
                    <FontAwesomeIcon icon={faGithub} /> {template.author}&nbsp;<Link href={template.githubLink} target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>
                    <br></br>
                    <FontAwesomeIcon icon={faStar} color="#FFD700" /> {template.totalInstalls} times installed
                </p>
            </div>
        </>
    );
}

export default PortfolioOption;