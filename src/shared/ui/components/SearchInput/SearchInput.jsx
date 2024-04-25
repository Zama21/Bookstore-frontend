import React from 'react';
import cls from './SearchInput.module.css';
import searchSvg from 'shared/Img/search.svg';
import classNames from 'classnames';

export const SearchInput = ({ value, onChange, className, ...inputProps }) => {
    return (
        <div className={classNames(cls.searchContainer, className)}>
            <img className={cls.searchSvg} src={searchSvg} alt='search' />
            <input
                className={cls.searchInput}
                value={value}
                onChange={e => onChange(e.target.value)}
                type='text'
                {...inputProps}
            />
        </div>
    );
};
