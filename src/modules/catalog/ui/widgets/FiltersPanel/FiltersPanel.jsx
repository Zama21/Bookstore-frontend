import { BookStatusTextMap } from 'modules/books/lib/bookStatusMap.js';
import { catalogActions } from 'modules/catalog/store/catalogSlice.js';
import { useLocalModal } from 'modules/modals/domain/hooks/useLocalModal.js';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInput } from 'shared/ui/components/SearchInput/SearchInput.jsx';
import { FiltersModal } from '../FiltersModal/FiltersModal.jsx';
import cls from './FiltersPanel.module.css';

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
                <p>
                    Жанры:{' '}
                    <span className={cls.otherFiltersValue}>{filters.genres?.join(' ') ?? 'любые'}</span>
                </p>
                <p>
                    Статус:{' '}
                    <span className={cls.otherFiltersValue}>
                        {filters.bookStatus !== undefined
                            ? BookStatusTextMap[filters.bookStatus]
                            : 'любой'}
                    </span>
                </p>
                <p>
                    Цена:{' '}
                    <span className={cls.otherFiltersValue}>
                        {filters.price?.min || filters.price?.max
                            ? `${filters.price?.min ? 'от ' + filters.price?.min : ''} ${
                                  filters.price?.max ? 'до ' + filters.price?.max : ''
                              } руб`
                            : 'любая'}
                    </span>
                </p>
            </div>

            {filtersModal.isOpen && <FiltersModal {...filtersModal.modalProps} />}
        </div>
    );
};
