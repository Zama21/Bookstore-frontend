import classNames from 'classnames';
import { Field, Formik } from 'formik';
import { BookCoverConfig, validateBookCover } from 'modules/books/lib/validateBookCover.js';
import { useAlertModal } from 'modules/modals/domain/hooks/modal-types/useAlertModal.js';
import defaultCover from 'shared/Img/defaultCover.jpg';
import { sharedApi } from 'shared/api/sharedApi.js';
import { Form } from 'shared/ui/components/FormComponents/Form/Form';
import { FormButton } from 'shared/ui/components/FormComponents/FormButton/FormButton';
import FormCustomSelectOption from 'shared/ui/components/FormComponents/FormCustomSelectOption/FormCustomSelectOption';
import { FormField } from 'shared/ui/components/FormComponents/FormField/FormField';
import { FormFieldTextArea } from 'shared/ui/components/FormComponents/FormFieldTextArea/FormFieldTextArea';
import * as Yup from 'yup';
import { bookStatusOptions } from '../config.js';
import stl from './BookInformationEditForm.module.css';

const ageRestrictionOptions = ['3+', '6+', '12+', '16+', '18+', '21+'];
const defaultInitialFormValues = {
    bookCover: null,
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
        bookCover: Yup.mixed().nullable(),
        bookTitle: Yup.string()
            .min(4, 'Название должно быть не короче 4 символов')
            .required('Обязательное поле'),
        cycleName: Yup.string(),
        genre1: Yup.string().required('Обязательное поле'),
        genre2: Yup.string(),
        genre3: Yup.string(),
        annotation: Yup.string().min(50, 'Не меньше 50 символов').required('Обязательное поле'),
        bookStatus: Yup.string().required('Обязательное поле'),
        ageRestriction: Yup.string().required('Обязательное поле'),
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

    const alertModal = useAlertModal();

    const { data: genres } = sharedApi.useGetGenresQuery();
    const genresNames = genres?.map(g => g.name) ?? [];

    const { data: bookSeries } = sharedApi.useGetMySeriesQuery();
    const seriesNames = bookSeries?.map(s => s.name) ?? [];

    return (
        <Formik
            initialValues={{
                ...defaultInitialFormValues,
                ...(props.initialFormValues ?? {}),
            }}
            validationSchema={getValidationSchema(shouldIncludeField)}
            onSubmit={(values, { setSubmitting, resetForm, setTouched }) => {
                props.onSubmit?.(values);
                setTouched({});
            }}
        >
            {formik => {
                return (
                    <Form onSubmit={formik.handleSubmit} className={stl.form}>
                        <div className={stl.containerMetaInformation}>
                            {shouldIncludeField('bookCover') && (
                                <div className={stl.wrapperImg}>
                                    <p className={stl.wrapperDescr}>
                                        Обложка {BookCoverConfig.width} &times; {BookCoverConfig.height}
                                    </p>
                                    <img
                                        src={
                                            formik.values.bookCover instanceof File
                                                ? URL.createObjectURL(formik.values.bookCover)
                                                : formik.values.bookCover ?? defaultCover
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
                                                    onChange={async event => {
                                                        const img = event.currentTarget.files[0];
                                                        if (await validateBookCover(img)) {
                                                            form.setFieldValue('bookCover', img);
                                                            formik.setTouched({ bookCover: true });
                                                        } else {
                                                            alertModal.open({
                                                                text: 'Формат файла некорректный',
                                                            });
                                                        }
                                                    }}
                                                />
                                                <label
                                                    className={stl.fileInputLabel}
                                                    htmlFor='file-upload'
                                                >
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
                                    options={seriesNames}
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
                                        options={genresNames}
                                        name='genre1'
                                        label={'Жанр 1'}
                                        containerClassName={stl.containerInlineClassName}
                                        IsClearSelection='true'
                                        clearSelectionText='Галя, у нас отмена!'
                                    />
                                    {formik.values.genre1 != '' && (
                                        <FormCustomSelectOption
                                            options={genresNames.filter(
                                                genre => genre !== formik.values.genre1
                                            )}
                                            name='genre2'
                                            label={'Жанр 2'}
                                            containerClassName={stl.containerInlineClassName}
                                            IsClearSelection='true'
                                            clearSelectionText='Галя, у нас отмена!'
                                        />
                                    )}
                                    {formik.values.genre1 != '' && formik.values.genre2 != '' && (
                                        <FormCustomSelectOption
                                            options={genresNames.filter(
                                                genre =>
                                                    genre !== formik.values.genre1 &&
                                                    genre !== formik.values.genre2
                                            )}
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

                        <FormButton
                            className={classNames({
                                // [stl.submitActive]: formik.isValid,
                                [stl.submitInactive]:
                                    !formik.isValid || Object.keys(formik.touched).length === 0,
                            })}
                            type='submit'
                        >
                            {props.submitText ?? 'Сохранить'}
                        </FormButton>
                    </Form>
                );
            }}
        </Formik>
    );
}
