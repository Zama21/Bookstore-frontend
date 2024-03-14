import React from 'react';
import stl from './BookViewBoxEditPage.module.css';
import BookSvgSelector from '../../../BookPage/components/BookViewBox/svg/BookSvgSelector';

export default function BookViewBoxEditPage({
    author,
    coverSrc,
    series = {},
    status,
    title,
    bookId,
    cost,
}) {
    let divBookPublicationStatus = () => {
        switch (status) {
            case 'finished':
                return (
                    <div
                        className={`${stl.bookPublicationStatus} ${stl.finished}  flxRow`}
                    >
                        <BookSvgSelector nameSvg='tick'></BookSvgSelector>
                        <span>Полный текст</span>
                    </div>
                );
            case 'unfinished':
                return (
                    <div
                        className={`${stl.bookPublicationStatus} ${stl.unfinished}  flxRow`}
                    >
                        <BookSvgSelector nameSvg='unfinished'></BookSvgSelector>
                        <span>В процессе</span>
                    </div>
                );
            case 'frozen':
                return (
                    <div
                        className={`${stl.bookPublicationStatus} ${stl.frozen}  flxRow`}
                    >
                        <BookSvgSelector nameSvg='snowflake'></BookSvgSelector>
                        <span>Заморожена</span>
                    </div>
                );
        }
    };

    return (
        <div className={`${stl.wrapper} `}>
            <div className={`${stl.column} `}>
                <img className={stl.img} src={coverSrc} alt='img' />
            </div>
            <div className={`${stl.column} ${stl.columnSameWidth}`}>
                <div className={stl.bookInformation}>
                    <h1 className={stl.h1}>{title}</h1>
                    {Object.keys(series).length != 0 && (
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
                    {divBookPublicationStatus()}
                </div>
            </div>
        </div>
    );
}
