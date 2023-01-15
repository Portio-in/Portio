import Image from "next/image";

/**
 * @param {template} PortfolioTemplate
 * */
function PortfolioOption({ template, active, onClick }) {
    return (
        <>
            <div className={"shrink-0 " + (active ? "border-brand border-4" : "border") + " rounded-lg mb-2 p-2 cursor-pointer relative"} onClick={()=>onClick(template.id)}>
                <Image src={template.previewimg} width={600} height={600} className="w-[60vw] h-auto md:h-[170px] md:w-auto rounded-lg" alt={template.name} />
                <p className="text-sm md:text-base text-center font-medium p-2 pt-0">‎</p>
                <p className="absolute text-sm md:text-base text-center font-medium inset-x-2 bottom-2 text-ellipsis whitespace-nowrap overflow-hidden">{template.name} by <em>{template.author}</em></p>
            </div>
        </>
    );
}

export default PortfolioOption;