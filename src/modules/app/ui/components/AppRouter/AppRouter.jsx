import { BookCreatePage } from 'modules/books/ui/pages/BookCreatePage/BookCreatePage.jsx';
import BookEditPage from 'modules/books/ui/pages/BookEditPage/BookEditPage.jsx';
import PartEditPage from 'modules/books/ui/pages/PartEditPage/PartEditPage.jsx';
import { MyBooksPage } from 'modules/home/ui/pages/MyBooksPage/MyBooksPage.jsx';
import { MyLibPage } from 'modules/home/ui/pages/MyLibPage/MyLibPage.jsx';
import { MyProfilePage } from 'modules/home/ui/pages/MyProfile/MyProfile.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Role } from '../../../../auth/store/slices/authSlice.js';
import { PrivateRoute } from '../../../../auth/ui/components/PrivateRoute/PrivateRoute.jsx';
import { LoginPage } from '../../../../auth/ui/pages/LoginPage/LoginPage.jsx';
import { RegPage } from '../../../../auth/ui/pages/RegPage/RegPage.jsx';
import { BookPage } from '../../../../books/ui/pages/BookPage/BookPage.jsx';
import { BookReadPage } from '../../../../books/ui/pages/BookReadPage/BookReadPage.jsx';
import { HomePage } from '../../../../home/ui/pages/HomePage/HomePage.jsx';
import { GlobalLayout } from '../GlobalLayout/GlobalLayout.jsx';
import { CatalogPage } from 'modules/catalog/ui/pages/CatalogPage/CatalogPage.jsx';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<GlobalLayout />}>
                {/* all users */}
                <Route path='/'>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/catalog' element={<CatalogPage />} />

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

                    <Route path='book/:bookId/edit' element={<BookEditPage />} />
                    <Route path='book/:bookId/part/:partId/edit' element={<PartEditPage />} />
                    <Route path='book/create' element={<BookCreatePage />} />

                    <Route path='library' element={<MyLibPage />} />
                    <Route path='profile' element={<MyProfilePage />} />
                    <Route path='myBooks' element={<MyBooksPage />} />

                    <Route path='book/:bookId/edit' element={<BookEditPage />} />
                    <Route path='book/:bookId/partEdit' element={<PartEditPage />} />
                </Route>

                {/* authed and admins */}
                <Route path='/' element={<PrivateRoute roles={[Role.Admin]} />}></Route>

                {/* not existing page */}
                <Route path='*' element={<Navigate to={'/'} />} />
            </Route>
        </Routes>
    );
};
