import { BasePageLayout } from 'modules/home/ui/pages/BasePageLayout/BasePageLayout.jsx';
import { Link } from 'react-router-dom';
import cls from './MyBooksPage.module.css';
import { myBooksApi } from 'modules/home/api/myBooksApi.js';

export const MyBooksPage = () => {
    const { data: books, isLoading } = myBooksApi.useGetMyBooksQuery();

    return (
        <BasePageLayout title={'Мои книги'}>
            <Link className={cls.addBookButton} to={'/book/create'}>
                + Добавить книгу
            </Link>
            {isLoading ? (
                <p className={cls.loading}>загрузка...</p>
            ) : (
                <ul className={cls.bookList}>
                    {books.length > 0 ? (
                        books.map(book => (
                            <li className={cls.bookItem} key={book.id}>
                                <p>{book.title}</p>
                                <Link className={cls.editButton} to={`/book/${book.id}/edit`}>
                                    Редактировать
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>Книг пока нет</p>
                    )}
                </ul>
            )}
        </BasePageLayout>
    );
};
