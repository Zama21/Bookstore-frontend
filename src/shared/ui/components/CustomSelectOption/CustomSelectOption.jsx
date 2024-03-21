import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import cls from './CustomSelectOption.module.css';

export default function CustomSelectOption({
    options,
    onChange,
    label,
    defaultValue,
    IsClearSelection,
    clearSelectionText,
    clearOptionClassName,
    containerClassName,
    labelClassName,
    HeaderClassName,
    toggleArrowClassName,
    optionsListClassName,
    optionClassName,

    ...props
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        defaultValue ?? 'Выберете значение'
    );
    useEffect(() => {
        setSelectedOption(defaultValue);
    }, [defaultValue]);

    const handleOptionClick = option => {
        setSelectedOption(option);
        onChange(option);

        setIsOpen(false);
    };
    const clearSelection = () => {
        setSelectedOption(defaultValue ?? 'Выберете значение');
        onChange('');
    };

    return (
        <div
            className={classNames(cls.container, containerClassName)}
            onClick={() => setIsOpen(!isOpen)}
        >
            {label && (
                <span className={classNames(cls.label, labelClassName)}>
                    {label}
                </span>
            )}
            <button
                className={cls.header}
                onClick={e => e.preventDefault()}
                onBlur={() => {
                    setTimeout(() => {
                        setIsOpen(false);
                    }, 100);
                }}
            >
                {selectedOption}
                <span
                    className={classNames(cls.toggleArrow, {
                        [cls.active]: isOpen,
                    })}
                >
                    ▼
                </span>
            </button>
            {isOpen && (
                <ul className={cls.optionsList}>
                    {IsClearSelection && (
                        <li
                            className={classNames(
                                cls.option,
                                cls.clearSelectionOption,
                                clearOptionClassName
                            )}
                            onClick={() => clearSelection()}
                        >
                            {clearSelectionText ?? 'Отменить выбор'}
                        </li>
                    )}
                    {options.map((option, index) => (
                        <li
                            className={cls.option}
                            key={index}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
