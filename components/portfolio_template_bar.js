import PortfolioOption from "./independent/portfolio_option";
import GlobalController from "../controllers/controller";
import {useEffect, useState} from "react";

function PortfolioTemplateBar() {
    const controller = GlobalController.getInstance();
    const [templates, setTemplates] = useState([]);

    useEffect(()=>{
        controller.availableChoicesController.fetch_templates().then((templates)=>{
            console.log(templates);
            setTemplates(templates);
        });
    }, []);

    return (
        <>
            {/* <!-- Choose Portfolio Template --> */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Choose Portfolio Template</p>
            {/* <!-- Templates list --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                {
                    templates.map((e)=><PortfolioOption active={e.id === "clcxhn1630000qtjs7h12ra2d"} template={e} key={e.id} onClick={()=>{}}/>)
                }
            </div>
        </>);
}

export default PortfolioTemplateBar;

// profile.activeTemplate.id