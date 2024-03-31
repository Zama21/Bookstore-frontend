import React, { useState } from 'react';
import stl from './BookInformationEditForm.module.css';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'shared/ui/components/FormComponents/Form/Form';
import { FormField } from 'shared/ui/components/FormComponents/FormField/FormField';
import { FormButton } from 'shared/ui/components/FormComponents/FormButton/FormButton';
import defaultCover from '../../../../../../../../shared/Img/defaultCover.jpg';
import { FormFieldTextArea } from 'shared/ui/components/FormComponents/FormFieldTextArea/FormFieldTextArea';
import FormCustomSelectOption from 'shared/ui/components/FormComponents/FormCustomSelectOption/FormCustomSelectOption';

const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
];
const bookStatusOptions = ['Завершена', 'В процессе', 'Заморожена', 'Скрыта', 'Удалить'];
const ageRestrictionOptions = ['3+', '6+', '12+', '16+', '18+', '21+'];
const initialFormValues = {
    bookCover: defaultCover,
    bookTitle: '',
    cycleName: '',
    genre1: '',
    genre2: '',
    genre3: '',
    annotation: '',
    bookStatus: '',
    ageRestriction: '18+',
    cost: 0,
    freeChaptersCount: 0,
};

const getValidationSchema = shouldIncludeField => {
    const validationObject = {
        bookCover: Yup.mixed().required('Необходимо загрузить обложку книги'),
        bookTitle: Yup.string()
            .min(4, 'Название должно быть не короче 4 символов')
            .required('Обязательное поле'),
        cycleName: Yup.string(),
        genre1: Yup.string().required('Обязательное поле'),
        genre2: Yup.string(),
        genre3: Yup.string(),
        annotation: Yup.string().min(50, 'Не меньше 50 символов').required('Обязательное поле'),
        bookStatus: Yup.string().required('Обязательное поле'),
        ageRestriction: Yup.string(),
        cost: Yup.number().integer().min(0, 'Стоимость должна быть положительным числом'),
        freeChaptersCount: Yup.number().integer().min(0, 'Количество должно быть положительным числом'),
    };
    for (const key in validationObject) {
        if (!shouldIncludeField(key)) {
            delete validationObject[key];
        }
    }
    return Yup.object(validationObject);
};

export default function BookInformationEditForm(props) {
    const fieldsIncluded = props.fieldsIncluded ?? {};
    const shouldIncludeField = field =>
        fieldsIncluded[field] === true || fieldsIncluded[field] === undefined;

    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={getValidationSchema(shouldIncludeField)}
            onSubmit={(values, { setSubmitting }) => props.onSubmit?.(values)}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit} className={stl.form}>
                    <div className={stl.containerMetaInformation}>
                        {shouldIncludeField('bookCover') && (
                            <div className={stl.wrapperImg}>
                                <img
                                    src={
                                        formik.values.bookCover instanceof File
                                            ? URL.createObjectURL(formik.values.bookCover)
                                            : formik.values.bookCover
                                    }
                                    alt='Обложка книги'
                                    className={stl.bookCover}
                                />

                                <Field name='bookCover'>
                                    {({ field, form }) => (
                                        <>
                                            <input
                                                name='bookCover'
                                                id='file-upload'
                                                type='file'
                                                onChange={event => {
                                                    form.setFieldValue(
                                                        'bookCover',
                                                        event.currentTarget.files[0]
                                                    );
                                                    // setSelectedImage(
                                                    //     URL.createObjectURL(
                                                    //         event.currentTarget.files[0]
                                                    //     )
                                                    // );
                                                }}
                                            />
                                            <label className={stl.fileInputLabel} htmlFor='file-upload'>
                                                Загрузить
                                            </label>
                                            {form.errors.bookCover && form.touched.bookCover && (
                                                <div>{form.errors.bookCover}</div>
                                            )}
                                        </>
                                    )}
                                </Field>
                            </div>
                        )}

                        {shouldIncludeField('bookTitle') && (
                            <FormField
                                name='bookTitle'
                                type='text'
                                label={'Название книги'}
                                containerClassName={stl.containerInlineClassName}
                                fieldClassName={stl.fieldClassName}
                            />
                        )}

                        {shouldIncludeField('cycleName') && (
                            <FormCustomSelectOption
                                options={options}
                                name='cycleName'
                                label='Название цикла'
                                containerClassName={stl.containerInlineClassName}
                                IsClearSelection='true'
                                clearSelectionText='Галя, у нас отмена!'
                            />
                        )}

                        {shouldIncludeField('genres') && (
                            <>
                                <FormCustomSelectOption
                                    options={options}
                                    name='genre1'
                                    label={'Жанр 1'}
                                    containerClassName={stl.containerInlineClassName}
                                    IsClearSelection='true'
                                    clearSelectionText='Галя, у нас отмена!'
                                />
                                {formik.values.genre1 != '' && (
                                    <FormCustomSelectOption
                                        options={options}
                                        name='genre2'
                                        label={'Жанр 2'}
                                        containerClassName={stl.containerInlineClassName}
                                        IsClearSelection='true'
                                        clearSelectionText='Галя, у нас отмена!'
                                    />
                                )}
                                {formik.values.genre1 != '' && formik.values.genre2 != '' && (
                                    <FormCustomSelectOption
                                        options={options}
                                        name='genre3'
                                        label={'Жанр 3'}
                                        containerClassName={stl.containerInlineClassName}
                                        IsClearSelection='true'
                                        clearSelectionText='Галя, у нас отмена!'
                                    />
                                )}
                            </>
                        )}

                        {shouldIncludeField('bookStatus') && (
                            <FormCustomSelectOption
                                options={bookStatusOptions}
                                name='bookStatus'
                                label={'Статус книги'}
                                containerClassName={stl.containerInlineClassName}
                            />
                        )}

                        {shouldIncludeField('ageRestriction') && (
                            <FormCustomSelectOption
                                options={ageRestrictionOptions}
                                name='ageRestriction'
                                label={'Возрастной ценз'}
                                containerClassName={stl.containerInlineClassName}
                            />
                        )}

                        {shouldIncludeField('cost') && (
                            <>
                                <FormField
                                    name='cost'
                                    type='number'
                                    label={'Стоимость'}
                                    containerClassName={stl.containerInlineClassName}
                                    fieldClassName={stl.fieldClassName}
                                />
                                {formik.values.cost > 0 && (
                                    <FormField
                                        name='freeChaptersCount'
                                        type='number'
                                        label={'Количество бесплатных глав'}
                                        containerClassName={stl.containerInlineClassName}
                                        fieldClassName={stl.fieldClassName}
                                    />
                                )}
                            </>
                        )}
                    </div>

                    {shouldIncludeField('annotation') && (
                        <FormFieldTextArea
                            name='annotation'
                            type='text'
                            label={'Аннотация'}
                            containerClassName={stl.containerClassName}
                        />
                    )}

                    <FormButton type='submit'>{props.submitText ?? 'Сохранить'}</FormButton>
                </Form>
            )}
        </Formik>
    );
}
