import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from 'shared/api/apiInstance.js';

export const myBooksApi = createApi({
    reducerPath: 'myBooks',
    endpoints: builder => ({
        getMyBooks: builder.query({
            queryFn: () => axiosInstance.get('/books/my'),
        }),
        createBook: builder.mutation({
            queryFn: createBookData => axiosInstance.post('/books/write/', createBookData),
        }),
    }),
});
