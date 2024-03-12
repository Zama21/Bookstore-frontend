import React, { useState } from 'react';
import stl from './AboutLitterria.module.css';
import { useLocalModal } from 'modules/modals/domain/hooks/useLocalModal.js';
import AboutLitteriaModal from './AboutLitteriaModal.jsx';

export default function AboutLitterria() {
    const { open, modalProps, isOpen: modalIsOpen } = useLocalModal();

    return (
        <>
            <p className={stl.title} onClick={() => open()}>
                О Литтеррии
            </p>
            {modalIsOpen && <AboutLitteriaModal {...modalProps} />}
        </>
    );
}
