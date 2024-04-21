import React, { useRef, useState } from 'react';
import cls from './BookSlider.module.css';
import { useNavigate } from 'react-router-dom';
import { SliderControl } from '../SliderControl/SliderControl.jsx';
import defaultCover from 'shared/Img/defaultCover.jpg';
import classNames from 'classnames';

const BookItemWidth = 166;

export const BookSlider = ({ books, sliceLength }) => {
    const [position, setPosition] = useState(0);
    const navigate = useNavigate();

    const slideRight = () => {
        setPosition(pos => {
            if (pos + sliceLength < books.length) {
                return pos + sliceLength;
            } else {
                return 0;
            }
        });
    };

    const slideLeft = () => {
        setPosition(pos => {
            if (pos - sliceLength >= 0) {
                return pos - sliceLength;
            } else {
                return books.length - sliceLength;
            }
        });
    };

    const handleBookClick = bookId => navigate(`/book/${bookId}`);

    return (
        <div className={cls.slider}>
            <SliderControl direction={'left'} onClick={slideLeft} />
            <div>
                <div
                    className={cls.booksContainer}
                    style={{
                        width: `${sliceLength * BookItemWidth}px`,
                    }}
                >
                    {books.map(book => (
                        <div
                            className={cls.bookContainer}
                            key={book.id}
                            onClick={() => handleBookClick(book.id)}
                            style={{
                                transform: `translateX(${-position * BookItemWidth}px)`,
                                width: `${BookItemWidth}px`,
                            }}
                        >
                            <img className={cls.bookCover} src={book.coverSrc ?? defaultCover} />
                            <p className={cls.bookTitle}>{book.title}</p>
                        </div>
                    ))}
                </div>

                <div className={cls.sliderIndicatorsContainer}>
                    {new Array(Math.floor(books.length / sliceLength) + 1).fill(0).map((el, index) => (
                        <span
                            key={index}
                            onClick={() => setPosition(index * sliceLength)}
                            className={classNames(cls.sliderIndicator, {
                                [cls.sliderIndicatorHighlighted]:
                                    index <= Math.floor(position / sliceLength),
                            })}
                        ></span>
                    ))}
                </div>
            </div>

            <SliderControl direction={'right'} onClick={slideRight} />
        </div>
    );
};
