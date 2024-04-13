import React, { useEffect, useState } from 'react';
import cls from './GlobalHeader.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { guestNavLinks, privateNavLinks } from './navLinks.js';
import { useAuth } from 'modules/auth/domain/hooks/useAuth.js';
import { useDispatch } from 'react-redux';
import { thunkLogout } from 'modules/auth/domain/thunks/logout.js';
import GlobalHeaderSvgSelector from './svg/GlobalHeaderSvgSelector';
import useScrollDirection from 'shared/hooks/useScrollDirection';
import { useSidebar } from 'modules/home/domain/useSidebar.js';
import { ProfilePhoto } from 'modules/home/ui/components/ProfilePhoto/ProfilePhoto.jsx';

export const GlobalHeader = () => {
    const scrollDirection = useScrollDirection();
    const sidebar = useSidebar();
    const { isAuthed } = useAuth();
    const dispatch = useDispatch();
    const [navLinks, setNavLinks] = useState(guestNavLinks);
    useEffect(() => {
        setNavLinks(isAuthed ? privateNavLinks : guestNavLinks);
    }, [isAuthed]);

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        dispatch(thunkLogout());
        navigate('/auth/login');
    };

    const handleProfileClick = () => {
        sidebar.toggle();
    };

    return (
        <header className={`${cls.header} ${scrollDirection ? cls.hide : ''}`}>
            <div className={cls.pageFrame}>
                <div className={cls.wrapperLogo} onClick={() => navigate('/')}>
                    <GlobalHeaderSvgSelector nameSvg='logo'></GlobalHeaderSvgSelector>
                    <span className={cls.nameSite}></span>
                </div>
                <nav>
                    <ul className={cls.menu}>
                        {navLinks.map((link, index) => (
                            <li key={link.to + link.title + index}>
                                <Link to={link.to}>{link.title}</Link>
                            </li>
                        ))}
                        {isAuthed && (
                            <li>
                                <button onClick={handleLogout}>Выход</button>
                            </li>
                        )}
                        <ProfilePhoto onClick={handleProfileClick} />
                    </ul>
                </nav>
            </div>
        </header>
    );
};
