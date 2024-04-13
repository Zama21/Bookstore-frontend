import React from 'react';
import { BooksCategory } from '../../components/BooksCategory/BooksCategory.jsx';
import { bookCategoriesApi } from 'modules/home/api/bookCategoriesApi.js';

export const CategoryRelevant = () => {
    const { data: relevantBooks, isLoading } = bookCategoriesApi.useGetRelevantQuery();
    return <BooksCategory isLoading={isLoading} books={relevantBooks ?? []} title={'Релевантные'} />;
};
