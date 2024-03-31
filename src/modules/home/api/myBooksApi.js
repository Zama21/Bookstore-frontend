import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'shared/api/rtkBaseQuery.js';

export const myBooksApi = createApi({
    reducerPath: 'myBooks',
    baseQuery,
    endpoints: builder => ({
        getMyBooks: builder.query({
            query: () => `/books/my`,
        }),
    }),
});
