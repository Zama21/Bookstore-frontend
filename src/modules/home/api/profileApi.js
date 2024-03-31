import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'shared/api/rtkBaseQuery.js';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery,
    endpoints: builder => ({
        getProfile: builder.query({
            query: () => `/users/profile`,
        }),
    }),
});
