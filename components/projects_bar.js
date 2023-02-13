import {useState, useRef, useEffect} from "react";
import toast from 'react-hot-toast';
import AddProjectOption from "./independent/add_project_option";
import ProjectOption from "./independent/project_option";

import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import AddEditProjectRecordModal from "./independent/add_edit_project_record_modal";
import GlobalController from "../controllers/controller";

function ProjectsBar() {
    const controller = GlobalController.getInstance().projectController;
    const [projects, setProjects] = useState([]);
    const currentRecord = useRef(null);
    const [isOpenNewProjectModal, setIsOpenNewProjectModal] = useState(false);
    let [isEditProjectModal, setIsEditProjectModal] = useState(false)
    const [isOpenEditDeleteProjectModal, setIsOpenEditDeleteProjectModal] = useState(false);

    const submitNewProject = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setProjects([...projects, res.record]);
                setIsOpenNewProjectModal(false);
                toast.success("New project record added");
            } else {
                toast.error("Project record not added, please try again.");
            }
        })
    }

    const editProject = (record) => {
        controller.update(record).then((res) => {
            if (res.success) {
                setProjects(projects.map((e) => {
                    if (e.id === record.id) {
                        return record;
                    }
                    return e;
                }))
                setIsOpenNewProjectModal(false);
                toast.success("Project record updated");
            } else {
                toast.error("Project record not updated, please try again.");
            }
            setIsOpenEditDeleteProjectModal(false);
        })
    }

    const deleteProject = (record) => {
        controller.delete(record).then((res) => {
            if (res) {
                setProjects(projects.filter((e) => e.id !== record.id));
                setIsOpenNewProjectModal(false);
                toast.success("Project record removed");
            } else {
                toast.error("Project record not removed, please try again.");
            }
            setIsOpenEditDeleteProjectModal(false);
        })
    }

    useEffect(()=>{
        controller.fetch_all().then((records)=>{
            setProjects(records);
        });
    }, []);

    return (
        <>
            {/* <!-- All Projects --> */}
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">All Projects</p>
            {/* <!-- Projects List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                <AddProjectOption onClick={()=>{
                    setIsEditProjectModal(false);
                    setTimeout(()=>setIsOpenNewProjectModal(true), 100);
                }}  />
                {
                    projects.map((ele)=>
                        <ProjectOption
                            record={ele}
                            key={ele.id}
                            onClick={()=>{
                                currentRecord.current = ele;
                                setIsOpenEditDeleteProjectModal(true);
                            }}
                        />
                    )
                }
            </div>
            {/* Add modal */}
            <AddEditProjectRecordModal
                isOpen={isOpenNewProjectModal}
                isEdit={isEditProjectModal}
                currentProjectRef={currentRecord}
                onClickCloseModal={()=>setIsOpenNewProjectModal(false)}
                onClickSave={(e)=>submitNewProject(e)}
                onClickEdit={(e)=>editProject(e)} />
            {/* Edit/Delete project */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteProjectModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteProjectModal(false)} 
                editLabel="Edit Project Details"
                deleteLabel="Delete Project Record"
                onClickEdit={()=>{
                    setIsEditProjectModal(true);
                    setTimeout(()=>{
                        setIsOpenEditDeleteProjectModal(false);
                        setTimeout(()=>setIsOpenNewProjectModal(true), 100);
                    }, 100);
                    // setIsOpenNewProjectModal(true);
                }}
                onClickDelete={()=>{
                    deleteProject(currentRecord.current);
                    setIsOpenEditDeleteProjectModal(false);
                }}
            />
        </>
    );
}

export default ProjectsBar;