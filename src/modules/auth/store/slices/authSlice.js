import { createSlice } from '@reduxjs/toolkit';

export const Role = {
    User: 'user',
    Admin: 'user',
};

export const AllRoles = Object.values(Role);

export const authSlice = createSlice({
    name: 'user',
    initialState: {
        id: -1,
        isAuthed: false,
        roles: [],
        email: '',
        login: '',
    },
    reducers: {},
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
