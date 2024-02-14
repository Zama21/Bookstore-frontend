import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../../auth/store/slices/authSlice.js';

export const store = configureStore({
    reducer: combineReducers({
        user: authReducer,
    }),
});
