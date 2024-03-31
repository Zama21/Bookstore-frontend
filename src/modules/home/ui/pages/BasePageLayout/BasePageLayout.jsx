import React from 'react';
import cls from './BasePageLayout.module.css';
import { Sidebar } from '../../components/Sidebar/Sidebar.jsx';
import { useAuth } from 'modules/auth/domain/hooks/useAuth.js';

export const BasePageLayout = ({ children, title }) => {
    const { isAuthed } = useAuth();

    return (
        <div className={cls.page}>
            <div className={cls.content}>
                <main className={cls.main}>
                    <h1 className={cls.title}>{title}</h1>
                    {children}
                </main>
                {isAuthed && <Sidebar />}
            </div>
        </div>
    );
};
