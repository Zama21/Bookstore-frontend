import React, { useEffect } from 'react';
import defaultCover from 'shared/Img/defaultCover.jpg';
import { BookFinishedStatus } from '../../../../components/BookFinishedStatus/BookFinishedStatus.jsx';
import stl from './BookViewBoxEditPage.module.css';
import { BookPublishStatus } from 'modules/books/ui/components/BookPublishStatus/BookPublishStatus.jsx';
import { Button, ButtonTheme } from 'shared/ui/components/Button/Button.jsx';
import { useAwarenessModal } from 'modules/modals/domain/hooks/modal-types/useAwarenessModal.js';
import { bookEditApi } from 'modules/books/api/bookEditApi.js';

export default function BookViewBoxEditPage({ bookData }) {
    const awarenessModal = useAwarenessModal();
    const [publishBook, publishBookResult] = bookEditApi.usePublishBookMutation();
    const [unpublishBook, unpublishBookResult] = bookEditApi.useUnpublishBookMutation();

    console.log(publishBookResult);

    const handlePublishStatusToggle = () => {
        if (bookData.isPublished) {
            unpublishBook(bookData.id);
        } else {
            publishBook(bookData.id);
        }
    };

    useEffect(() => {
        if (publishBookResult.isSuccess) {
        }
    }, [publishBookResult]);

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
                    <BookFinishedStatus status={bookData.status} />
                    <div className={stl.bookPublishStatusControl}>
                        <BookPublishStatus isPublished={bookData.isPublished} />
                        <Button theme={ButtonTheme.secondary} onClick={handlePublishStatusToggle}>
                            {bookData.isPublished ? 'Снять с публикации' : 'Опубликовать'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
