import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

export const LoginPage = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().max(10, 'Must be 10 characters or more').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log('submit ', values);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label>
                        Email Address
                        <input type='email' {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </label>

                    <label>
                        Last Name
                        <input type='text' {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </label>

                    <button type='submit'>Войти</button>
                </form>
            )}
        </Formik>
    );
};
