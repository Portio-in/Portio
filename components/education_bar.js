import AddEducationRecord from "./independent/add_education_record";
import EducationRecord from "./independent/education_record";

function EducationBar() {
    return (
        <>
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Education</p>
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddEducationRecord />
                <EducationRecord />
                <EducationRecord />                
            </div>
        </>
    );
}

export default EducationBar;