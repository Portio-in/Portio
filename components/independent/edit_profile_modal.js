import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useEffect, useRef, useState} from 'react'
import Profile from "../../models/profile"
import GlobalController from "../../controllers/controller";

export default function EditProfileModal({ profileRef, isOpen, onClickCloseModal, onClickUpdate }) {
    const currProfRef = useRef(Profile.copy(profileRef.current));
    /** @type {TechStackType[]} */
    const [availableChoices, setAvailableChoices] = useState([]);
    /** @type {TechStackType[]} */
    const [selectedTechStacks, setSelectedTechStacks] = useState([]);

    useEffect(()=>{
        currProfRef.current = Profile.copy(profileRef.current);
        async function fetchChoices() {
            const choices = await GlobalController.getInstance().availableChoicesController.fetch_techStacks();
            setAvailableChoices(choices);
        }
        fetchChoices().then(() => {
            setSelectedTechStacks(profileRef.current.techStacks);
        });
    }, [isOpen]);

    function selectTechStack(techStackId) {
        if(techStackId === null || techStackId === undefined || techStackId === "") return;
        const techStack = availableChoices.find((e)=>e.id === parseInt(techStackId));
        if(techStack === null || techStack === undefined) return;
        // Check whether the techStack is already selected
        if(selectedTechStacks.find((e)=>e.id === techStack.id) !== undefined) return;
        setSelectedTechStacks([...selectedTechStacks, techStack]);
        currProfRef.current.techStacks.push(techStack);
    }

    function removeTechStack(techStackId) {
        if(techStackId === null || techStackId === undefined || techStackId === "") return;
        const techStack = availableChoices.find((e)=>e.id === parseInt(techStackId));
        if(techStack === null || techStack === undefined) return;
        setSelectedTechStacks(selectedTechStacks.filter((e)=>e.id !== techStack.id));
        currProfRef.current.techStacks = currProfRef.current.techStacks.filter((e)=>e.id !== techStack.id);
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
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Edit Profile
                                    </Dialog.Title>
                                    <div className="mt-4 mb-4">
                                        {/* Enter name */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Name <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder=""
                                                defaultValue={currProfRef.current.name}
                                                onChange={(e)=> {currProfRef.current.name = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter email */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Email</span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-500"
                                                placeholder=""
                                                disabled
                                                defaultValue={currProfRef.current.email}
                                                onChange={(e)=> {currProfRef.current.email = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter phone */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Phone No <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder=""
                                                defaultValue={currProfRef.current.phone}
                                                onChange={(e)=> {currProfRef.current.phone = e.target.value}}
                                            />
                                        </label>
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
                                                    <div key={ele.id} className="flex justify-center items-center m-1 font-medium py-2 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 stretch-0 w-fit">
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
                                        {/* Enter description */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Description <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder=""
                                                defaultValue={currProfRef.current.description}
                                                onChange={(e)=> {currProfRef.current.description = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter tagline */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Tagline <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder=""
                                                defaultValue={currProfRef.current.tagline}
                                                onChange={(e)=> {currProfRef.current.tagline = e.target.value}}
                                            />
                                        </label>
                                        {/* Resume Link */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Resume Link <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="Paste your resume link"
                                                defaultValue={currProfRef.current.resumeLink}
                                                onChange={(e)=> {currProfRef.current.resumeLink = e.target.value}}
                                            />
                                        </label>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm font-medium text-brand-900 hover:bg-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                            onClick={()=>onClickUpdate(currProfRef.current)}
                                        >
                                        Update Profile
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
