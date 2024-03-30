import { BookReadPageApi } from 'modules/books/api/bookReadPageApi';
import React, { useState, useEffect } from 'react';
import ReadingPagination from '../ReadingPagination/ReadingPagination';
import cls from './BookReader.module.css';
import { useNavigate } from 'react-router-dom';
import payImg from './Img/payImg.png';

const byeContent = (
    <>
        <img className={cls.payImg} src={payImg} alt='gh' />
        <div className={cls.containerPayText}>
            <p>
                <span className={cls.keyword}>Упс</span>, кажется это{' '}
                <span className={cls.keyword}>платная</span> глава.
            </p>
            <p>
                <span className={cls.keyword}>Поддержите</span> автора -{' '}
                <span className={cls.keyword}>купите</span> книгу!
            </p>
        </div>
    </>
);

const BookReader = ({ bookId, fontSize, pageNumber, selectedPart, parts, dataBook }) => {
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [data, setData] = useState({
        firstPageIndex: null,
        lastPageIndex: null,
        pages: [],
    });

    const navigateToCurrentReadingPage = () => {
        // console.log(parts, dataBook);
        if (parts.length === 0) return;
        navigate(
            `/book/${bookId}/read?chapterNumber=${dataBook.currentPart?.id ?? parts[0]?.id}&pageNumber=${
                dataBook.currentPage ?? 1
            }`
        );
    };

    useEffect(() => {
        console.log('get meta');
        if (!dataBook) return;
        BookReadPageApi.gettingChapterMetaInformation(bookId, selectedPart, 0)
            .then(res => {
                setData(prev => {
                    return {
                        ...res.data,
                        pages: [...prev.pages],
                    };
                });
            })
            .catch(err => {
                if (err.response.status === 403) {
                    setContent(byeContent);
                } else {
                    navigateToCurrentReadingPage();
                }
            });
    }, [bookId, selectedPart, dataBook]);

    useEffect(() => {
        if (!dataBook) return;
        if (isBookPageLoaded(pageNumber)) return;

        console.log('get range');
        BookReadPageApi.gettingPageRange(bookId, pageNumber, pageNumber, pageNumber)
            .then(res => {
                console.log('get pages res', res);
                setData(prev => {
                    return {
                        ...prev,
                        pages: [...prev.pages, ...res.data],
                    };
                });
            })
            .catch(err => {
                if (err.response.status === 403) {
                    setContent(byeContent);
                } else {
                    console.log('get pages err', err);
                    navigateToCurrentReadingPage();
                }
            });
    }, [pageNumber, dataBook]);

    useEffect(() => {
        gettingContent();
    }, [data.pages, pageNumber]);

    const handleSelectItem = (newPageNumber, deltaPart = 0, deltaPage = 0) => {
        const currentPartIndex = parts.findIndex(part => part.id === selectedPart);
        navigate(
            `/book/${bookId}/read?chapterNumber=${parts[currentPartIndex + deltaPart].id}&pageNumber=${
                newPageNumber + deltaPage
            }`
        );
    };

    const isBookPageLoaded = selectedPage => {
        return data.pages.some((page, index) => {
            return page.index === selectedPage;
        });
    };

    const gettingContent = () => {
        let indexSelectedPage = pageNumber;

        const selectedContent = data.pages.find((page, index) => {
            return page.index === indexSelectedPage;
        });

        setContent(selectedContent?.content);
    };

    const paginationObj = {
        start: 1,
        end: data.lastPageIndex - data.firstPageIndex + 1,
        selected: pageNumber,
        selectedPart,
        parts,
        onSelect: handleSelectItem,
        firstPageIndex: data.firstPageIndex,
    };

    // console.log(data);

    return (
        data &&
        data.firstPageIndex && (
            <div>
                <ReadingPagination {...paginationObj} />
                <span className={cls.divider}></span>
                <div className={cls.WrapperBodyText} style={{ fontSize: fontSize }}>
                    {content || ''}
                </div>
                <span className={cls.divider}></span>
                <ReadingPagination {...paginationObj} />
            </div>
        )
    );
};

export default BookReader;
