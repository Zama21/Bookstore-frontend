import React from 'react';
import stl from './ChapterItemEditPage.module.css';
import { Link } from 'react-router-dom';

export default function ChapterItemEditPage({ title }) {
    return (
        <div className={stl.wrapper}>
            <div className={stl.wrapperBookPartsName}>
                <Link to={'/'}>{title}</Link>
                <span
                    className={`${stl.bookPartsStatus} ${stl.bookPartsStatusSuccess}`}
                >
                    Опубликовано
                </span>
            </div>
            <div className={stl.wrapperBookPartsAttr}>
                <div className={stl.bookPartsAttrCost}>$</div>
                <div className={stl.bookPartsAttrDate}>
                    13 Дек 2022 — 13 Июн 2024
                </div>
            </div>
            <div className={stl.bookPartsMenu}>
                <button>&hellip;</button>
                <div className={stl.bookPartsMenuList}>
                    <a href='/ru/reader/kniga-b420913?c=4660853'>
                        Открыть в читалке
                    </a>
                    <a href='/account/chapter/edit?id=4660853'>
                        Редактировать главу
                    </a>
                    <a
                        className={stl.danger}
                        href='/account/chapter/delete?id=4660853'
                    >
                        Удалить
                    </a>
                </div>
            </div>
        </div>
    );
}
