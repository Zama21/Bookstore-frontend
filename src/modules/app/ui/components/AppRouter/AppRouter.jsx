import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Routes,
} from 'react-router-dom';
import { HomePage } from '../../../../home/ui/pages/HomePage/HomePage.jsx';
import { BookPage } from '../../../../books/ui/pages/BookPage/BookPage.jsx';
import { BookReadPage } from '../../../../books/ui/pages/BookReadPage/BookReadPage.jsx';
import { RegPage } from '../../../../auth/ui/pages/RegPage/RegPage.jsx';
import { LoginPage } from '../../../../auth/ui/pages/LoginPage/LoginPage.jsx';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/'>
                <Route path='home' element={<HomePage />} />
                <Route path='auth'>
                    <Route path='reg' element={<RegPage />} />
                    <Route path='login' element={<LoginPage />} />
                </Route>
                <Route path='book/:bookId' element={<BookPage />} />
                <Route path='book/:bookId/read' element={<BookReadPage />} />
            </Route>
        </Routes>
    );
};
