import React from 'react';
import { useParams } from 'react-router-dom';

export const BookReadPage = () => {
    const { bookId } = useParams();

    return (
        <div>
            <h1>Read book with ID = {bookId}! </h1>
        </div>
    );
};
