import React from 'react';
import defaultCover from 'shared/Img/defaultCover.jpg';
import cls from './BooksListItem.module.css';
import { useNavigate } from 'react-router-dom';
import libSvg from 'shared/Img/lib.svg';
import starSvg from 'shared/Img/star.svg';

const DescriptionLimit = 250;

export const BooksListItem = ({ book }) => {
    const navigate = useNavigate();
    return (
        <li className={cls.bookItem} key={book.id} onClick={() => navigate(`/book/${book.id}`)}>
            <div
                className={cls.bookItemImg}
                style={{
                    backgroundImage: `url(${book.coverSrc ?? defaultCover})`,
                }}
            />
            <div className={cls.bookItemRightPart}>
                <p className={cls.bookItemTitle}>{book.title}</p>
                <div className={cls.bookItemDescription}>
                    <p>
                        {book.description &&
                            book.description.substring(0, DescriptionLimit) +
                                (book.description > DescriptionLimit ? '...' : '')}
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
        </li>
    );
};
