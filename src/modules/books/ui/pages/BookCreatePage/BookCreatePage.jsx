import React, { useEffect } from 'react';
import BookInformationEditForm from '../BookEditPage/components/SwitchingBoxEditPage/BookInformationEditForm/BookInformationEditForm';
import cls from './BookCreatePage.module.css';
import { myBooksApi } from 'modules/home/api/myBooksApi.js';
import { useNavigate } from 'react-router-dom';
import { BackButton } from 'shared/ui/components/BackButton/BackButton.jsx';

export const BookCreatePage = () => {
    const [createBook, createBookResult] = myBooksApi.useCreateBookMutation();
    const navigate = useNavigate();

    const handleSubmit = values => {
        console.log('create book', values);
        createBook({
            title: values.bookTitle,
            description: values.annotation,
            freeChaptersCount: values.freeChaptersCount,
            cost: values.cost,
            ageRestriction: values.ageRestriction,
            genres: [values.genre1, values.genre2, values.genre3].filter(Boolean),
            bookCover: values.bookCover,
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
            <BackButton />
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
