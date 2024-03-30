import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useField } from 'formik';
import classNames from 'classnames';
import cls from './FormCKEditor.module.css';

function FormCKEditor({ errorClassName, ...props }) {
    const [field, meta] = useField(props);
    const [editorData, setEditorData] = useState('');

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);
        field.onChange({ target: { value: data, name: props.name } });
    };

    return (
        <div className={cls.wrapperEditor}>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    toolbar: [
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'link',
                        'bulletedList',
                        'numberedList',
                        'blockQuote',
                        'insertTable',
                        'undo',
                        'redo',
                    ],
                }}
                onChange={handleEditorChange}
            />
            {meta.touched && meta.error ? (
                <div className={classNames(cls.error, errorClassName)}>
                    {meta.error}
                </div>
            ) : null}
        </div>
    );
}

export default FormCKEditor;
