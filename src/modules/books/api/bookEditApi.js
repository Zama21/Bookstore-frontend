import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from 'shared/api/apiInstance.js';
import { bookBasicApi } from './bookBasicApi.js';

export const bookEditApi = createApi({
    reducerPath: 'bookEdit',
    endpoints: builder => ({
        publishBook: builder.mutation({
            queryFn: bookId => axiosInstance.post(`/books/write/${bookId}/publish`),
            async onQueryStarted(bookId, { dispatch, queryFulfilled }) {
                console.log('publish query started');
                const patchResult = dispatch(
                    bookBasicApi.util.updateQueryData('getBookData', bookId.toString(), draft => {
                        draft.isPublished = true;
                    })
                );
                console.log('patch result', patchResult);
                queryFulfilled.catch(patchResult.undo);
            },
        }),
        unpublishBook: builder.mutation({
            queryFn: bookId => axiosInstance.post(`/books/write/${bookId}/unpublish`),
            async onQueryStarted(bookId, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    bookBasicApi.util.updateQueryData('getBookData', bookId.toString(), draft => {
                        draft.isPublished = false;
                    })
                );
                queryFulfilled.catch(patchResult.undo);
            },
        }),
    }),
});
