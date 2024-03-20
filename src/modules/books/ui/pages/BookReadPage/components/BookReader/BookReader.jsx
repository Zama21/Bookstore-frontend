import { BookReadPageApi } from 'modules/auth/api/bookReadPageApi';
import React, { useState, useEffect } from 'react';
import NumberRangeDisplay from '../NumberRangeDisplay/NumberRangeDisplay';
import cls from './BookReader.module.css';
import { useNavigate } from 'react-router-dom';

const BookReader = ({ bookId, fontSize, pageNumber, selectedPart, parts }) => {
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [isEndPage, setIsEndPage] = useState(false);
    const [dataDownloaded, setDataDownloaded] = useState(false);
    const [data, setData] = useState({
        firstPageIndex: null,
        lastPageIndex: null,
        pages: [],
    });
    useEffect(() => {
        if (isEndPage) {
            if (!dataDownloaded) return;
            pageNumber = data.lastPageIndex - data.firstPageIndex + 1;
            setIsEndPage(false);
            setDataDownloaded(false);
            navigate(
                `/book/${bookId}/read?chapterNumber=${selectedPart}&pageNumber=${pageNumber}`
            );
        }
    }, [isEndPage, data.lastPageIndex, data.firstPageIndex]);

    useEffect(() => {
        BookReadPageApi.gettingChapterMetaInformation(
            bookId,
            selectedPart,
            1
        ).then(res => {
            setData(prev => {
                isEndPage && setDataDownloaded(true);
                return {
                    ...res.data,
                    pages: [...prev.pages],
                };
            });
        });
    }, [bookId, selectedPart]);

    useEffect(() => {
        if (!data.firstPageIndex) return;

        if (isBookPageLoaded(pageNumber + data.firstPageIndex - 1)) return;

        BookReadPageApi.gettingPageRange(
            bookId,
            pageNumber + data.firstPageIndex - 1,
            pageNumber + data.firstPageIndex - 1,
            pageNumber + data.firstPageIndex - 1
        ).then(res => {
            setData(prev => {
                return {
                    ...prev,
                    pages: [...prev.pages, ...res.data],
                };
            });
        });
    }, [pageNumber, data.firstPageIndex]);

    useEffect(() => {
        gettingContent();
    }, [data.pages, pageNumber]);

    const handleSelectItem = (newPageNumber, deltaPart = 0, deltaPage = 0) => {
        if (deltaPart < 0) {
            deltaPage = 0;
            setIsEndPage(true);
        }
        navigate(
            `/book/${bookId}/read?chapterNumber=${
                selectedPart + deltaPart
            }&pageNumber=${newPageNumber + deltaPage}`
        );
    };

    const isBookPageLoaded = selectedPage => {
        return data.pages.some((page, index) => {
            return page.index === selectedPage;
        });
    };

    const gettingContent = () => {
        let indexSelectedPage = pageNumber + data.firstPageIndex - 1;

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
    };

    return (
        data &&
        data.firstPageIndex && (
            <div>
                <NumberRangeDisplay {...paginationObj} />
                <span className={cls.divider}></span>
                <div
                    className={cls.WrapperBodyText}
                    style={{ fontSize: fontSize }}
                >
                    {content || ''}
                </div>
                <span className={cls.divider}></span>
                <NumberRangeDisplay {...paginationObj} />
            </div>
        )
    );
};

export default BookReader;
