import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../../auth/store/slices/authSlice.js';
import { modalsReducer } from 'modules/modals/store/modalsSlice.js';

export const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
        modals: modalsReducer,
    }),
});
