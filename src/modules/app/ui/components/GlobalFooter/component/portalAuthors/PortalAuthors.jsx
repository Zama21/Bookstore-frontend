import React, { useState } from 'react';
import stl from './portalAuthors.module.css';
import ModalAwareness from 'modules/modals/ui/Components/Modals/ModalAwareness/ModalAwareness';
import CarouselImg from './carouselImg/CarouselImg';

export default function PortalAuthors() {
    const [showModal, setShowModal] = useState(false);
    const [closingAnimation, setClosingAnimation] = useState(false);

    const onHideCart = () => {
        setClosingAnimation(true);
        setTimeout(() => {
            setShowModal(false);
        }, 300);
    };
    const onShowCart = () => {
        setShowModal(true);
        setClosingAnimation(false);
    };

    let obj = {
        title: 'Авторы портала',
        text: (
            <>
                <CarouselImg />
            </>
        ),
        btnText: 'Понятно',
        closingAnimation,
    };
    return (
        <>
            <p className={stl.title} onClick={onShowCart}>
                Авторы портала
            </p>
            {showModal && <ModalAwareness {...obj} onHideCart={onHideCart} />}
        </>
    );
}
