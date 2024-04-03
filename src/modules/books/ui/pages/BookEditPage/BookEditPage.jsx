import React from 'react';
import stl from './BookEditPage.module.css';
import BookViewBoxEditPage from './components/BookViewBoxEditPage/BookViewBoxEditPage';
import { Link, useParams } from 'react-router-dom';
import SwitchingBoxEditPage from './components/SwitchingBoxEditPage/SwitchingBoxEditPage';
import { useBookData } from 'modules/books/domain/hooks/useBookData.js';
import { BackButton } from 'shared/ui/components/BackButton/BackButton.jsx';

export default function BookEditPage() {
    const { bookId } = useParams();
    const { data } = useBookData(bookId);

    return (
        <div className='wrapperPage'>
            {data && (
                <>
                    <BackButton />
                    <BookViewBoxEditPage bookData={data} />
                    <SwitchingBoxEditPage bookData={data} />
                </>
            )}
        </div>
    );
}
