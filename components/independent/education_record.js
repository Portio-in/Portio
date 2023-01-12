function EducationRecord({ onClick, record }) {
    return (
        <>
            <div className="flex flex-col gap-y-1 shrink-0 border rounded-lg mb-2 p-4 hover:bg-[#e8e9eb] cursor-pointer" onClick={onClick}>
                <p className="font-medium text-sm md:text-base">{record.courseName}</p>
                <p className="italic text-sm md:text-base">{record.institutionName}</p>
                <p>{record.startingDate} - {record.getEndingDate()}<span className="float-right italic ml-4">{record.score}</span></p>
                <p className="max-w-xs">{
                    record.subjects.map((ele, index) => {
                        if (index === record.subjects.length - 1) {
                            return ele;
                        }
                        return ele + ", ";
                    })
                }</p>
            </div>
        </>
    );
}

export default EducationRecord;