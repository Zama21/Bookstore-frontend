import React, { useState, useEffect } from 'react';
import cls from './Pagination.module.css';
import classNames from 'classnames';
import NumberRangeDisplay from 'shared/ui/components/NumberRangeDisplay/NumberRangeDisplay';

const Pagination = ({
    start,
    end,
    selected,
    onSelect,

    leftButtonText = 'Назад',
    rightButtonText = 'Вперёд',

    className,
}) => {
    return (
        <div className={classNames(cls.container, className)}>
            <div
                className={classNames(cls.item, {
                    [cls.disabled]: selected <= start,
                })}
                onClick={() => selected > start && onSelect(selected - 1)}
            >
                {leftButtonText}
            </div>
            <NumberRangeDisplay
                onSelect={onSelect}
                start={start}
                end={end}
                selected={selected}
                firstPageIndex={1}
            />
            <div
                className={classNames(cls.item, {
                    [cls.disabled]: selected >= end,
                })}
                onClick={() => selected < end && onSelect(selected + 1)}
            >
                {rightButtonText}
            </div>
        </div>
    );
};

export default Pagination;
