import ModalTwoBtn from '../BaseModals/ModalTwoBtn/ModalTwoBtn.jsx';

export default function ModalConfirm({ title, text, btnYes, btnNo, ...otherProps }) {
    const options = {
        title,
        text,
        btnAgreeText: btnYes ?? 'Да',
        btnDisagreeText: btnNo ?? 'Нет',
        ...otherProps,
    };
    return (
        <>
            {
                <ModalTwoBtn
                    {...options}
                    handleDisagree={otherProps.onDisagree ?? otherProps.onHideCart}
                    handleAgree={otherProps.onAgree}
                />
            }
        </>
    );
}
