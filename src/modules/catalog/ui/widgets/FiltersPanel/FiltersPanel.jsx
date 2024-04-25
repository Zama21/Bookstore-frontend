import React from 'react';
import cls from './FiltersPanel.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { catalogActions } from 'modules/catalog/store/catalogSlice.js';
import { useLocalModal } from 'modules/modals/domain/hooks/useLocalModal.js';
import { FiltersModal } from '../FiltersModal/FiltersModal.jsx';
import { SearchInput } from 'shared/ui/components/SearchInput/SearchInput.jsx';

export const FiltersPanel = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.catalog.filters);
    const filtersModal = useLocalModal();

    return (
        <div className={cls.filtersPanel}>
            <SearchInput
                value={filters.title ?? ''}
                onChange={value => dispatch(catalogActions.setFilters({ title: value }))}
                placeholder='поиск по названию'
            />

            <div className={cls.otherFilters} onClick={filtersModal.open}>
                <p>Жанры: {filters.genres?.join(' ') ?? 'любые'}</p>
                <p>Статус: {filters.bookStatus !== undefined ? filters.bookStatus : 'любой'}</p>
                <p>
                    Цена:{' '}
                    {filters.price?.min || filters.price?.max
                        ? `${filters.price?.min ? 'от ' + filters.price?.min : ''} ${
                              filters.price?.max ? 'до ' + filters.price?.max : ''
                          } руб`
                        : 'любая'}
                </p>
            </div>

            {filtersModal.isOpen && <FiltersModal {...filtersModal.modalProps} />}
        </div>
    );
};
