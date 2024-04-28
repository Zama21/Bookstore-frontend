import { BookStatus } from 'modules/books/domain/enums/bookStatus.js';
import React from 'react';
import stl from './BookFinishedStatus.module.css';
import BookSvgSelector from '../../pages/BookPage/components/BookViewBox/svg/BookSvgSelector.jsx';
import { BookStatusTextMap } from 'modules/books/lib/bookStatusMap.js';
import classNames from 'classnames';

export const BookFinishedStatus = ({ status }) => {
    if (!BookStatusTextMap[status]) {
        console.error(`Not existing status "${status}"`);
        return <></>;
    }

    return (
        <div
            className={classNames(
                stl.BookFinishedStatus,
                {
                    [stl.finished]: status === BookStatus.Finished,
                    [stl.unfinished]: status === BookStatus.Unfinished,
                    [stl.frozen]: status === BookStatus.Frozen,
                },
                'flxRow'
            )}
        >
            <BookSvgSelector nameSvg='tick'></BookSvgSelector>
            <span>{BookStatusTextMap[status]}</span>
        </div>
    );
};
