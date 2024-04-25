import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from 'shared/api/apiInstance.js';

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    endpoints: builder => ({
        search: builder.query({
            queryFn: data => axiosInstance.post('/books/search', data),
        }),
    }),
});
