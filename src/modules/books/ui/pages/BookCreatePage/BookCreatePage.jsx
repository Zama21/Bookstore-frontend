import React, { useEffect } from 'react';
import BookInformationEditForm from '../BookEditPage/components/SwitchingBoxEditPage/BookInformationEditForm/BookInformationEditForm';
import cls from './BookCreatePage.module.css';
import { myBooksApi } from 'modules/home/api/myBooksApi.js';
import { useNavigate } from 'react-router-dom';

export const BookCreatePage = () => {
    const [createBook, createBookResult] = myBooksApi.useCreateBookMutation();
    const navigate = useNavigate();

    const handleSubmit = values => {
        createBook({
            title: values.bookTitle,
            description: values.annotation,
        });
    };

    useEffect(() => {
        if (createBookResult.isSuccess) {
            navigate('/myBooks');
        }
    }, [createBookResult.isSuccess]);

    return (
        <div className={cls.wrapper}>
            <h1 className={cls.title}>Создание книги</h1>
            <BookInformationEditForm
                submitText='Создать'
                fieldsIncluded={{
                    bookStatus: false,
                }}
                onSubmit={handleSubmit}
            />
        </div>
    );
};
