function EducationRecord() {
    return (
        <>
            <div class="flex flex-col gap-y-1 shrink-0 border rounded-lg mb-2 p-4 hover:bg-[#e8e9eb] cursor-pointer">
                <p class="font-medium text-sm md:text-base">Bachelor of Enginerring, CSE</p>
                <p class="italic text-sm md:text-base">Birnagar High School</p>
                <p>01/2021 - Present<span class="float-right italic">CGPA 9</span></p>
                <p class="max-w-xs">Physics, Chemistry, Mathermatics, History, Geography</p>
            </div>
        </>
    );
}

export default EducationRecord;