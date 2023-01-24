import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useEffect, useRef} from 'react'
import Certificate from "../../models/certificate";

export default function AddEditCertificationRecordModal({ isOpen, isEdit, currentCertificateRef, onClickCloseModal, onClickSave, onClickEdit }) {
    const certificateRef = useRef(Certificate.empty());

    useEffect(()=>{
        if(isEdit){
            certificateRef.current = currentCertificateRef.current;
        }else {
            certificateRef.current = Certificate.empty();
        }
    },[isOpen, isEdit])

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
                                        {isEdit ? "Edit Certificate Record" : "Add Certificate Record"}
                                    </Dialog.Title>
                                    <div className="mt-4 mb-4">
                                        {/* Enter title */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Title <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. ABC College"
                                                defaultValue={isEdit ? currentCertificateRef.current.title : certificateRef.current.title}
                                                onChange={(e)=> {certificateRef.current.title = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter provider */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Provided by <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. Coursera"
                                                defaultValue={isEdit ? currentCertificateRef.current.providedBy : certificateRef.current.providedBy}
                                                onChange={(e)=> {certificateRef.current.providedBy = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter link */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Link <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. B.Tech CSE"
                                                defaultValue={isEdit ? currentCertificateRef.current.link : certificateRef.current.link}
                                                onChange={(e)=> {certificateRef.current.link = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter completed on */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Completed On <span className='text-red-700'>*</span></span>
                                            <input
                                                type="date"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. Java, Computer Architecture"
                                                defaultValue={isEdit ? currentCertificateRef.current.getCompletedOnDate() : certificateRef.current.getCompletedOnDate()}
                                                onChange={(e)=> certificateRef.current.setCompletedOnDate(e.target.value)}
                                            />
                                        </label>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm font-medium text-brand-900 hover:bg-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                            onClick={()=> isEdit ? onClickEdit(certificateRef.current) : onClickSave(certificateRef.current)}
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
