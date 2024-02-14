import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { HomePage } from '../../../../home/ui/pages/HomePage/HomePage.jsx';
import { BookPage } from '../../../../books/ui/pages/BookPage/BookPage.jsx';
import { BookReadPage } from '../../../../books/ui/pages/BookReadPage/BookReadPage.jsx';
import { RegPage } from '../../../../auth/ui/pages/RegPage/RegPage.jsx';
import { AuthPage } from '../../../../auth/ui/pages/AuthPage/AuthPage.jsx';
export const AppRouter = () => {
    return createBrowserRouter(
        createRoutesFromElements(
            <Route path='/'>
                <Route path='home' element={<HomePage />} />
                <Route path='auth'>
                    <Route path='reg' element={<RegPage />} />
                    <Route path='login' element={<AuthPage />} />
                </Route>
                <Route path='book/:bookId' element={<BookPage />} />
                <Route path='book/:bookId/read' element={<BookReadPage />} />
            </Route>
        )
    );
};
