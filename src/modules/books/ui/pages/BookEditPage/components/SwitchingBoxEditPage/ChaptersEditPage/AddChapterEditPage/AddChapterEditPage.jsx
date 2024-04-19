import React, { useState } from 'react';
import stl from './AddChapterEditPage.module.css';

const MAX_LENGTH = 30;

export default function AddChapterEditPage({
    onAddChapter,
    setIsErrorValidateTitle,
}) {
    const [title, setTitle] = useState('');

    const handleTitleChange = e => {
        setIsErrorValidateTitle(false);
        if (!(e.target.value.length <= MAX_LENGTH)) return;
        setTitle(e.target.value);
    };

    const handleAddChapter = () => {
        onAddChapter(title);
        setTitle('');
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleAddChapter();
        }
    };

    return (
        <div className={stl.wrapperAddTitleBtn}>
            <input
                className={stl.addTitleInput}
                type='text'
                value={title}
                onChange={handleTitleChange}
                onKeyDown={handleKeyPress}
                placeholder='Введите название главы'
            />
            <button className={stl.addTitleBtn} onClick={handleAddChapter}>
                {/* &#10003; */}+
            </button>
        </div>
    );
}
