import React, { useState } from 'react';
import stl from './SwitchingBox.module.css';
import Annotation from './Annotation/Annotation';

export default function SwitchingBox({ description, title }) {
    const [SelectedSection, setSelectedSection] = useState('annotation');
    let content;
    let activeClassForBtn = `${stl.SwitchBox} ${stl.active}`;
    const handleClick = nameSelectedSection => {
        setSelectedSection(nameSelectedSection);
    };

    switch (SelectedSection) {
        case 'annotation':
            content = <Annotation description={description} title={title}></Annotation>;
            break;
        case 'rewards':
            content = 'Награды';
            break;
    }
    return (
        <div className={stl.wrapper}>
            <div className={`flxRow`}>
                <button
                    onClick={() => handleClick('annotation')}
                    className={`${SelectedSection == 'annotation' ? activeClassForBtn : stl.SwitchBox}`}
                >
                    Аннотация
                </button>
                <button
                    onClick={() => handleClick('rewards')}
                    className={`${SelectedSection == 'rewards' ? activeClassForBtn : stl.SwitchBox}`}
                >
                    Награды
                </button>
            </div>
            <div className={stl.wrapper2}>{content}</div>
        </div>
    );
}
