import React from 'react';
import BookInformationEditForm from '../BookEditPage/components/SwitchingBoxEditPage/BookInformationEditForm/BookInformationEditForm';
import cls from './BookCreatePage.module.css';

export const BookCreatePage = () => {
    const createBook = values => {
        console.log('create book ', values);
    };

    return (
        <div className={cls.wrapper}>
            <h1 className={cls.title}>Создание книги</h1>
            <BookInformationEditForm
                submitText='Создать'
                fieldsIncluded={{
                    bookStatus: false,
                }}
                onSubmit={createBook}
            />
        </div>
    );
};
