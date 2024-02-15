import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';
import { Form } from '../../../../../shared/ui/components/FormComponents/Form/Form.jsx';
import { FormButton } from '../../../../../shared/ui/components/FormComponents/FormButton/FormButton.jsx';
import { FormField } from '../../../../../shared/ui/components/FormComponents/FormField/FormField.jsx';
import { Link } from 'react-router-dom';
import { FormLink } from '../../../../../shared/ui/components/FormComponents/FormLink/FormLink.jsx';
import { useDispatch } from 'react-redux';
import { thunkLogin } from '../../../domain/thunks/login.js';

export const LoginPage = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Некорректный адрес email').required('Обязательное поле'),
                password: Yup.string()
                    .max(10, 'Пароль должен быть не короче 10 символов')
                    .required('Обязательное поле'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log('submit ', values);
                dispatch(
                    thunkLogin({
                        email: values.email,
                        password: values.password,
                    })
                );
            }}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit}>
                    <FormField
                        name='email'
                        type='email'
                        label={'Email'}
                        placeholder='example@mail.ru'
                        autoComplete='username'
                    />
                    <FormField
                        name='password'
                        type='password'
                        label={'Пароль'}
                        placeholder='Пароль..'
                        autoComplete='password'
                    />
                    <FormButton type='submit'>Войти</FormButton>
                    <FormLink to={'/auth/reg'} text={'Нет аккаунта? Зарегистрируйтесь!'} />
                </Form>
            )}
        </Formik>
    );
};
