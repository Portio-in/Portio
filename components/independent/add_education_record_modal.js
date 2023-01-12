import { faFaceAngry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useRef} from 'react'
import Education from "../../models/education";

export default function AddEducationRecordModal({ isOpen, onClickCloseModal, onClickSave }) {
    const educationRef = useRef(Education.empty());

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
                                        Add Education Record
                                    </Dialog.Title>
                                    <div className="mt-4 mb-4">
                                        {/* Enter institution name */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Institution/Board Name <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. ABC College"
                                                onChange={(e)=> {educationRef.current.institutionName = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter course name */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Course Name <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. B.Tech CSE"
                                                onChange={(e)=> {educationRef.current.courseName = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter subjects name */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Subjects [Seperated by comma]</span>
                                            <input
                                                type="text"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. Java, Computer Architecture"
                                                onChange={(e)=> {educationRef.current.subjects = e.target.value.split(",")}}
                                            />
                                        </label>
                                        {/* Enter score */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Score <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. CGPA 10, 90%"
                                                onChange={(e)=> {educationRef.current.score = e.target.value}}
                                            />
                                        </label>
                                        <div className='flex flex-col md:flex-row gap-4 mb-6'>
                                            {/* Enter starting date */}
                                            <label className="block w-full">
                                                <span className="text-gray-700">Starting Date <span className='text-red-700'>*</span></span>
                                                <input
                                                    type="date"
                                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    placeholder="i.e. 01-01-2010"
                                                    onChange={(e)=> {educationRef.current.setStartingDate(e.target.value)}}
                                                />
                                            </label>     
                                            {/* Enter ending date */}
                                            <label className="block w-full">
                                                <span className="text-gray-700">Ending Date&nbsp;&nbsp;
                                                <span className='underline  text-blue-600 cursor-pointer'>[Not Ended Yet]</span>
                                                </span>
                                                <input
                                                    type="date"
                                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    placeholder="i.e. 01-01-2010"
                                                    onChange={(e)=> {educationRef.current.setEndingDate(e.target.value)}}
                                                />
                                            </label>     
                                        </div>
                                   
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm font-medium text-brand-900 hover:bg-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                            onClick={()=>onClickSave(educationRef.current)}
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
