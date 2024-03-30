import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import { ClosingAnimationDelta } from 'modules/modals/domain/config.js';

const Backdrop = props => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = 'auto');
    }, []);
    let stl = `${styles.backdrop} ${
        props.closingAnimation ? styles.close : ''
    }`;
    return (
        <div
            className={stl}
            onClick={props.onHideCart}
            style={{ animationDuration: ClosingAnimationDelta + 'ms' }}
        ></div>
    );
};

const ModalWindow = props => {
    return (
        <div
            className={`${styles.modal} ${
                props.closingAnimation ? styles.close : ''
            }`}
            style={{ animationDuration: ClosingAnimationDelta + 'ms' }}
        >
            <div className={`${styles.content} `}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');
// const portalElement = document.body;

const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop {...props} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalWindow {...props}>{props.children}</ModalWindow>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default Modal;
