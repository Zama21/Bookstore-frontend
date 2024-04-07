import React, { useState, useEffect } from 'react';
import cls from './ReadingPagination.module.css';
import classNames from 'classnames';
import NumberRangeDisplay from 'shared/ui/components/NumberRangeDisplay/NumberRangeDisplay';

const ReadingPagination = ({
    start,
    end,
    selected,
    onSelect,
    selectedPart,
    parts,

    firstPageIndex,
}) => {
    const [sideButtons, setSideButtons] = useState();

    useEffect(() => {
        const isActiveLeftBtn = selected == 1 ? false : true;
        const isActiveRightBtn =
            end + firstPageIndex - 1 == selected &&
            selectedPart == parts[parts.length - 1].id
                ? false
                : true;
        const textLeftBtn = selected == firstPageIndex ? 'Пред.глава' : 'Назад';
        const textRightBtn =
            end + firstPageIndex - 1 == selected ? 'След.глава' : 'Вперед';
        setSideButtons({
            isActiveLeftBtn,
            isActiveRightBtn,
            textLeftBtn,
            textRightBtn,
        });
    }, [selectedPart, parts, start, end, selected, firstPageIndex]);

    const handleSideBtnClick = direction => {
        if (direction == 'left') {
            if (sideButtons.textLeftBtn == 'Назад') onSelect(selected - 1);
            else onSelect(selected, -1, -1);
        } else {
            if (sideButtons.textRightBtn == 'Вперед') onSelect(selected + 1);
            else {
                onSelect(selected, 1, 1);
            }
        }
    };

    return (
        sideButtons && (
            <div className={cls.container}>
                <div
                    className={classNames(cls.item, {
                        [cls.disabled]: !sideButtons.isActiveLeftBtn,
                    })}
                    onClick={() =>
                        sideButtons.isActiveLeftBtn &&
                        handleSideBtnClick('left')
                    }
                >
                    {sideButtons.textLeftBtn}
                </div>
                <NumberRangeDisplay
                    onSelect={onSelect}
                    start={start}
                    end={end}
                    selected={selected}
                    firstPageIndex={firstPageIndex}
                />
                <div
                    className={classNames(cls.item, {
                        [cls.disabled]: !sideButtons.isActiveRightBtn,
                    })}
                    onClick={() =>
                        sideButtons.isActiveRightBtn &&
                        handleSideBtnClick('right')
                    }
                >
                    {sideButtons.textRightBtn}
                </div>
            </div>
        )
    );
};

export default ReadingPagination;
