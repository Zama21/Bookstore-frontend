import React from 'react';
import cls from './Form.module.css';

export const Form = props => {
    const { children, onSubmit } = props;
    return (
        <form onSubmit={onSubmit} className={cls.form}>
            {children}
        </form>
    );
};
