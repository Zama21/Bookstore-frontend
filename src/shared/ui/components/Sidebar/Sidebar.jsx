import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Sidebar.module.css';
import defaultProfile from '../../../Img/default-profile.png';
import { useUserData } from 'modules/auth/domain/hooks/useUserData.js';

const menuLinks = [
    {
        name: 'Главная',
        link: '/',
    },
    {
        name: 'Моя страница',
        link: '/profile',
    },
    {
        name: 'Моя библиотека',
        link: '/library',
    },
    // {
    //     name: 'Избранные авторы',
    //     link: '/authors',
    // },
    {
        name: 'Мои книги',
        link: '/myBooks',
    },
];

export const Sidebar = () => {
    const userData = useUserData();

    return (
        <div className={cls.sidebar}>
            <div className={cls.profile}>
                <img src={defaultProfile} alt='profile img' />
                <p className={cls.username}>{userData.username}</p>
            </div>
            <ul className={cls.menu}>
                {menuLinks.map((link, index) => (
                    <li key={link.name + index}>
                        <Link className={cls.link} to={link.link}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
