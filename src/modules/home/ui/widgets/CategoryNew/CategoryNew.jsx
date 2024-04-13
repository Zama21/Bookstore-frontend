import React from 'react';
import { BooksCategory } from '../../components/BooksCategory/BooksCategory.jsx';
import { bookCategoriesApi } from 'modules/home/api/bookCategoriesApi.js';

export const CategoryNew = () => {
    const { data: newBooks, isLoading } = bookCategoriesApi.useGetNewQuery();
    return <BooksCategory isLoading={isLoading} books={newBooks ?? []} title={'Новинки'} />;
};
