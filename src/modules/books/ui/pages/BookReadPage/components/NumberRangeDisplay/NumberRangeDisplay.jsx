import React, { useState, useEffect } from 'react';
import cls from './NumberRangeDisplay.module.css';
import classNames from 'classnames';

const NumberRangeDisplay = ({
    start,
    end,
    selected,
    onSelect,
    numberNeighbors = 2,
}) => {
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    let displayNumbers = [];
    const handleItemClick = item => {
        if (item !== '...') {
            onSelect(item);
        }
    };

    if (numbers.length <= 3 + numberNeighbors * 2) {
        displayNumbers = numbers;
    } else {
        if (selected <= 2 + numberNeighbors) {
            displayNumbers = displayNumbers
                .concat(
                    numbers.slice(0, selected + numberNeighbors).concat('...')
                )
                .concat(numbers.slice(-1));
        } else if (
            selected > 2 + numberNeighbors &&
            selected < end - numberNeighbors
        ) {
            displayNumbers = displayNumbers
                .concat([start, '...'])
                .concat(
                    numbers
                        .slice(
                            selected - numberNeighbors - 1,
                            selected + numberNeighbors
                        )
                        .concat('...')
                )
                .concat(numbers.slice(-1));
        } else {
            displayNumbers = displayNumbers
                .concat(numbers.slice(0, 1))
                .concat('...')
                .concat(numbers.slice(-numberNeighbors + (selected - end - 1)));
        }
    }
    return (
        <div className={cls.container}>
            {displayNumbers.map((item, index) => {
                {
                    return (
                        (item != '...' && (
                            <div
                                className={classNames(cls.item, {
                                    [cls.selectedItem]: item == selected,
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
    );
};

export default NumberRangeDisplay;
