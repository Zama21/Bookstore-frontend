import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'user',
    initialState: {
        id: -1,
        firstName: '',
        lastName: '',
        email: '',
        login: '',
    },
    reducers: {},
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
