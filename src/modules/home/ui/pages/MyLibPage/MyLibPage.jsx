import { bookBasicApi } from 'modules/books/api/bookBasicApi.js';
import { BooksListItem } from 'modules/books/ui/components/BooksListItem/BooksListItem.jsx';
import { BasePageLayout } from 'modules/home/ui/pages/BasePageLayout/BasePageLayout.jsx';
import { useState } from 'react';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';
import { SearchInput } from 'shared/ui/components/SearchInput/SearchInput.jsx';
import cls from './MyLibPage.module.css';
import { Button } from 'shared/ui/components/Button/Button.jsx';
import { FormLink } from 'shared/ui/components/FormComponents/FormLink/FormLink.jsx';

export const MyLibPage = () => {
    const { data: books, isLoading } = bookBasicApi.useGetMyLibraryQuery();
    const [filterText, setFilterText] = useState('');

    const filterBook = book => book.title.toLowerCase().includes(filterText.toLowerCase());
    const booksFiltered = books?.filter(filterBook) ?? [];

    return (
        <BasePageLayout title={'Библиотека'}>
            <div>
                <SearchInput
                    value={filterText}
                    onChange={value => setFilterText(value)}
                    placeholder='искать по названию'
                />
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <ul className={cls.bookList}>
                        {books.length > 0 ? (
                            booksFiltered.map(book => (
                                <BooksListItem key={book.id} book={book} showEditBlock={true} />
                            ))
                        ) : (
                            <div>
                                <p>Книг в библиотеке пока нет!</p>
                                <Button linkTo={'/catalog'} className={cls.searchInCatalogBtn}>
                                    Искать в каталоге
                                </Button>
                                {/* <FormLink to={'/catalog'} text={'Искать в каталоге'} /> */}
                            </div>
                        )}
                    </ul>
                )}
            </div>
        </BasePageLayout>
    );
};
