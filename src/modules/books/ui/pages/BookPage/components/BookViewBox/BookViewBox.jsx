import React from 'react';
import stl, { bookDate } from './BookViewBox.module.css';
import BookSvgSelector from './svg/BookSvgSelector';
import { Link } from 'react-router-dom';
import { BookFinishedStatus } from '../../../../components/BookFinishedStatus/BookFinishedStatus.jsx';
import defaultCover from 'shared/Img/defaultCover.jpg';

function formatDate(date) {
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let year = date.getFullYear();
    return day + '-' + month + '-' + year;
}

export default function BookViewBox({
    addsToLibraryCount,
    author,
    coverSrc,
    createdAt,
    rewardsCount,
    series = {},
    status,
    updatedAt,
    viewsCount,
    title,
    toggleLibrary,
    isInLibrary,
    starsCount,
    toggleStarred,
    isStarred,
    currentPage,
    bookId,
    cost,
    parts,
    currentPart,
    freeChaptersCount,
}) {
    createdAt = formatDate(new Date(createdAt));
    updatedAt = formatDate(new Date(updatedAt));
    let chapterNumber = currentPart?.id ?? parts?.[0]?.id;

    let libraryBtn = (
        <div
            className={`${stl.footerColumn3} ${isInLibrary ? stl.isInLibrary : ''} `}
            onClick={toggleLibrary}
        >
            <BookSvgSelector nameSvg='libraryOfBooks' />
            {isInLibrary ? <span>В библиотеке</span> : <span>Добавьте в библиотеку</span>}
        </div>
    );
    let containerBookReadBtn = (
        <div className={stl.wrapperBtnForRead}>
            <Link
                className={stl.bookBtnForRead}
                to={
                    chapterNumber && currentPage
                        ? `/book/${bookId}/read?chapterNumber=${chapterNumber}&pageNumber=${
                              currentPage || 1
                          }`
                        : `/book/${bookId}/read`
                }
            >
                {`${currentPage > 1 ? 'Продолжить' : 'Читать'}`}
            </Link>
            {cost > 0 && (
                <div
                    style={{ marginTop: '10px', marginBottom: 0, textAlign: 'center', fontSize: '18px' }}
                >
                    <p>Бесплатных глав - {freeChaptersCount}</p>
                    <div className={`${stl.bookBtnForRead} ${stl.buy}`}>{`Подписка ${cost} RUB`}</div>
                </div>
            )}
        </div>
    );

    return (
        <div className={`${stl.wrapper} `}>
            <div className={`${stl.column} `}>
                <img className={stl.img} src={coverSrc ?? defaultCover} alt='img' />
            </div>
            <div className={`${stl.column} ${stl.columnSameWidth}`}>
                <div className={stl.bookInformation}>
                    <h1 className={stl.h1}>{title}</h1>
                    <h2>
                        <a className={stl.authorNic} href=''>
                            {author?.firstName} {author?.lastName}
                        </a>
                    </h2>
                    {series && (
                        <p className={stl.nonPriorityInformation}>
                            <span className={stl.metaName}>Цикл: </span>
                            <a className={stl.anchor} href=''>
                                {series.name}
                            </a>
                        </p>
                    )}
                    <p>
                        <span className={stl.metaName}>Жанры: </span>
                        <a className={stl.anchor} href=''>
                            Стихи
                        </a>
                        ,{' '}
                        <a className={stl.anchor} href=''>
                            Литрпг
                        </a>
                        ,{' '}
                        <a className={stl.anchor} href=''>
                            Любовный роман
                        </a>
                    </p>
                    {containerBookReadBtn}
                </div>
            </div>
            <div className={`${stl.column} ${stl.columnSameWidth}`}>
                <div className={stl.containerFor3Column}>
                    <div className={stl.headerColumn3} onClick={toggleStarred}>
                        <div className={`${stl.likeContainer} ${isStarred ? stl.active : ''}`}>
                            <BookSvgSelector nameSvg='starLike'></BookSvgSelector>
                            <span>{starsCount}</span>
                        </div>
                        <div className={stl.ratingContainer}>
                            <p>Награды</p>
                            <p className='flxVrt'>
                                <BookSvgSelector nameSvg='starRating'></BookSvgSelector>
                                <span>{rewardsCount}</span>
                            </p>
                        </div>
                    </div>
                    <span className={stl.divider}></span>
                    <div className={stl.mainColumn3}>
                        <div className={`${stl.addViewStatistics}  flxRow`}>
                            <div className='flxVrt'>
                                <BookSvgSelector nameSvg='bookshelf'></BookSvgSelector>
                                <span>{addsToLibraryCount}</span>
                            </div>
                            <div className='flxVrt'>
                                <BookSvgSelector nameSvg='eye'></BookSvgSelector>
                                <span>{viewsCount}</span>
                            </div>
                        </div>
                        <span className={stl.divider}></span>
                        <BookFinishedStatus status={status} />
                        <span className={stl.divider}></span>
                        <div className={stl.lifeCycleOfBook}>
                            <p className={stl.publicationTitle}>Публикация</p>
                            <p>
                                <span className={stl.bookDate}>Начата:</span> {createdAt}
                            </p>
                            <p>
                                <span className={stl.bookDate}>{`${
                                    status == 'finished' ? 'Завершена:' : 'обновлена:'
                                }`}</span>{' '}
                                {updatedAt}
                            </p>
                        </div>
                    </div>
                    {libraryBtn}
                </div>
            </div>
        </div>
    );
}
