import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = 'unset');
    }, []);
    let stl = `${styles.backdrop} ${props.closingAnimation ? styles.close : ''}`;
    return <div className={stl} onClick={props.onHideCart}></div>;
};

const ModalWindow = (props) => {
    return (
        <div className={`${styles.modal} ${props.closingAnimation ? styles.close : ''}`}>
            <div className={`${styles.content} `}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');
// const portalElement = document.body;

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onHideCart={props.onHideCart} closingAnimation={props.closingAnimation} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalWindow closingAnimation={props.closingAnimation}>{props.children}</ModalWindow>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default Modal;
