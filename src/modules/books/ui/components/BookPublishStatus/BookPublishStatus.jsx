import React from 'react';
import cls from './BookPublishStatus.module.css';
import classNames from 'classnames';

export const BookPublishStatus = ({ isPublished }) => {
    return (
        <div
            className={classNames(cls.status, {
                [cls.isPublished]: isPublished,
                [cls.isNotPublished]: !isPublished,
            })}
        >
            {isPublished ? 'Опубликована' : 'Не опубликована'}
        </div>
    );
};
