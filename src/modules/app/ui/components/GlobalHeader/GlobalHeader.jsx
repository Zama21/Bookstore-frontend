import React from 'react';
import cls from './GlobalHeader.module.css';
import { Link } from 'react-router-dom';

export const GlobalHeader = () => {
    return (
        <header className={cls.header}>
            <div>
                <img src='' alt='Лого :)' />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/some'}>Каталог</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
