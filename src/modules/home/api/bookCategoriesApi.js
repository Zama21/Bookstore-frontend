import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from 'shared/api/apiInstance.js';

export const bookCategoriesApi = createApi({
    reducerPath: 'bookCategoriesApi',
    endpoints: builder => ({
        getTop: builder.query({
            queryFn: () => axiosInstance.get('/books/category/top'),
            providesTags: ['category-top'],
        }),
        getNew: builder.query({
            queryFn: () => axiosInstance.get('/books/category/new'),
            providesTags: ['category-new'],
        }),
        getRelevant: builder.query({
            queryFn: () => axiosInstance.get('/books/category/relevant'),
            providesTags: ['category-relevant'],
        }),
    }),
});
