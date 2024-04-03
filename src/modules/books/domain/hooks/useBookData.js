import { BookPageApi } from 'modules/books/api/bookPageApi.js';
import { useEffect, useState } from 'react';

export const useBookData = bookId => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (bookId) {
            BookPageApi.getBookInfo(bookId).then(res => {
                setData(res.data);
            });
        }
    }, [bookId]);

    return { data, setData };
};
