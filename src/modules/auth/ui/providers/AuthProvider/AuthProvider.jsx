import React, { Children, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkCheckAuth } from '../../../domain/thunks/checkAuth.js';
import { authActions } from '../../../store/slices/authSlice.js';
import { useSelector } from 'react-redux';

export const AuthProvider = ({ children }) => {
    // const [authLoading, setAuthLoading] = useState(true);
    const authIsLoading = useSelector(state => state.auth.authIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkCheckAuth());
        // .unwrap()
        // .then(data => {
        //     console.log('data', data);
        //     setAuthLoading(false);
        //     // dispatch(userActions.setUserData(data));
        //     // dispatch(userActions.setAuthed(true));
        //     // dispatch(thunkGetProfileData());
        // })
        // .catch(err => {
        //     console.log(err);
        //     setAuthLoading(false);
        //     // dispatch(authActions.setAuthed(false));
        // });
    }, []);

    return <>{authIsLoading ? '' : children}</>;
};
