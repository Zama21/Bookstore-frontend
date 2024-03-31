import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from 'shared/api/apiInstance.js';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    endpoints: builder => ({
        getProfile: builder.query({
            queryFn: () => axiosInstance.get('/users/profile'),
        }),
    }),
});
