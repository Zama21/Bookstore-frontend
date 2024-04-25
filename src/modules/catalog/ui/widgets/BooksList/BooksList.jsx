import { catalogApi } from 'modules/catalog/api/catalogApi.js';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDebonuce } from 'shared/hooks/useDebounce.js';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';
import Pagination from 'shared/ui/components/Pagination/Pagination.jsx';
import { BooksListItem } from '../../components/BooksListItem/BooksListItem.jsx';
import cls from './BooksList.module.css';

const DebounceTimeMs = 500;

export const BooksList = () => {
    const [selectedPage, setSelected] = useState(1);
    const handlePageSelect = pageIndex => setSelected(pageIndex);

    const filters = useSelector(state => state.catalog.filters);
    const debouncedFilters = useDebonuce(filters, DebounceTimeMs, JSON.stringify(filters));

    const [fetchPagesQuery, { isLoading, isUninitialized, data }] = catalogApi.useLazySearchQuery();

    useEffect(() => {
        setSelected(1);
        console.log('page reset');
    }, [JSON.stringify(debouncedFilters)]);

    useEffect(() => {
        console.log('refetch');
        fetchPagesQuery({ filters, page: selectedPage });
    }, [JSON.stringify(debouncedFilters), selectedPage]);

    return (
        <div className={cls.booksWrapper}>
            {isLoading || isUninitialized ? (
                <LoadingSpinner />
            ) : (
                <>
                    <ul className={cls.booksList}>
                        {data.books.map(book => (
                            <BooksListItem key={book.id} book={book} />
                        ))}
                    </ul>
                    <Pagination
                        className={cls.pagination}
                        onSelect={handlePageSelect}
                        start={1}
                        end={data.pagesCount}
                        selected={selectedPage}
                    />
                </>
            )}
        </div>
    );
};
