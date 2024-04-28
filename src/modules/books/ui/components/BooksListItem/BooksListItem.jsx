import React from 'react';
import defaultCover from 'shared/Img/defaultCover.jpg';
import cls from './BooksListItem.module.css';
import { useNavigate } from 'react-router-dom';
import libSvg from 'shared/Img/lib.svg';
import starSvg from 'shared/Img/star.svg';
import editSvg from 'shared/Img/edit.svg';
import pagesSvg from 'shared/Img/pages.svg';
import { BookFinishedStatus } from 'modules/books/ui/components/BookFinishedStatus/BookFinishedStatus.jsx';
import { Button, ButtonTheme } from 'shared/ui/components/Button/Button.jsx';

const DescriptionLimit = 250;

export const BooksListItem = ({ book, showEditBlock = false }) => {
    const navigate = useNavigate();
    return (
        <li className={cls.bookItem} key={book.id} onClick={() => navigate(`/book/${book.id}`)}>
            <div
                className={cls.bookItemImg}
                style={{
                    backgroundImage: `url(${book.coverSrc ?? defaultCover})`,
                }}
            />
            <div className={cls.bookItemCenterPart}>
                <div className={cls.titleWrapper}>
                    <p className={cls.bookItemTitle}>{book.title}</p>
                    <div className={cls.priceInfoContainer}>
                        {book.cost === 0 ? (
                            <div className={cls.freeBook}>Бесплатная</div>
                        ) : (
                            <p className={cls.price}>
                                цена: {book.cost}руб. (Бесплатных глав - {book.freeChaptersCount})
                            </p>
                        )}
                    </div>
                </div>

                <div className={cls.bookItemDescription}>
                    <p>
                        {book.description &&
                            book.description.substring(0, DescriptionLimit) +
                                (book.description.length > DescriptionLimit ? '...' : '')}
                    </p>
                </div>
                <div className={cls.bookStatWrapper}>
                    <div className={cls.bookItemStats}>
                        <div className={cls.bookItemStatItem}>
                            <img src={libSvg} alt='adds to lib' />
                            <span>{book.bookStat?.addsToLibraryCount ?? 0}</span>
                        </div>
                        <div className={cls.bookItemStatItem}>
                            <img src={starSvg} alt='adds to lib' />
                            <span>{book.bookStat?.starsCount ?? 0}</span>
                        </div>
                        <div className={cls.bookItemStatItem}>
                            <img src={pagesSvg} alt='adds to lib' />
                            <span>{book.bookStat?.pagesCount ?? 0}</span>
                        </div>
                    </div>
                    <BookFinishedStatus status={book.status} />
                </div>
                {Boolean(book.genres?.length) && (
                    <ul className={cls.genres}>
                        {book.genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                )}
            </div>

            {showEditBlock && (
                <div className={cls.bookItemEditPart}>
                    <Button
                        theme={ButtonTheme.secondary}
                        linkTo={`/book/${book.id}/edit`}
                        imgSrc={editSvg}
                        className={cls.bookItemEditPartButton}
                    >
                        Редактировать
                    </Button>
                    <Button
                        theme={ButtonTheme.secondary}
                        linkTo={`/book/${book.id}`}
                        className={cls.bookItemEditPartButton}
                    >
                        Перейти
                    </Button>
                </div>
            )}
        </li>
    );
};
