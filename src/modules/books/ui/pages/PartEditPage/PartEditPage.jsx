import React from 'react';
import cls from './PartEditPage.module.css';
import FormCKEditor from 'shared/ui/components/FormComponents/FormCKEditor/FormCKEditor';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormButton } from 'shared/ui/components/FormComponents/FormButton/FormButton';
import { Form } from 'shared/ui/components/FormComponents/Form/Form';
import { useNavigate, useParams } from 'react-router-dom/dist';
import { useBookData } from 'modules/books/domain/hooks/useBookData';
import { FormField } from 'shared/ui/components/FormComponents/FormField/FormField';

export default function PartEditPage() {
    const navigate = useNavigate();
    const { bookId, partId } = useParams();
    const { data: dataBook } = useBookData(bookId);
    console.log(dataBook, partId);
    return (
        <div className='wrapperPage'>
            <Formik
                initialValues={{
                    content: '',
                    partTitle: '',
                }}
                validationSchema={Yup.object({
                    content: Yup.string().required('Обязательное поле'),
                    partTitle: Yup.string()
                        .min(4, 'Название должно быть не короче 4 символов')
                        .required('Обязательное поле'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('OnSubmit');
                    console.log(values);
                }}
            >
                {formik => (
                    <Form
                        onSubmit={formik.handleSubmit}
                        className={cls.formWrapper}
                    >
                        <h2>
                            {
                                dataBook?.parts?.[
                                    +partId - dataBook?.parts?.[0]?.id
                                ]?.title
                            }
                        </h2>
                        <FormField
                            name='partTitle'
                            type='text'
                            label={'Название главы'}
                        />
                        <FormCKEditor name='content' />
                        <FormButton type='submit'>Сохранить</FormButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
