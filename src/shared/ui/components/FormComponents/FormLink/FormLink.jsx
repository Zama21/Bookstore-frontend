import React from 'react';
import { Link } from 'react-router-dom';
import cls from './FormLink.module.css';

export const FormLink = ({ to, text }) => {
    return (
        <Link to={to} className={cls.link}>
            {text}
        </Link>
    );
};
