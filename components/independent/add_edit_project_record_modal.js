import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import {Fragment, useEffect, useRef, useState} from 'react'
import Project from "../../models/project";
import GlobalController from "../../controllers/controller";

export default function AddEditProjectRecordModal({ isOpen, onClickCloseModal, onClickSave }) {
    const [isLoading, setIsLoading] = useState(false);
    const projectRef = useRef(Project.empty());
    /** @type {TechStackType[]} */
    const [availableChoices, setAvailableChoices] = useState([]);
    /** @type {TechStackType[]} */
    const [selectedTechStacks, setSelectedTechStacks] = useState([]);
    /** @type {string[]} */
    const [selectedImages, setSelectedImages] = useState([]);
    /** @type {string} */
    const [coverImageUrl, setCoverImageUrl] = useState("");

    useEffect(()=>{
        if(isOpen){
            projectRef.current = Project.empty();
            async function fetchChoices() {
                const choices = await GlobalController.getInstance().availableChoicesController.fetch_techStacks();
                setAvailableChoices(choices);
            }
            fetchChoices();
            setSelectedTechStacks([]);
            setSelectedImages([]);
        }
    }, [isOpen])

    function selectTechStack(techStackId) {
        if(techStackId === null || techStackId === undefined || techStackId === "") return;
        const techStack = availableChoices.find((e)=>e.id === parseInt(techStackId));
        if(techStack === null || techStack === undefined) return;
        // Check whether the techStack is already selected
        if(selectedTechStacks.find((e)=>e.id === techStack.id) !== undefined) return;
        setSelectedTechStacks([...selectedTechStacks, techStack]);
        projectRef.current.techStacks.push(techStack);
    }

    function removeTechStack(techStackId) {
        if(techStackId === null || techStackId === undefined || techStackId === "") return;
        const techStack = availableChoices.find((e)=>e.id === parseInt(techStackId));
        if(techStack === null || techStack === undefined) return;
        setSelectedTechStacks(selectedTechStacks.filter((e)=>e.id !== techStack.id));
        projectRef.current.techStacks = projectRef.current.techStacks.filter((e)=>e.id !== techStack.id);
    }

    async function handleFileUpload(files){
        setIsLoading(true);
        const res = await GlobalController.getInstance().apiClient.uploadFiles(files);
        if(res.success){
            projectRef.current.images = res.links;
            setSelectedImages([...selectedImages, ...res.links]);
        }
        setIsLoading(false);
    }

    function selectCoverImage(imageUrl){
        setCoverImageUrl(imageUrl);
        projectRef.current.coverImage = imageUrl;
    }

    function removeImage(imageUrl){
        setSelectedImages(selectedImages.filter((e)=>e !== imageUrl));
        projectRef.current.images = projectRef.current.images.filter((e)=>e !== imageUrl);
    }

    return (
        <>
            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClickCloseModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                                    {
                                        isLoading ? <div className="flex justify-center	items-center absolute z-10 inset-0 bg-zinc-500 bg-opacity-10">
                                            <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-black"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                        strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor"
                                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </div> : <div></div>
                                    }
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add Project Record
                                    </Dialog.Title>
                                    <div className="mt-4 mb-4">
                                        {/* Enter title */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Title <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. Project XYZ"
                                                onChange={(e)=> {projectRef.current.title = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter description */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Description <span className='text-red-700'>*</span></span>
                                            <textarea
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="Enter description here..."
                                                onChange={(e)=> {projectRef.current.description = e.target.value}}
                                            />
                                        </label>
                                        {/* Select Cover Image */}
                                        <div className="block mb-4">
                                            <span className="text-gray-700">Select Images</span>
                                            <div className="flex mt-2 gap-4 flex-wrap">
                                                <label className="relative cursor-pointer w-[80px] h-[80px] border-brand border-2 rounded-md flex justify-center items-center shrink-0">
                                                    <input className="absolute inset-0 z-10 invisible" type="file" multiple onChange={(e)=>handleFileUpload(e.target.files)} accept="image/*" />
                                                    <FontAwesomeIcon icon={faFileUpload} className="text-4xl text-brand" />
                                                </label>

                                                {
                                                    selectedImages.map((image, index) => {
                                                        return <div className={"w-[80px] h-[80px] border-brand rounded-md flex justify-center items-center shrink-0 relative " + (image===coverImageUrl ? "border-2" : "border-0")} onClick={()=>selectCoverImage(image)}>
                                                            <div className="absolute top-[-8px] right-[-8px] cursor-pointer bg-red-500 w-5 h-5 z-10 rounded-full flex justify-center items-center" onClick={()=>removeImage(image)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="w-4 h-4">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </div>

                                                            <Image  src={image} alt='' fill className="rounded-md" />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                        
                                        {/* Select tech stacks */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Select Tech Stacks</span>
                                            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={(e)=>selectTechStack(e.target.value)}>
                                                {
                                                     availableChoices.map((choice, index) => {
                                                        return (
                                                            <option key={choice.id} value={choice.id}>{choice.name}</option>
                                                        )
                                                     })
                                                }
                                            </select>
                                        </label>
                                        <div className="w-full flex flex-row flex-wrap">
                                            {
                                                selectedTechStacks.map((ele)=>
                                                    <div className="flex justify-center items-center m-1 font-medium py-2 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 stretch-0 w-fit">
                                                        <div className="text-base font-normal leading-none max-w-full">{ele.name} </div>
                                                        <div className="flex flex-auto flex-row-reverse" onClick={() => removeTechStack(ele.id)}>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                                     className="feather feather-x cursor-pointer hover:text-indigo-400 rounded-full w-4 h-4 ml-2">
                                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        {/* Enter Live Link */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Live Link</span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                onChange={(e)=> {projectRef.current.liveLink = e.target.value}}
                                            />
                                        </label>                                        
                                        {/* Enter Source Code Link */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Source Code Link</span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                onChange={(e)=> {projectRef.current.sourceCodeLink = e.target.value}}
                                            />
                                        </label>                                        
                                        {/* Enter Read More Link */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Read More Link</span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                onChange={(e)=> {projectRef.current.readMoreLink = e.target.value}}
                                            />
                                        </label>
                                        <div className='flex flex-col md:flex-row gap-4 mb-6'>
                                            {/* Enter starting date */}
                                            <label className="block w-full">
                                                <span className="text-gray-700">Starting Date <span className='text-red-700'>*</span></span>
                                                <input
                                                    type="date"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    placeholder="i.e. 01-01-2010"
                                                    onChange={(e)=> {projectRef.current.setStartingDate(e.target.value)}}
                                                />
                                            </label>     
                                            {/* Enter ending date */}
                                            <label className="block w-full">
                                                <span className="text-gray-700">Ending Date <span className='text-blue-500 font-semibold cursor-pointer' onClick={()=>document.getElementById("project_ending_date").value = null}>[Not Yet Finished]</span></span>
                                                <input
                                                    type="date"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    placeholder="i.e. 01-01-2010"
                                                    id="project_ending_date"
                                                    onChange={(e)=> {projectRef.current.setEndingDate(e.target.value)}}
                                                />
                                            </label>     
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm font-medium text-brand-900 hover:bg-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                            onClick={()=>onClickSave(projectRef.current)}
                                        >
                                        Submit Details
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

