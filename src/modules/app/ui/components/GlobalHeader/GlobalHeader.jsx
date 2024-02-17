import React, { useEffect, useState } from 'react';
import cls from './GlobalHeader.module.css';

import { Link } from 'react-router-dom';
import { guestNavLinks, privateNavLinks } from './navLinks.js';
import { useAuth } from 'modules/auth/domain/hooks/useAuth.js';
import { useDispatch } from 'react-redux';
import { thunkLogout } from 'modules/auth/domain/thunks/logout.js';

export const GlobalHeader = () => {
    const { isAuthed } = useAuth();
    const dispatch = useDispatch();
    const [navLinks, setNavLinks] = useState(guestNavLinks);
    useEffect(() => {
        setNavLinks(isAuthed ? privateNavLinks : guestNavLinks);
    }, [isAuthed]);

    const handleLogout = () => dispatch(thunkLogout());
    return (
        <header className={cls.header}>
            <div>
                <img src='' alt='Лого :)' />
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
                </ul>
            </nav>
        </header>
    );
};
