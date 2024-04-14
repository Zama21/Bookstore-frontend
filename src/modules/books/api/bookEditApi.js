import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from 'shared/api/apiInstance.js';

export const bookEditApi = createApi({
    reducerPath: 'bookEdit',
    endpoints: builder => ({
        publishBook: builder.mutation({
            queryFn: bookId => axiosInstance.post(`/books/write/${bookId}/publish`),
        }),
        unpublishBook: builder.mutation({
            queryFn: bookId => axiosInstance.post(`/books/write/${bookId}/unpublish`),
        }),
    }),
});
