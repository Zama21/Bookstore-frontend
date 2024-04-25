import { myBooksApi } from 'modules/home/api/myBooksApi.js';
import { BasePageLayout } from 'modules/home/ui/pages/BasePageLayout/BasePageLayout.jsx';
import { useState } from 'react';
import { Button } from 'shared/ui/components/Button/Button.jsx';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';
import { SearchInput } from 'shared/ui/components/SearchInput/SearchInput.jsx';

import { BooksListItem } from 'modules/books/ui/components/BooksListItem/BooksListItem.jsx';
import cls from './MyBooksPage.module.css';

export const MyBooksPage = () => {
    const { data: books, isLoading } = myBooksApi.useGetMyBooksQuery();
    const [filterText, setFilterText] = useState('');

    const filterBook = book => book.title.toLowerCase().includes(filterText.toLowerCase());
    const booksFiltered = books?.filter(filterBook) ?? [];

    return (
        <BasePageLayout title={'Мои книги'}>
            <Button linkTo='/book/create' style={{ margin: '10px 0' }}>
                &#65291; Добавить книгу
            </Button>
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
                            <p>Книг пока нет</p>
                        )}
                    </ul>
                )}
            </div>
        </BasePageLayout>
    );
};
