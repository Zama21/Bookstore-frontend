import React from 'react';
import Modal from '../Modal';
import stl from './modalTwoBtn.module.css';

export default function ModalTwoBtn({
    title,
    text,
    btnAgreeText,
    btnDisagreeText,
    handleAgree,
    handleDisagree,
    closingAnimation,
}) {
    return (
        <Modal onHideCart={handleDisagree} closingAnimation={closingAnimation}>
            <h2 className={stl.title}>{title}</h2>
            <div className={stl.content}>{text}</div>
            <div className={stl.wrapperBtn}>
                <button
                    className={`${stl.btnDisagree} ${stl.btn}`}
                    onClick={handleDisagree}
                >
                    {btnDisagreeText}
                </button>
                <button
                    className={`${stl.btnAgree} ${stl.btn}`}
                    onClick={handleAgree}
                >
                    {btnAgreeText}
                </button>
            </div>
        </Modal>
    );
}
