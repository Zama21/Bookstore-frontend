import React from 'react';
import cls from './FormButton.module.css';

export const FormButton = props => {
    return <button className={cls.button} {...props} />;
};
