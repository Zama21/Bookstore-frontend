import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from 'shared/api/apiInstance.js';

export const myBooksApi = createApi({
    reducerPath: 'myBooks',
    endpoints: builder => ({
        getMyBooks: builder.query({
            queryFn: () => axiosInstance.get('/books/my'),
            providesTags: ['MyBooks'],
        }),
        createBook: builder.mutation({
            queryFn: createBookData => {
                const createBookFormData = new FormData();
                for (const key in createBookData) {
                    createBookFormData.append(key, JSON.stringify(createBookData[key]));
                }
                return axiosInstance.post('/books/write/', createBookData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            },
            invalidatesTags: ['MyBooks'],
        }),
        editBook: builder.mutation({
            queryFn: ({ bookId, editBookData }) => {
                const createBookFormData = new FormData();
                for (const key in editBookData) {
                    createBookFormData.append(key, JSON.stringify(editBookData[key]));
                }
                return axiosInstance.post(`/books/write/${bookId}/edit`, editBookData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            },
            invalidatesTags: ['MyBooks'],
        }),
    }),
});
