import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';
import { Form } from '../../../../../shared/ui/components/FormComponents/Form/Form.jsx';
import { FormButton } from '../../../../../shared/ui/components/FormComponents/FormButton/FormButton.jsx';
import { FormField } from '../../../../../shared/ui/components/FormComponents/FormField/FormField.jsx';
import { Link } from 'react-router-dom';
import { FormLink } from '../../../../../shared/ui/components/FormComponents/FormLink/FormLink.jsx';

export const RegPage = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '', passwordRepeat: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .min(5, 'Имя должно быть не короче 5 символов')
                    .required('Обязательное поле'),
                lastName: Yup.string()
                    .min(5, 'Фамилия должна быть не короче 5 символов')
                    .required('Обязательное поле'),
                email: Yup.string().email('Некорректный адрес email').required('Обязательное поле'),
                password: Yup.string()
                    .min(10, 'Пароль должен быть не короче 10 символов')
                    .required('Обязательное поле'),
                passwordRepeat: Yup.string()
                    .min(10, 'Пароль должен быть не короче 10 символов')
                    .required('Обязательное поле'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log('submit ', values);
                if (values.password === values.passwordRepeat) {
                } else {
                    console.error('Пароли не совпали');
                }
            }}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit}>
                    <FormField name='firstName' type='text' label={'Имя'} placeholder='Имя' />
                    <FormField name='lastName' type='text' label={'Фамилия'} placeholder='Фамилия' />
                    <FormField name='email' type='email' label={'Email'} placeholder='example@mail.ru' />
                    <FormField name='password' type='password' label={'Пароль'} placeholder='Пароль..' />
                    <FormField
                        name='passwordRepeat'
                        type='password'
                        label={'Повторите пароль'}
                        placeholder='Пароль..'
                    />
                    <FormButton type='submit'>Зарегистрироваться</FormButton>
                    <FormLink to={'/auth/login'} text={'Уже есть аккаунт? Войдите!'} />
                </Form>
            )}
        </Formik>
    );
};
