import Image from "next/image";

function PortfolioOption({ icon, label, active }) {
    return (
        <>
            <div className={"shrink-0 " + (active ? "border-brand border-4" : "border") + " rounded-lg mb-2 p-2"}>
                <Image src={icon} className="w-[60vw] h-auto md:h-[170px] md:w-auto rounded-lg" alt={label} />
                <p className="text-sm md:text-base text-center font-medium px-2 mt-2">{label}</p>
            </div>
        </>
    );
}

export default PortfolioOption;