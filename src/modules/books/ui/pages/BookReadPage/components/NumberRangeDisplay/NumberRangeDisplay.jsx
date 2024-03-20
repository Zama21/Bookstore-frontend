import React, { useState, useEffect } from 'react';
import cls from './NumberRangeDisplay.module.css';
import classNames from 'classnames';

const NumberRangeDisplay = ({
    start,
    end,
    selected,
    onSelect,
    selectedPart,
    parts,
    numberNeighbors = 2,
}) => {
    const [displayNumbers, setDisplayNumbers] = useState([]);
    const [sideButtons, setSideButtons] = useState();

    useEffect(() => {
        const isActiveLeftBtn =
            selected == 1 && selectedPart == 1 ? false : true;
        const isActiveRightBtn =
            end == selected && selectedPart == parts.length ? false : true;
        const textLeftBtn = selected == 1 ? 'Пред.глава' : 'Назад';
        const textRightBtn = end == selected ? 'След.глава' : 'Вперед';
        setSideButtons({
            isActiveLeftBtn,
            isActiveRightBtn,
            textLeftBtn,
            textRightBtn,
        });
    }, [selectedPart, parts, start, end, selected]);

    useEffect(() => {
        setDisplayNumbers(
            Array.from({ length: numberNeighbors * 2 + 1 }, (_, index) => {
                let value = index + (selected - numberNeighbors);
                if (value > start && value < end) return value;
                return '';
            }).filter(item => item !== '')
        );
        setDisplayNumbers(prev => {
            const newNumbers = [];
            if (prev.length == 0) {
                if (start != end) return [start, end];
                return [start];
            }
            prev[0] !== start + 1
                ? newNumbers.push(start, '...')
                : newNumbers.push(start);

            newNumbers.push(...prev);

            prev[prev.length - 1] !== end - 1
                ? newNumbers.push('...', end)
                : newNumbers.push(end);

            return newNumbers;
        });
    }, [selected, numberNeighbors, start, end]);

    const handleItemClick = item => {
        if (item !== '...') {
            onSelect(item);
        }
    };
    const handleSideBtnClick = direction => {
        if (direction == 'left') {
            if (sideButtons.textLeftBtn == 'Назад') onSelect(selected - 1);
            else onSelect(selected, -1, -1);
        } else {
            if (sideButtons.textRightBtn == 'Вперед') onSelect(selected + 1);
            else onSelect(selected, +1, -selected + 1);
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
                <div className={cls.containerNumbers}>
                    {displayNumbers.map((item, index) => {
                        {
                            return (
                                (item != '...' && (
                                    <div
                                        className={classNames(cls.item, {
                                            [cls.selectedItem]:
                                                item == selected,
                                        })}
                                        key={index}
                                        onClick={() => handleItemClick(item)}
                                    >
                                        {item}
                                    </div>
                                )) || (
                                    <div className={cls.multipoint} key={index}>
                                        {item}
                                    </div>
                                )
                            );
                        }
                    })}
                </div>
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

export default NumberRangeDisplay;
