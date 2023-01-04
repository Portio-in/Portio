import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CertificationRecord({ }) {
    return (
        <>
            <div className="flex flex-row shrink-0 border rounded-lg mb-2 p-4 hover:bg-[#e8e9eb] cursor-pointer">
                <div className="flex flex-col gap-y-1 mr-6">
                    <p className="font-medium text-sm md:text-base">NLP Advanved</p>
                    <p className="italic text-sm md:text-base">Coursera</p>
                    <p>01/2021 - 07/2021</p>
                </div>
                <div className="flex justify-center items-center text-white text-3xl h-auto w-20 bg-brand rounded-lg">
                    <FontAwesomeIcon icon={faFileContract} />
                </div>
            </div>
        </>
    );
}

export default CertificationRecord;