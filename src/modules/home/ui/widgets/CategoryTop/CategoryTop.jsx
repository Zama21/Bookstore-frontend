import React from 'react';
import { BooksCategory } from '../../components/BooksCategory/BooksCategory.jsx';
import { bookCategoriesApi } from 'modules/home/api/bookCategoriesApi.js';

export const CategoryTop = () => {
    const { data: topBooks, isLoading } = bookCategoriesApi.useGetTopQuery();
    return <BooksCategory isLoading={isLoading} books={topBooks ?? []} title={'Топ книг'} />;
};
