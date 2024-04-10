import React, { useEffect, useState } from 'react';
import cls from './PartEditPage.module.css';
import FormCKEditor from 'shared/ui/components/FormComponents/FormCKEditor/FormCKEditor';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormButton } from 'shared/ui/components/FormComponents/FormButton/FormButton';
import { Form } from 'shared/ui/components/FormComponents/Form/Form';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom/dist';
import { useBookData } from 'modules/books/domain/hooks/useBookData';
import { FormField } from 'shared/ui/components/FormComponents/FormField/FormField';
import PartEditPagination from './components/PartEditPagination/PartEditPagination';
import { usePagination } from 'modules/books/domain/hooks/usePagination';
import { BookEditPartApi } from 'modules/auth/api/BookEditPartApi';
import { item } from './components/PartEditPagination/PartEditPagination.module.css';

export default function PartEditPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const { bookId } = useParams();
    const chapterNumber = +searchParams.get('chapterNumber');
    const pageNumber = +searchParams.get('pageNumber');

    const { data: dataBook } = useBookData(bookId);
    const { data, setData, updatePageIndexValue, deletePageByIndex } =
        usePagination({
            bookId,
            onError403: () => {},
            onErrorElse: () => {},
        });

    const handleSelectItem = newPageNumber => {
        navigate(
            `/book/${bookId}/partEdit?chapterNumber=${chapterNumber}&pageNumber=${newPageNumber}`
        );
    };

    function deletePage() {
        deletePageByIndex(pageNumber);
    }

    function savePagesToDatabase() {
        data.pages.forEach(item => {
            BookEditPartApi.updatePage(item.id, item.content).catch(err =>
                console.log(err)
            );
        });
    }

    function handleContentPageChange(content) {
        setData(prev => {
            return {
                ...prev,
                pages: prev.pages.map((item, index) => {
                    if (item.index == pageNumber) {
                        item.content = content;
                    }
                    return item;
                }),
            };
        });
    }

    const paginationObj = {
        start: 1,
        end: data.lastPageIndex - data.firstPageIndex + 1,
        selected: pageNumber,
        chapterNumber,
        onSelect: handleSelectItem,
        firstPageIndex: data.firstPageIndex,
        pages: data.pages,
        partId: chapterNumber,
        bookId,
        updatePageIndexValue,
        deletePage,
    };

    function getContentByIndex(index) {
        for (let item of data.pages) {
            if (item.index === index) {
                return item.content;
            }
        }
        return null;
    }

    return (
        <div className='wrapperPage'>
            {data?.firstPageIndex && dataBook?.parts && (
                <Formik
                    initialValues={{
                        partTitle:
                            dataBook?.parts?.find(
                                part => part.id == chapterNumber
                            )?.title || '',
                    }}
                    validationSchema={Yup.object({
                        partTitle: Yup.string()
                            .min(4, 'Название должно быть не короче 4 символов')
                            .required('Обязательное поле'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('OnSubmit');

                        BookEditPartApi.updateTittlePart(
                            chapterNumber,
                            values.partTitle
                        );
                        savePagesToDatabase();
                    }}
                >
                    {formik => (
                        <Form
                            onSubmit={formik.handleSubmit}
                            className={cls.formWrapper}
                        >
                            <h2>{dataBook?.title}</h2>
                            <FormField
                                name='partTitle'
                                type='text'
                                label={'Название главы'}
                            />
                            <PartEditPagination {...paginationObj} />
                            <FormCKEditor
                                handleContentPageChange={
                                    handleContentPageChange
                                }
                                selectedContent={getContentByIndex(pageNumber)}
                            />
                            <FormButton type='submit'>Сохранить</FormButton>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
}
