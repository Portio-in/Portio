import {useEffect, useState} from "react";
import toast from 'react-hot-toast';
import PortfolioOption from "./independent/portfolio_option";
import GlobalController from "../controllers/controller";

function PortfolioTemplateBar() {
    const controller = GlobalController.getInstance();
    const [templates, setTemplates] = useState([]);
    const [activeTemplateID, setActiveTemplateID] = useState(null);

    useEffect(()=>{
        controller.availableChoicesController.fetch_templates().then((templates)=>{
            setTemplates(templates);
        });
        GlobalController.fetchProfile()
            .then((profile)=>{
                setActiveTemplateID(profile.activeTemplate.id)
            })
    }, []);

    const updateTemplate = (template_id) =>{
        controller.profileController.updatePortfolioTemplate(template_id).then((res)=>{
            if(res.success){
                GlobalController.profile = res.record;
                setActiveTemplateID(GlobalController.profile.activeTemplate.id);
                toast.success("Portfolio template changed");
            } else {
                toast.error("Portfolio template not changed, please try again.");
            }
        })
    }

    return (
        <>
            {/* <!-- Choose Portfolio Template --> */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Choose Portfolio Template</p>
            {/* <!-- Templates list --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                {
                    templates.map((e)=><PortfolioOption
                                            active={e.id === activeTemplateID}
                                            template={e} key={e.id}
                                            onClick={updateTemplate}
                    />)
                }
            </div>
        </>);
}

export default PortfolioTemplateBar;

// profile.activeTemplate.id