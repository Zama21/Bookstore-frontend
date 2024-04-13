import classNames from 'classnames';
import { useUserData } from 'modules/auth/domain/hooks/useUserData.js';
import { profileApi } from 'modules/home/api/profileApi.js';
import { Link } from 'react-router-dom';
import defaultProfile from '../../../../../shared/Img/default-profile.png';
import walletSrc from '../../../assets/wallet.svg';
import cls from './Sidebar.module.css';
import { useSidebar } from '../../../domain/useSidebar.js';
import { ProfilePhoto } from '../../components/ProfilePhoto/ProfilePhoto.jsx';

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

export const Sidebar = ({ show }) => {
    const userData = useUserData();
    const sidebar = useSidebar();
    const { isLoading, data, isError, isSuccess } = profileApi.useGetProfileQuery();

    return (
        <div
            className={classNames(cls.sidebar, {
                [cls.sidebarHidden]: isLoading || isError || !sidebar.isShown,
                [cls.sidebarShown]: isSuccess && sidebar.isShown,
            })}
        >
            <div className={cls.balanceBlock}>
                <img className={cls.balanceImg} src={walletSrc} alt='' />
                <div className={cls.balanceRightPart}>
                    <p className={cls.balance}>{data?.profile?.balance} RUB</p>
                    <button className={cls.balanceFill}>+ пополнить</button>
                </div>
            </div>
            <div className={cls.profileBlock}>
                <div className={cls.profile}>
                    <ProfilePhoto />
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
        </div>
    );
};
