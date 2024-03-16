import React, { useState } from 'react';
import stl from './SwitchingBoxEditPage.module.css';
import ChaptersEditPage from './ChaptersEditPage/ChaptersEditPage';

export default function SwitchingBoxEditPage({ description, title }) {
    const [SelectedSection, setSelectedSection] = useState('tableContents');
    let content;
    let activeClassForBtn = `${stl.SwitchBox} ${stl.active}`;
    const handleClick = (nameSelectedSection) => {
        setSelectedSection(nameSelectedSection);
    };

    switch (SelectedSection) {
        case 'tableContents':
            content = <ChaptersEditPage />;
            break;
        case 'bookInformation':
            content = 'bookInformation';
            break;
    }
    return (
        <div className={stl.wrapper}>
            <div className={`flxRow`}>
                <button
                    onClick={() => handleClick('tableContents')}
                    className={`${
                        SelectedSection == 'tableContents' ? activeClassForBtn : stl.SwitchBox
                    }`}
                >
                    Оглавление
                </button>
                <button
                    onClick={() => handleClick('bookInformation')}
                    className={`${
                        SelectedSection == 'bookInformation' ? activeClassForBtn : stl.SwitchBox
                    }`}
                >
                    Информация о книге
                </button>
            </div>
            <div className={stl.wrapper2}>{content}</div>
        </div>
    );
}
