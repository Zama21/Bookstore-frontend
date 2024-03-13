import React, { useState } from 'react';
import stl from './portalAuthors.module.css';
import { PortalAuthorsModal } from './PortalAuthorsModal.jsx';
import { useLocalModal } from 'modules/modals/domain/hooks/useLocalModal.js';

export default function PortalAuthors() {
    const { open, modalProps, isOpen: modalIsOpen } = useLocalModal();

    return (
        <>
            <p className={stl.title} onClick={() => open()}>
                Авторы портала
            </p>
            {modalIsOpen && <PortalAuthorsModal {...modalProps} />}
        </>
    );
}
