import React from 'react';
import stl from './BookEditPage.module.css';
import BookViewBoxEditPage from './components/BookViewBoxEditPage/BookViewBoxEditPage';
import { Link, useParams } from 'react-router-dom';
import SwitchingBoxEditPage from './components/SwitchingBoxEditPage/SwitchingBoxEditPage';
import { useBookData } from 'modules/books/domain/hooks/useBookData.js';

export default function BookEditPage() {
    const { bookId } = useParams();
    const { data } = useBookData(bookId);

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
        <div className='wrapperPage'>
            <BookViewBoxEditPage {...dataBookViewBoxEditPage} />
            <Link className={stl.backLink} to={`/book/${bookId}/`}>
                {' '}
                &larr; Назад к книге
            </Link>
            <SwitchingBoxEditPage />
        </div>
    );
}
