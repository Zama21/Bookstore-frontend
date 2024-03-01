import { useField } from 'formik';
import React from 'react';
import cls from './FormField.module.css';
import classNames from 'classnames';

export const FormField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <label className={classNames(cls.container, props.className)}>
            <div className={cls.field}>
                <span className={cls.label}>{label}</span>
                <input className={cls.input} {...field} {...props} />
            </div>
            {meta.touched && meta.error ? <div className={cls.error}>{meta.error}</div> : null}
        </label>
    );
};
