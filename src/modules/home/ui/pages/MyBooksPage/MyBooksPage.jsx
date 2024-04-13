import { BasePageLayout } from 'modules/home/ui/pages/BasePageLayout/BasePageLayout.jsx';
import { Link, useNavigate } from 'react-router-dom';
import cls from './MyBooksPage.module.css';
import { myBooksApi } from 'modules/home/api/myBooksApi.js';
import { useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/components/Button/Button.jsx';
import defaultCover from 'shared/Img/defaultCover.jpg';
import searchSvg from '../../../assets/search.svg';
import libSvg from '../../../assets/lib.svg';
import editSvg from '../../../assets/edit.svg';
import { BookPublicationStatus } from 'modules/books/ui/pages/BookEditPage/components/BookPublicationStatus/BookPublicationStatus.jsx';
import { BookStatus } from 'modules/books/domain/enums/bookStatus.js';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';

export const MyBooksPage = () => {
    const { data: books, isLoading } = myBooksApi.useGetMyBooksQuery();
    const [filterText, setFilterText] = useState('');
    const navigate = useNavigate();

    const filterBook = book => book.title.toLowerCase().includes(filterText.toLowerCase());
    const booksFiltered = books?.filter(filterBook) ?? [];

    return (
        <BasePageLayout title={'Мои книги'}>
            <Button linkTo='/book/create' style={{ margin: '10px 0' }}>
                &#65291; Добавить книгу
            </Button>
            <div>
                <div className={cls.searchContainer}>
                    <img className={cls.searchSvg} src={searchSvg} alt='search' />
                    <input
                        className={cls.searchInput}
                        value={filterText}
                        onChange={e => setFilterText(e.target.value)}
                        type='text'
                        placeholder='искать по названию'
                    />
                </div>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <ul className={cls.bookList}>
                        {books.length > 0 ? (
                            booksFiltered.map(book => (
                                <li className={cls.bookItem} key={book.id}>
                                    <div
                                        className={cls.bookItemImg}
                                        style={{
                                            backgroundImage: `url(${book.coverSrc ?? defaultCover})`,
                                        }}
                                    />
                                    <div className={cls.bookItemCenterPart}>
                                        <p
                                            className={cls.bookItemTitle}
                                            onClick={() => navigate(`/book/${book.id}`)}
                                        >
                                            {book.title}
                                        </p>
                                        <div className={cls.bookItemDescription}>
                                            <p>
                                                {book.description &&
                                                    book.description.substring(0, 250) + '...'}
                                            </p>
                                        </div>
                                        <div className={cls.bookItemStats}>
                                            <div className={cls.bookItemStatItem}>
                                                <img src={libSvg} alt='adds to lib' />
                                                <span>{book.addsToLibraryCount}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cls.bookItemRightPart}>
                                        <Button
                                            theme={ButtonTheme.secondary}
                                            linkTo={`/book/${book.id}/edit`}
                                            imgSrc={editSvg}
                                        >
                                            Редактировать
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.secondary}
                                            linkTo={`/book/${book.id}`}
                                        >
                                            Перейти
                                        </Button>
                                        <BookPublicationStatus status={book.status} />
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p>Книг пока нет</p>
                        )}
                    </ul>
                )}
            </div>
        </BasePageLayout>
    );
};
