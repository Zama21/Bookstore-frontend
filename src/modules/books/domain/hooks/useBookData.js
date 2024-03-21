import { BookPageApi } from 'modules/auth/api/bookPageApi.js';
import { useEffect, useState } from 'react';

export const useBookData = bookId => {
    const [data, setData] = useState({});

    useEffect(() => {
        if (bookId) {
            BookPageApi.getBookInfo(bookId).then(res => {
                setData(res.data);
            });
        }
    }, [bookId]);

    return { data, setData };
};
