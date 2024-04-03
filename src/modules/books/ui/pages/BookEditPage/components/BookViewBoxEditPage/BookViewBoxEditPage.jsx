import React from 'react';
import defaultCover from 'shared/Img/defaultCover.jpg';
import { BookPublicationStatus } from '../BookPublicationStatus/BookPublicationStatus.jsx';
import stl from './BookViewBoxEditPage.module.css';

export default function BookViewBoxEditPage({ bookData }) {
    return (
        <div className={`${stl.wrapper} `}>
            <div className={`${stl.column} `}>
                <img className={stl.img} src={bookData?.coverSrc ?? defaultCover} alt='img' />
            </div>
            <div className={`${stl.column} ${stl.columnSameWidth}`}>
                <div className={stl.bookInformation}>
                    <h1 className={stl.h1}>{bookData.title}</h1>
                    {bookData.series?.name && (
                        <p className={stl.nonPriorityInformation} key={'series'}>
                            <span className={stl.metaName}>Цикл: </span>
                            <a className={stl.anchor} href='#'>
                                {bookData.series.name}
                            </a>
                        </p>
                    )}
                    <p>
                        <span className={stl.metaName}>Жанры: </span>
                        {bookData.genres?.length > 0
                            ? bookData.genres.map((genre, ind) => (
                                  <React.Fragment key={genre}>
                                      <a className={stl.anchor} href=''>
                                          {genre}
                                      </a>
                                      {ind < bookData.genres.length - 1 && ', '}
                                  </React.Fragment>
                              ))
                            : 'нет'}
                    </p>
                    {<BookPublicationStatus status={bookData.status} />}
                </div>
            </div>
        </div>
    );
}
