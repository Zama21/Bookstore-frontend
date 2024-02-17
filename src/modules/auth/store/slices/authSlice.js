import { createSlice } from '@reduxjs/toolkit';
import { thunkCheckAuth } from '../../domain/thunks/checkAuth.js';
import { thunkLogin } from '../../domain/thunks/login.js';
import { thunkRegister } from '../../domain/thunks/register.js';
import { thunkLogout } from 'modules/auth/domain/thunks/logout.js';

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
        username: '',
        registration: {
            error: '',
            success: false,
        },
        login: {
            error: '',
        },
    },
    reducers: {
        setRegistrationData(state, action) {
            state.registration = action.payload;
        },
    },
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
            state.login.error = action.payload;
        });
        builder.addCase(thunkLogin.pending, (state, action) => {
            state.login.error = '';
        });
        builder.addCase(thunkRegister.fulfilled, (state, action) => {
            state.registration.success = true;
        });
        builder.addCase(thunkRegister.rejected, (state, action) => {
            state.registration.error = action.payload[0];
        });
        builder.addCase(thunkRegister.pending, (state, action) => {
            state.registration.error = '';
            state.registration.success = false;
        });
        builder.addCase(thunkLogout.fulfilled, (state, action) => {
            state.isAuthed = false;
            state.roles = [];
            state.email = '';
            state.username = '';
        });
    },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
