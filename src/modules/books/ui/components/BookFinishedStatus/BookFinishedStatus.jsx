import { BookStatus } from 'modules/books/domain/enums/bookStatus.js';
import React from 'react';
import stl from './BookFinishedStatus.module.css';
import BookSvgSelector from '../../pages/BookPage/components/BookViewBox/svg/BookSvgSelector.jsx';

export const BookFinishedStatus = ({ status }) => {
    switch (status) {
        case BookStatus.Finished:
            return (
                <div className={`${stl.BookFinishedStatus} ${stl.finished}  flxRow`}>
                    <BookSvgSelector nameSvg='tick'></BookSvgSelector>
                    <span>Полный текст</span>
                </div>
            );
        case BookStatus.Unfinished:
            return (
                <div className={`${stl.BookFinishedStatus} ${stl.unfinished}  flxRow`}>
                    <BookSvgSelector nameSvg='unfinished'></BookSvgSelector>
                    <span>В процессе</span>
                </div>
            );
        case BookStatus.Frozen:
            return (
                <div className={`${stl.BookFinishedStatus} ${stl.frozen}  flxRow`}>
                    <BookSvgSelector nameSvg='snowflake'></BookSvgSelector>
                    <span>Заморожена</span>
                </div>
            );
        default:
            console.error(`Not existing status "${status}"`);
            return <></>;
    }
};
