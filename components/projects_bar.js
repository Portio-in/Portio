import AddProjectOption from "./independent/add_project_option";
import ProjectOption from "./independent/project_option";

import templateIcon from "../assets/img/template.png";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import { useState } from "react";
import AddProjectRecordModal from "./independent/add_project_record_modal";

function ProjectsBar() {
    const [isOpenNewProjectModal, setIsOpenNewProjectModal] = useState(false)
    const [isOpenEditDeleteProjectModal, setIsOpenEditDeleteProjectModal] = useState(false)

    return (
        <>
            {/* <!-- All Projects --> */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">All Projects</p>
            {/* <!-- Projects List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                <AddProjectOption onClick={()=>setIsOpenNewProjectModal(true)}  />
                <ProjectOption icon={templateIcon} label="Project 1" onClick={()=>setIsOpenEditDeleteProjectModal(true)} />
                <ProjectOption icon={templateIcon} label="Project 2" onClick={()=>setIsOpenEditDeleteProjectModal(true)} />
            </div>
            {/* Add modal */}
            <AddProjectRecordModal isOpen={isOpenNewProjectModal} onClickCloseModal={()=>setIsOpenNewProjectModal(false)} onClickSave={()=>{}} />
            {/* Edit/Delete project */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteProjectModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteProjectModal(false)} 
                editLabel="Edit Project Details"
                deleteLabel="Delete Project Record"
                onClickEdit={()=>{}}
                onClickDelete={()=>{}}
            />
        </>
    );
}

export default ProjectsBar;