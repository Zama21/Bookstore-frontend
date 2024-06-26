import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../../auth/store/slices/authSlice.js';
import { modalsReducer } from 'modules/modals/store/modalsSlice.js';
import { bookReadReducer } from 'modules/books/store/bookReadSlice.js';
import { profileApi } from 'modules/home/api/profileApi.js';
import { myBooksApi } from 'modules/home/api/myBooksApi.js';
import { sharedApi } from 'shared/api/sharedApi.js';

export const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
        modals: modalsReducer,
        bookRead: bookReadReducer,
        [profileApi.reducerPath]: profileApi.reducer,
        [myBooksApi.reducerPath]: myBooksApi.reducer,
        [sharedApi.reducerPath]: sharedApi.reducer,
    }),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            profileApi.middleware,
            myBooksApi.middleware,
            sharedApi.middleware
        ),
});
