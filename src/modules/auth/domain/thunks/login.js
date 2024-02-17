import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_TOKEN_KEY } from '../constants.js';
import { setAuthToken } from '../lib/authToken.js';
import { authActions } from '../../store/slices/authSlice.js';
import { axiosInstance } from '../../../../shared/api/apiInstance.js';

export const thunkLogin = createAsyncThunk('auth/login', async (loginData, thunkApi) => {
    try {
        const res = await axiosInstance.post('/auth/login', loginData);
        const { authToken, userData } = res.data;
        setAuthToken(authToken);
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${authToken}`;
        return res.data;
    } catch (err) {
        // console.log(err);
        return thunkApi.rejectWithValue(err.response.data.message);
    }
});
