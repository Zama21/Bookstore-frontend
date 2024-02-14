import React from 'react';
import { useParams } from 'react-router-dom';

export const BookPage = () => {
    const { bookId } = useParams();

    return (
        <div>
            <h1>Book with ID = {bookId}!</h1>
        </div>
    );
};
