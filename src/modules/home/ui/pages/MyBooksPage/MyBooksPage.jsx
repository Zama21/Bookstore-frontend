import { BookFinishedStatus } from 'modules/books/ui/components/BookFinishedStatus/BookFinishedStatus.jsx';
import { myBooksApi } from 'modules/home/api/myBooksApi.js';
import { BasePageLayout } from 'modules/home/ui/pages/BasePageLayout/BasePageLayout.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultCover from 'shared/Img/defaultCover.jpg';
import { Button, ButtonTheme } from 'shared/ui/components/Button/Button.jsx';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';
import { SearchInput } from 'shared/ui/components/SearchInput/SearchInput.jsx';
import editSvg from '../../../assets/edit.svg';
import libSvg from 'shared/Img/lib.svg';
import starSvg from 'shared/Img/star.svg';

import cls from './MyBooksPage.module.css';

const DescriptionLimit = 250;

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
                <SearchInput
                    value={filterText}
                    onChange={value => setFilterText(value)}
                    placeholder='искать по названию'
                />
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
                                                    book.description.substring(0, DescriptionLimit) +
                                                        (book.description > DescriptionLimit
                                                            ? '...'
                                                            : '')}
                                            </p>
                                        </div>
                                        <div className={cls.bookItemStats}>
                                            <div className={cls.bookItemStatItem}>
                                                <img src={libSvg} alt='adds to lib' />
                                                <span>{book.bookStat?.addsToLibraryCount ?? 0}</span>
                                            </div>
                                            <div className={cls.bookItemStatItem}>
                                                <img src={starSvg} alt='adds to lib' />
                                                <span>{book.bookStat?.starsCount ?? 0}</span>
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
                                        <BookFinishedStatus status={book.status} />
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
