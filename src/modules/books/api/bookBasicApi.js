import { axiosInstance } from 'shared/api/apiInstance.js';
import { createApi } from '@reduxjs/toolkit/query/react';

export const bookBasicApi = createApi({
    reducerPath: 'bookBasic',
    endpoints: (builder) => ({
        getBookData: builder.query({
            queryFn: (bookId) => axiosInstance.get(`/books/${bookId}`),
            providesTags: (result, error, bookId) => [{ type: 'Book', id: bookId }],
        }),
        removeFromLibrary: builder.mutation({
            queryFn: (bookId) => axiosInstance.post(`/books/${bookId}/removeFromLibrary`),
            async onQueryStarted(bookId, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    bookBasicApi.util.updateQueryData('getBookData', bookId, (draft) => {
                        draft.isInLibrary = false;
                    })
                );
                queryFulfilled.catch(patchResult.undo);
            },
        }),
        addToLibrary: builder.mutation({
            queryFn: (bookId) => axiosInstance.post(`/books/${bookId}/addToLibrary`),
            async onQueryStarted(bookId, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    bookBasicApi.util.updateQueryData('getBookData', bookId, (draft) => {
                        draft.isInLibrary = true;
                    })
                );
                queryFulfilled.catch(patchResult.undo);
            },
        }),
        starBook: builder.mutation({
            queryFn: (bookId) => axiosInstance.post(`/books/${bookId}/star`),
            async onQueryStarted(bookId, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    bookBasicApi.util.updateQueryData('getBookData', bookId, (draft) => {
                        draft.isStarred = true;
                    })
                );
                queryFulfilled.catch(patchResult.undo);
            },
            // invalidatesTags: [''],
            // invalidatesTags: (result, error, bookId) => [{ type: 'Book', id: bookId }],
        }),
        unstarBook: builder.mutation({
            queryFn: (bookId) => axiosInstance.post(`/books/${bookId}/unstar`),
            async onQueryStarted(bookId, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    bookBasicApi.util.updateQueryData('getBookData', bookId, (draft) => {
                        draft.isStarred = false;
                    })
                );
                queryFulfilled.catch(patchResult.undo);
            },
            // invalidatesTags: (result, error, bookId) => [{ type: 'Book', id: bookId }],
        }),
    }),
});
