import { useState, useRef, useEffect } from "react";
import toast from 'react-hot-toast';
import AddEditCertificationRecordModal from "./independent/add_edit_certificate_record_modal";
import AddCertificationRecord from "./independent/add_certification_record";
import CertificationRecord from "./independent/certification_record";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";
import GlobalController from "../controllers/controller";

function CertificationBar() {
    const controller = GlobalController.getInstance().certificateController;
    const [certificates, setCertificates] = useState([]);
    const currentRecord = useRef(null);
    let [isOpenNewCertificateModal, setIsOpenNewCertificateModal] = useState(false)
    let [isEditCertificateModal, setIsEditCertificateModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    const submitNewCertificate = (record) => {
        controller.create(record).then((res) => {
            if (res.success) {
                setCertificates([...certificates, res.record])
                setIsOpenNewCertificateModal(false);
                toast.success("New certificate added");
            } else {
                toast.error("Certificate not added, please try again.");
            }
        })
    }

    const editCertificate = (record) => {
        controller.update(record).then((res) => {
            if (res.success) {
                setCertificates(certificates.map((e) => {
                    if (e.id === record.id) {
                        return record;
                    }
                    return e;
                }))
                setIsOpenNewCertificateModal(false);
                toast.success("Certificate updated");
            } else {
                toast.error("Certificate not updated, please try again.");
            }
        })
    }

    const deleteCertificate = (record) => {
        controller.delete(record).then((res) => {
            if (res) {
                setCertificates(certificates.filter((e) => e.id !== record.id))
                setIsOpenEditDeleteLinkModal(false);
                toast.success("Certificate removed");
            } else {
                toast.error("Certificate not removed, please try again.");
            }
        })
    }

    useEffect(()=>{
        controller.fetch_all().then((records)=>{
            setCertificates(records);
        });
    }, []);

    return (
        <>
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Certifications</p>
            {/* <!-- Certifications List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddCertificationRecord onClick={()=> {
                    setIsEditCertificateModal(false);
                    setTimeout(()=>setIsOpenNewCertificateModal(true), 100);
                }} />
                {
                    certificates.map((ele)=>
                        <CertificationRecord
                            record={ele}
                            key={ele.id}
                            onClick={()=>{
                                currentRecord.current = ele;
                                setIsOpenEditDeleteLinkModal(true);
                            }}
                        />
                    )
                }
            </div>
            {/* Add certificate modal */}
            <AddEditCertificationRecordModal
                isOpen={isOpenNewCertificateModal}
                isEdit={isEditCertificateModal}
                currentCertificateRef={currentRecord}
                onClickCloseModal={()=>setIsOpenNewCertificateModal(false)}
                onClickSave={(e)=>submitNewCertificate(e)}
                onClickEdit={(e)=>editCertificate(e)}
            />
            {/* Edit/Delete link modal */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Certification Details"
                deleteLabel="Delete Certification Record"
                onClickEdit={()=>{
                    setIsEditCertificateModal(true);
                    setTimeout(()=>{
                        setIsOpenNewCertificateModal(true);
                        setIsOpenEditDeleteLinkModal(false);
                    }, 100);
                }}
                onClickDelete={()=>{
                    deleteCertificate(currentRecord.current);
                }}
            />       
        </>);
}

export default CertificationBar;