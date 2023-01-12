import Image from "next/image";

/**
 * @param {template} PortfolioTemplate
 * */
function PortfolioOption({ template, active }) {
    return (
        <>
            <div className={"shrink-0 " + (active ? "border-brand border-4" : "border") + " rounded-lg mb-2 p-2"}>
                <Image src={template.previewimg} width={600} height={600} className="w-[60vw] h-auto md:h-[170px] md:w-auto rounded-lg" alt={template.name} />
                <p className="text-sm md:text-base text-center font-medium px-2 mt-2">{template.name} by <em>{template.author}</em></p>
            </div>
        </>
    );
}

export default PortfolioOption;