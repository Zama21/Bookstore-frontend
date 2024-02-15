import { createSlice } from '@reduxjs/toolkit';
import { thunkCheckAuth } from '../../domain/thunks/checkAuth.js';
import { thunkLogin } from '../../domain/thunks/login.js';
import { thunkRegister } from '../../domain/thunks/register.js';

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
        authIsLoading: true,
        roles: [],
        email: '',
        login: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(thunkCheckAuth.fulfilled, (state, action) => {
            state.authIsLoading = false;
            state.isAuthed = true;
        });
        builder.addCase(thunkCheckAuth.rejected, (state, action) => {
            state.isAuthed = false;
            state.authIsLoading = false;
        });
        builder.addCase(thunkCheckAuth.pending, (state, action) => {
            state.authIsLoading = true;
        });

        builder.addCase(thunkLogin.fulfilled, (state, action) => {
            state.isAuthed = true;
        });
        builder.addCase(thunkLogin.rejected, (state, action) => {
            state.isAuthed = false;
        });
        builder.addCase(thunkLogin.pending, (state, action) => {});

        // builder.addCase(thunkRegister.fulfilled, (state, action) => {
        //     // state.isAuthed = true;
        // });
        // builder.addCase(thunkRegister.rejected, (state, action) => {
        //     // state.isAuthed = false;
        // });
        // builder.addCase(thunkRegister.pending, (state, action) => {});
    },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
