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

export default function PartEditPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const { bookId } = useParams();
    const chapterNumber = +searchParams.get('chapterNumber');
    const pageNumber = +searchParams.get('pageNumber');

    const { data: dataBook } = useBookData(bookId);
    const { data, updatePageIndexValue, deletePageByIndex } = usePagination({
        bookId,
    });

    const [contentData, setContentData] = useState({});

    const updateContent = (id, newContent) => {
        if (!id) return;

        setContentData(prevData => ({
            ...prevData,
            [id]: newContent,
        }));
    };

    useEffect(() => {
        updateContent(...gettingContent());
    }, [data, pageNumber]);

    const handleSelectItem = newPageNumber => {
        navigate(
            `/book/${bookId}/partEdit?chapterNumber=${chapterNumber}&pageNumber=${newPageNumber}`
        );
    };

    const gettingContent = () => {
        const page = data.pages.find((page, index) => {
            return page.index === pageNumber;
        });
        return [page?.id, page?.content];
    };
    function getIdByIndex(data, index) {
        const item = data?.find(item => item.index === index);
        if (item) {
            return item.id;
        }
        return null;
    }
    function deletePage(pageId) {
        deletePageByIndex(pageNumber);

        setContentData(prev => {
            const newContentData = { ...prev };
            delete newContentData[pageId];
            return newContentData;
        });
    }

    function savePagesToDatabase() {
        Object.keys(contentData).forEach(key => {
            BookEditPartApi.updatePage(key, contentData[key]).catch(err =>
                console.log(err)
            );
        });
    }

    function handleContentPageChange(content) {
        const pageId = getIdByIndex(data.pages, pageNumber);

        setContentData(prev => {
            return {
                ...prev,
                [pageId]: content,
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
                                selectedContent={
                                    contentData?.[
                                        getIdByIndex(data.pages, pageNumber)
                                    ]
                                }
                            />
                            <FormButton type='submit'>Сохранить</FormButton>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
}
