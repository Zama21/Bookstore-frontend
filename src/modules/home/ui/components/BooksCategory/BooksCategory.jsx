import React from 'react';
import cls from './BooksCategory.module.css';
import { BookSlider } from '../BookSlider/BookSlider.jsx';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';

// const mockBooks = new Array(30).fill(0).map((el, ind) => ({
//     title: `test ${ind + 1}`,
//     id: ind,
// }));

export const BooksCategory = ({ title, books, isLoading }) => {
    return (
        <section className={cls.category}>
            <h1 className={cls.title}>{title}</h1>
            {isLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <LoadingSpinner />
                </div>
            ) : books.length > 0 ? (
                <BookSlider books={books} sliceLength={5} />
            ) : (
                <p>Эта категория пока пустая</p>
            )}
        </section>
    );
};
