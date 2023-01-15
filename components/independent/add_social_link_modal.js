import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useEffect, useRef, useState} from 'react'
import GlobalController from "../../controllers/controller";
import SocialLink from "../../models/social_link";
import social_link from "../../models/social_link";

export default function AddSocialLinkModal({ isOpen, onClickCloseModal, onClickSave }) {
    const controller = GlobalController.getInstance().availableChoicesController;
    /** @type {[]SocialType} */
    const [socialTypes, setSocialTypes] = useState([]);
    const socialRef = useRef(SocialLink.empty());

    useEffect(()=>{
        controller.fetch_socialLinkTypes().then((types)=>{
            setSocialTypes(types);
            socialRef.current.type = types[0];
        });
    }, []);

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
                                        Add Social Link
                                    </Dialog.Title>
                                    <div className="mt-4 mb-4">
                                        {/* Select provider */}
                                        <label className="block">
                                            <span className="text-gray-700">Select Provider</span>
                                            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    onChange={(e)=>{
                                                        socialRef.current.type = socialTypes[e.target.value];
                                                    }}
                                            >{
                                                socialTypes.map((type, index)=>{
                                                    return (
                                                        <option value={index}>{type.type}</option>
                                                    )
                                                })
                                            }

                                            </select>
                                        </label>
                                        {/* Enter link */}
                                        <label className="block mt-4">
                                            <span className="text-gray-700">Provide a valid URL</span>
                                            <input
                                                type="url"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="https://example.com"
                                                onChange={(e)=>{socialRef.current.link = e.target.value}}
                                            />
                                        </label>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm font-medium text-brand-900 hover:bg-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                            onClick={()=>onClickSave(socialRef.current)}
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
