import { useAuth } from 'modules/auth/domain/hooks/useAuth.js';
import { Sidebar } from 'modules/home/ui/widgets/Sidebar/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import React from 'react';
import cls from './GlobalLayout.module.css';

export const GlobalLayout = () => {
    const { isAuthed } = useAuth();

    return (
        <div className={cls.page}>
            <div className={cls.content}>
                <Outlet />
                {isAuthed && <Sidebar />}
            </div>
        </div>
    );
};
