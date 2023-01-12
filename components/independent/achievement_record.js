import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function AchievementRecord({onClick, record}) {
    return (
        <>
            <div className="flex flex-row shrink-0 border rounded-lg mb-2 p-4 hover:bg-[#e8e9eb] cursor-pointer" onClick={onClick}>
                <div className="flex flex-col gap-y-1 mr-6">
                    <p className="font-medium text-sm md:text-base">{record.title}</p>
                    <p className="italic text-sm md:text-base">{record.description}</p>
                    <p>{record.date}</p>
                </div>
                <Link href={record.referenceLink} target="_blank" className="flex justify-center items-center text-white text-3xl h-auto w-20 bg-brand rounded-lg">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </Link>
            </div>
        </>
    );
}

export default AchievementRecord;