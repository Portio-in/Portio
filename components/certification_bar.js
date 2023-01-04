import AddCertificationRecord from "./independent/add_certification_record";
import CertificationRecord from "./independent/certification_record";

function CertificationBar() {
    return (
        <>
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Certifications</p>
            {/* <!-- Certifications List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddCertificationRecord/>
                <CertificationRecord />
                
            </div>
        </>);
}

export default CertificationBar;