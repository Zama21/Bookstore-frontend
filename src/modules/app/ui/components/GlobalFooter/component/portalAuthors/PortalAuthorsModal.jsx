import React from 'react';
import ModalAwareness from 'modules/modals/ui/Components/Modals/ModalAwareness/ModalAwareness';
import CarouselImg from './carouselImg/CarouselImg.jsx';

export const PortalAuthorsModal = props => {
    let data = {
        title: 'Авторы портала',
        text: <CarouselImg />,
        btnText: 'Понятно',
    };
    return <ModalAwareness {...data} {...props} />;
};
