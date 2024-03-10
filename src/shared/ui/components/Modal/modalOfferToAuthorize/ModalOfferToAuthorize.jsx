import React, { useState } from 'react';
import ModalTwoBtn from '../modalTwoBtn/ModalTwoBtn';
import joinUsImg from './img/joinUsImg.png';
import stl from './modalOfferToAuthorize.module.css';
import { useNavigate } from 'react-router-dom';

export default function ModalOfferToAuthorize({
    closingAnimation,
    onHideCart,
}) {
    const navigate = useNavigate();

    const handleAgree = () => {
        onHideCart();
        navigate('/auth/login');
    };

    let obj = {
        title: 'Авторизация',
        text: (
            <>
                <div className={stl.wrapperJoinUsImg}>
                    <img className={stl.joinUsImg} src={joinUsImg} alt='' />
                </div>
                <p>
                    <span className={stl.keyword}>
                        Ой, кажется, вы еще не авторизовались!
                    </span>
                </p>
                <p>
                    Мы были бы очень рады познакомиться с вами поближе и
                    предложить вам наши уникальные возможности. Позвольте нам
                    узнать вас получше и создать приятную атмосферу для
                    взаимодействия!
                </p>
                <p>
                    <span className={stl.keyword}>Познакомимся?</span>
                </p>
            </>
        ),
        btnAgreeText: 'Хорошо',
        btnDisagreeText: 'Нет!',
        closingAnimation,
    };
    return (
        <>
            {
                <ModalTwoBtn
                    {...obj}
                    handleDisagree={onHideCart}
                    handleAgree={handleAgree}
                />
            }
        </>
    );
}
