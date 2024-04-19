import { useState } from 'react';
import { ClosingAnimationDelta } from '../config.js';

export const useLocalModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShowingClosingAnimation, setIsShowingClosingAnimation] = useState(false);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsShowingClosingAnimation(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsShowingClosingAnimation(false);
        }, ClosingAnimationDelta);
    };

    return {
        open,
        close,
        isOpen,
        modalProps: {
            closingAnimation: isShowingClosingAnimation,
            onHideCart: () => {
                close();
            },
        },
    };
};
