import { ClosingAnimationDelta } from 'modules/modals/domain/config.js';
import { ModalTypes, modalsActions } from 'modules/modals/store/modalsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import ModalAlert from '../Modals/ModalAlert/ModalAlert.jsx';
import ModalAwareness from '../Modals/ModalAwareness/ModalAwareness.jsx';
import ModalConfirm from '../Modals/ModalConfirm/ModalConfirm.jsx';
import ModalOfferToAuthorize from '../Modals/ModalOfferToAuthorize/ModalOfferToAuthorize.jsx';
import { ConfirmModalReponse } from 'modules/modals/domain/models/modalResponse.model.js';

const ModalsLayer = () => {
    const dispatch = useDispatch();
    const { isOpen, currentModalType, isShowingClosingAnimation, modalParams } = useSelector(
        state => state.modals.data
    );

    const hideModal = () => {
        dispatch(modalsActions.setData({ isShowingClosingAnimation: true }));

        setTimeout(() => {
            dispatch(
                modalsActions.setData({
                    isOpen: false,
                    currentModalType: null,
                    isShowingClosingAnimation: false,
                })
            );
        }, ClosingAnimationDelta);
    };

    if (isOpen) {
        const commonProps = {
            closingAnimation: isShowingClosingAnimation,
            onHideCart: hideModal,
            ...modalParams,
        };
        switch (currentModalType) {
            case ModalTypes.Auth:
                return <ModalOfferToAuthorize {...commonProps} />;
            case ModalTypes.Awareness:
                return <ModalAwareness {...commonProps} />;
            case ModalTypes.AlertModal:
                return <ModalAlert {...commonProps} />;
            case ModalTypes.Confirm:
                return (
                    <ModalConfirm
                        {...commonProps}
                        onDisagree={() => {
                            dispatch(
                                modalsActions.setData({
                                    response: ConfirmModalReponse.No,
                                })
                            );
                            hideModal();
                        }}
                        onAgree={() => {
                            dispatch(
                                modalsActions.setData({
                                    response: ConfirmModalReponse.Yes,
                                })
                            );
                        }}
                    />
                );
            default:
                return <></>;
        }
    }

    return <></>;
};

export default ModalsLayer;
