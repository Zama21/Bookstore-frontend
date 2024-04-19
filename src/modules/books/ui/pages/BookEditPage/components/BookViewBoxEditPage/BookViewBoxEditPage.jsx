import { bookEditApi } from 'modules/books/api/bookEditApi.js';
import { BookPublishStatus } from 'modules/books/ui/components/BookPublishStatus/BookPublishStatus.jsx';
import { useConfirmModal } from 'modules/modals/domain/hooks/modalTypes/useConfirmModal.js';
import React, { useEffect } from 'react';
import defaultCover from 'shared/Img/defaultCover.jpg';
import { Button, ButtonTheme } from 'shared/ui/components/Button/Button.jsx';
import { BookFinishedStatus } from '../../../../components/BookFinishedStatus/BookFinishedStatus.jsx';
import stl from './BookViewBoxEditPage.module.css';
import { ConfirmModalReponse } from 'modules/modals/domain/models/modalResponse.model.js';

export default function BookViewBoxEditPage({ bookData }) {
    const confirmModal = useConfirmModal();
    const [publishBook] = bookEditApi.usePublishBookMutation();
    const [unpublishBook] = bookEditApi.useUnpublishBookMutation();

    const handlePublishStatusToggle = () => {
        confirmModal.open({
            title: 'Подтвердите действие',
            text: 'Вы точно хотите изменить статус публикации этой книги?',
        });
    };

    useEffect(() => {
        if (confirmModal.response === ConfirmModalReponse.Yes) {
            if (bookData.isPublished) {
                unpublishBook(bookData.id);
            } else {
                publishBook(bookData.id);
            }
            confirmModal.close();
        }
    }, [confirmModal.response]);

    return (
        <div className={`${stl.wrapper} `}>
            <div className={`${stl.column} `}>
                <img className={stl.img} src={bookData?.coverSrc ?? defaultCover} alt='img' />
            </div>
            <div className={`${stl.column} ${stl.columnSameWidth}`}>
                <div className={stl.bookInformation}>
                    <h1 className={stl.h1}>{bookData.title}</h1>
                    {bookData.series?.name && (
                        <p className={stl.nonPriorityInformation}>
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
