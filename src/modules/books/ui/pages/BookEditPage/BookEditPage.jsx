import React from 'react';
import stl from './BookEditPage.module.css';
import BookViewBoxEditPage from './components/BookViewBoxEditPage/BookViewBoxEditPage';
import { useBookData } from 'modules/books/domain/hooks/useBookData';
import { Link } from 'react-router-dom';
import SwitchingBoxEditPage from './components/SwitchingBoxEditPage/SwitchingBoxEditPage';

export default function BookEditPage() {
    const { data, bookId } = useBookData();

    const dataBookViewBoxEditPage = {
        author: data?.author,
        coverSrc: data?.coverSrc,
        series: data?.series,
        status: data?.status,
        title: data?.title,
        bookId,
        cost: data?.cost,
    };
    return (
        <div className={stl.wrapper}>
            <BookViewBoxEditPage {...dataBookViewBoxEditPage} />
            <Link className={stl.backLink} to={`/book/${bookId}/`}>
                {' '}
                &larr; Назад к книге
            </Link>
            <SwitchingBoxEditPage />
        </div>
    );
}
