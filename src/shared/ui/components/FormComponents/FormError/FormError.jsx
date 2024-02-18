import React from 'react';
import cls from './FormError.module.css';

export const FormError = ({ message }) => {
    return (
        <div className={cls.error}>
            <p className={cls.message}>{message}</p>
        </div>
    );
};
