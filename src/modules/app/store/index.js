import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../../auth/store/slices/authSlice.js';
import { modalsReducer } from 'modules/modals/store/modalsSlice.js';
import { bookReadReducer } from 'modules/books/store/bookReadSlice.js';
import { profileApi } from 'modules/home/api/profileApi.js';
import { myBooksApi } from 'modules/home/api/myBooksApi.js';
import { sharedApi } from 'shared/api/sharedApi.js';
import { homeReducer } from 'modules/home/store/homeSlice.js';
import { bookCategoriesApi } from 'modules/home/api/bookCategoriesApi.js';
import { bookEditApi } from 'modules/books/api/bookEditApi.js';
import { bookBasicApi } from 'modules/books/api/bookBasicApi.js';
import { catalogReducer } from 'modules/catalog/store/catalogSlice.js';
import { catalogApi } from 'modules/catalog/api/catalogApi.js';

export const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
        modals: modalsReducer,
        bookRead: bookReadReducer,
        home: homeReducer,
        catalog: catalogReducer,
        [profileApi.reducerPath]: profileApi.reducer,
        [myBooksApi.reducerPath]: myBooksApi.reducer,
        [sharedApi.reducerPath]: sharedApi.reducer,
        [bookCategoriesApi.reducerPath]: bookCategoriesApi.reducer,
        [bookEditApi.reducerPath]: bookEditApi.reducer,
        [bookBasicApi.reducerPath]: bookBasicApi.reducer,
        [catalogApi.reducerPath]: catalogApi.reducer,
    }),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            profileApi.middleware,
            myBooksApi.middleware,
            sharedApi.middleware,
            bookCategoriesApi.middleware,
            bookEditApi.middleware,
            bookBasicApi.middleware,
            catalogApi.middleware
        ),
});
