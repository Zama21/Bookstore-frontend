import { useLocalModal } from 'modules/modals/domain/hooks/useLocalModal.js';
import { ModalLicenseAgreement } from './LicenseAgreementModal.jsx';
import stl from './licenseAgreement.module.css';

export default function LicenseAgreement() {
    const { open, modalProps, isOpen: modalIsOpen } = useLocalModal();

    return (
        <>
            <p className={stl.title} onClick={open}>
                Лицензионное соглашение
            </p>
            {modalIsOpen && <ModalLicenseAgreement {...modalProps} />}
        </>
    );
}
