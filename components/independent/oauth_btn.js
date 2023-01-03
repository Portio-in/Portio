import Image from "next/image";

export default function oauth_btn(props){
    return (
        <>
        <button className="flex flex-row justify-content items-center rounded-md text-lg py-3 px-4 border border-current hover:bg-[#e8e9eb]" onClick={props.onClick}>
            <Image className="h-[32px] w-[32px] mr-4" src={props.icon} alt={props.label}/>
            {props.label}
        </button>
        </>
    )
}