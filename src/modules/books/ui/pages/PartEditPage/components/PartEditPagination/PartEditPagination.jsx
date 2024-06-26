import React, { useState, useEffect } from 'react';
import cls from './PartEditPagination.module.css';
import classNames from 'classnames';
import NumberRangeDisplay from 'shared/ui/components/NumberRangeDisplay/NumberRangeDisplay';
import { BookEditPartApi } from 'modules/auth/api/BookEditPartApi';
import { useNavigate } from 'react-router-dom';

const PartEditPagination = ({
    start,
    end,
    selected,
    onSelect,
    pages,
    firstPageIndex,
    partId,
    bookId,
    updatePageIndexValue,
    deletePage,
}) => {
    const navigate = useNavigate();
    const handleSideBtnClick = direction => {
        if (direction == 'add') {
            const prevPageId = getIdByIndex(pages, selected);

            BookEditPartApi.addNewPage(partId, prevPageId)
                .then(res => {
                    updatePageIndexValue(selected, 1);
                    navigate(
                        `/book/${bookId}/partEdit?chapterNumber=${partId}&pageNumber=${
                            selected + 1
                        }`
                    );
                })
                .catch(err => console.log(err));
        } else {
            const pageId = getIdByIndex(pages, selected);
            BookEditPartApi.deletePage(pageId)
                .then(res => {
                    console.log('Удалили!');
                    deletePage(pageId);
                    updatePageIndexValue(selected, -1);

                    navigate(
                        `/book/${bookId}/partEdit?chapterNumber=${partId}&pageNumber=${
                            selected - 1
                        }`
                    );
                })
                .catch(err => console.log(err));
        }
    };

    function getIdByIndex(data, index) {
        const item = data.find(item => item.index === index);
        if (item) {
            return item.id;
        }
        return null;
    }

    return (
        <div className={cls.container}>
            <div
                className={classNames(cls.item, cls.delBtn)}
                onClick={() => handleSideBtnClick('del')}
            >
                <span className={cls.delBtn}>-</span>
            </div>
            <NumberRangeDisplay
                onSelect={onSelect}
                start={start}
                end={end}
                selected={selected}
                firstPageIndex={firstPageIndex}
            />
            <div
                className={classNames(cls.item, cls.addBtn)}
                onClick={() => handleSideBtnClick('add')}
            >
                <span className={cls.addBtn}>+</span>
            </div>
        </div>
    );
};

export default PartEditPagination;
