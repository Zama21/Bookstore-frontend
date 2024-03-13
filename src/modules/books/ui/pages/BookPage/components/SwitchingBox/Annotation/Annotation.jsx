import React from 'react';
import stl from './Annotation.module.css';

export default function Annotation({ description, title }) {
    return (
        <>
            <div className={stl.title}>{`Аннотация к книге "${title}"`}</div>
            <div>{description}</div>
        </>
    );
}
