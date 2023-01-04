import AddProjectOption from "./independent/add_project_option";
import ProjectOption from "./independent/project_option";

import templateIcon from "../assets/img/template.png";

function ProjectsBar() {
    return (
        <>
            {/* <!-- All Projects --> */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">All Projects</p>
            {/* <!-- Projects List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                <AddProjectOption />
                <ProjectOption icon={templateIcon} label="Project 1" />
                <ProjectOption icon={templateIcon} label="Project 2" />
            </div>
        </>
    );
}

export default ProjectsBar;