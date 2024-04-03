import { BookStatus } from 'modules/books/domain/enums/bookStatus.js';
import React from 'react';
import stl from './BookPublicationStatus.module.css';
import BookSvgSelector from '../../../BookPage/components/BookViewBox/svg/BookSvgSelector.jsx';

export const BookPublicationStatus = ({ status }) => {
    switch (status) {
        case BookStatus.Finished:
            return (
                <div className={`${stl.bookPublicationStatus} ${stl.finished}  flxRow`}>
                    <BookSvgSelector nameSvg='tick'></BookSvgSelector>
                    <span>Полный текст</span>
                </div>
            );
        case BookStatus.Unfinished:
            return (
                <div className={`${stl.bookPublicationStatus} ${stl.unfinished}  flxRow`}>
                    <BookSvgSelector nameSvg='unfinished'></BookSvgSelector>
                    <span>В процессе</span>
                </div>
            );
        case BookStatus.Frozen:
            return (
                <div className={`${stl.bookPublicationStatus} ${stl.frozen}  flxRow`}>
                    <BookSvgSelector nameSvg='snowflake'></BookSvgSelector>
                    <span>Заморожена</span>
                </div>
            );
        default:
            return 'Not existing status!';
    }
};
