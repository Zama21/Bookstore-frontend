import { Navigate, Route, Routes } from 'react-router-dom';
import { Role } from '../../../../auth/store/slices/authSlice.js';
import { PrivateRoute } from '../../../../auth/ui/components/PrivateRoute/PrivateRoute.jsx';
import { LoginPage } from '../../../../auth/ui/pages/LoginPage/LoginPage.jsx';
import { RegPage } from '../../../../auth/ui/pages/RegPage/RegPage.jsx';
import { BookPage } from '../../../../books/ui/pages/BookPage/BookPage.jsx';
import { BookReadPage } from '../../../../books/ui/pages/BookReadPage/BookReadPage.jsx';
import { HomePage } from '../../../../home/ui/pages/HomePage/HomePage.jsx';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/'>
                {/* all users */}
                <Route path='/'>
                    <Route path='/' element={<h1>Main page with web-site description</h1>} />
                    <Route path='auth'>
                        <Route path='reg' element={<RegPage />} />
                        <Route path='login' element={<LoginPage />} />
                    </Route>
                    <Route path='book/:bookId' element={<BookPage />} />
                    <Route path='book/:bookId/read' element={<BookReadPage />} />
                </Route>

                {/* authed users */}
                <Route path='/' element={<PrivateRoute roles={[Role.User]} />}>
                    <Route path='home' element={<HomePage />} />
                </Route>

                {/* authed and admins */}
                <Route path='/' element={<PrivateRoute roles={[Role.Admin]} />}></Route>

                {/* not existing page */}
                <Route path='*' element={<Navigate to={'/'} />} />
            </Route>
        </Routes>
    );
};
