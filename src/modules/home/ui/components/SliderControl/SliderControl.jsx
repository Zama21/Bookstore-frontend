import React from 'react';
import cls from './SliderControl.module.css';

export const SliderControl = ({ direction, onClick }) => {
    return (
        <div className={cls.control} onClick={onClick}>
            <span className={cls.controlContent}>{direction === 'right' ? '>' : '<'}</span>
        </div>
    );
};
