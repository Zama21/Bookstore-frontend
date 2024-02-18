import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const AuthPageWrapper = ({ children }) => {
    const isAuthed = useSelector((state) => state.auth.isAuthed);
    if (isAuthed) return <Navigate to={'/'} />;
    return <>{children}</>;
};
