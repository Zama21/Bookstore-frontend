import React, { useState } from 'react';
import cls from './FormCustomSelectOption.module.css';
import classNames from 'classnames';
import { useField } from 'formik';

export default function FormCustomSelectOption({
    options,
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
    errorClassName,
    ...props
}) {
    const [field, meta] = useField(props);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        defaultValue ?? 'Выберете значение'
    );

    const handleOptionClick = option => {
        setSelectedOption(option);
        field.onChange({ target: { value: option, name: props.name } });
        setIsOpen(false);
    };
    const clearSelection = () => {
        setSelectedOption(defaultValue ?? 'Выберете значение');
        field.onChange({ target: { value: '', name: props.name } });
    };

    return (
        <div
            className={classNames(cls.container, containerClassName)}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className={classNames(cls.label, labelClassName)}>
                {label}
            </span>
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
            {meta.touched && meta.error ? (
                <div className={classNames(cls.error, errorClassName)}>
                    {meta.error}
                </div>
            ) : null}
        </div>
    );
}
