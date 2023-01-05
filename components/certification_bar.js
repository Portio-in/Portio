import { useState } from "react";
import AddCertificationRecordModal from "./independent/add_certificate_record_modal";
import AddCertificationRecord from "./independent/add_certification_record";
import CertificationRecord from "./independent/certification_record";
import EditDeleteChoiceModal from "./independent/edit_delete_choice_modal";

function CertificationBar() {
    let [isOpenNewCertificateModal, setIsOpenNewCertificateModal] = useState(false)
    let [isOpenEditDeleteLinkModal, setIsOpenEditDeleteLinkModal] = useState(false)

    return (
        <>
            <p className="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Certifications</p>
            {/* <!-- Certifications List --> */}
            <div className="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto ">
                <AddCertificationRecord  onClick={()=>setIsOpenNewCertificateModal(true)} />
                <CertificationRecord onClick={()=>setIsOpenEditDeleteLinkModal(true)} />
            </div>
            {/* Add certificate modal */}
            <AddCertificationRecordModal isOpen={isOpenNewCertificateModal} onClickCloseModal={()=>setIsOpenNewCertificateModal(false)} onClickSave={()=>{}} />
            {/* Edit/Delete link modal */}
            <EditDeleteChoiceModal
                isOpen={isOpenEditDeleteLinkModal} 
                onClickCloseModal={()=>setIsOpenEditDeleteLinkModal(false)} 
                editLabel="Edit Certification Details"
                deleteLabel="Delete Certification Record"
                onClickEdit={()=>{}}
                onClickDelete={()=>{}}
            />       
        </>);
}

export default CertificationBar;