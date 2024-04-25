import React from 'react';
import cls from './PriceFilter.module.css';

export const PriceFilterNoValue = 'none';

export const PriceFilter = ({ value: [min, max], onChange }) => {
    return (
        <div className={cls.priceFilter}>
            <div className={cls.priceFilterPart}>
                <span>От</span>
                <input
                    type='number'
                    value={min.toString()}
                    onChange={e => {
                        onChange({ min: e.target.value ? Number(e.target.value) : PriceFilterNoValue });
                    }}
                />
            </div>
            <div className={cls.priceFilterPart}>
                <span>До</span>
                <input
                    type='number'
                    value={max.toString()}
                    onChange={e => {
                        onChange({ max: e.target.value ? Number(e.target.value) : PriceFilterNoValue });
                    }}
                />
            </div>
        </div>
    );
};
