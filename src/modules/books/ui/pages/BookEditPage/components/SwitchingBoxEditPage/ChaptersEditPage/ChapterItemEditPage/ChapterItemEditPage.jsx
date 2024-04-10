import React, { useEffect, useState } from 'react';
import stl from './ChapterItemEditPage.module.css';
import { Link } from 'react-router-dom';
import { BookEditPartApi } from 'modules/auth/api/BookEditPartApi';
import { BookReadPageApi } from 'modules/books/api/bookReadPageApi';

function formatCustomDate(inputDate) {
    const months = [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ];

    const date = new Date(inputDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

export default function ChapterItemEditPage({
    id,
    title,
    isFree,
    createdAt,
    updatedAt,
    bookId,
    deleteChapter,
    isUpdateFirstPage,
    setIsUpdateFirstPage,
}) {
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        console.log('fegtg');
        BookReadPageApi.gettingChapterMetaInformation(bookId, id, 0).then(
            res => {
                if (res.data.firstPageIndex > res.data.lastPageIndex) {
                    BookEditPartApi.addNewPage(id, null).catch(err =>
                        console.log(err)
                    );
                }
                setIsUpdateFirstPage(false);

                setPageNumber(res.data.firstPageIndex);
            }
        );
    }, [bookId, id, isUpdateFirstPage]);

    // function getPageNumber() {
    //     BookReadPageApi.gettingChapterMetaInformation(bookId, id, 0).then(
    //         res => {
    //             return res.data.firstPageIndex;
    //         }
    //     );
    // }
    // console.log(getPageNumber());
    return (
        <div className={stl.wrapper}>
            <div className={stl.wrapperBookPartsName}>
                <Link to={'/'}>{title}</Link>
                <span
                    className={`${stl.bookPartsStatus} ${stl.bookPartsStatusSuccess}`}
                >
                    Опубликовано
                </span>
            </div>
            <div className={stl.wrapperBookPartsAttr}>
                <div className={stl.bookPartsAttrCost}>{isFree ? '' : '$'}</div>
                <div className={stl.bookPartsAttrDate}>
                    {formatCustomDate(createdAt)} —{' '}
                    {formatCustomDate(updatedAt)}
                </div>
            </div>
            <div className={stl.bookPartsMenu}>
                <button>&hellip;</button>
                <div className={stl.bookPartsMenuList}>
                    <a
                        href={`/book/${bookId}/read?chapterNumber=${id}&pageNumber=${pageNumber}`}
                    >
                        Открыть в читалке
                    </a>
                    <a
                        href={`/book/${bookId}/partEdit?chapterNumber=${id}&pageNumber=${pageNumber}`}
                    >
                        Редактировать главу
                    </a>
                    <a
                        className={stl.danger}
                        onClick={() => {
                            BookEditPartApi.deletePart(id);
                            deleteChapter(id);
                        }}
                    >
                        Удалить
                    </a>
                </div>
            </div>
        </div>
    );
}
