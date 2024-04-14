import React from 'react';
import cls from './BasePageLayout.module.css';
import { Sidebar } from '../../widgets/Sidebar/Sidebar.jsx';
import { useAuth } from 'modules/auth/domain/hooks/useAuth.js';
import { useSidebar } from 'modules/home/domain/useSidebar.js';
import { Outlet } from 'react-router-dom';

export const BasePageLayout = ({ children, title }) => {
    return (
        <main className={cls.main}>
            <h1 className={cls.title}>{title}</h1>
            {children}
        </main>
    );
};
