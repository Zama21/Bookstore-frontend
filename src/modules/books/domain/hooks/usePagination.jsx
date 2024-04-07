import { BookReadPageApi } from 'modules/books/api/bookReadPageApi.js';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePagination = ({ bookId, onError403, onErrorElse }) => {
    const [data, setData] = useState({
        firstPageIndex: null,
        lastPageIndex: null,
        pages: [],
    });
    const [searchParams] = useSearchParams();
    const chapterNumber = +searchParams.get('chapterNumber');
    const pageNumber = +searchParams.get('pageNumber');

    useEffect(() => {
        BookReadPageApi.gettingChapterMetaInformation(bookId, chapterNumber, 0)
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
                    onError403();
                } else {
                    onErrorElse(err);
                }
            });
    }, [bookId, chapterNumber, pageNumber]);

    useEffect(() => {
        if (isBookPageLoaded(pageNumber)) return;

        BookReadPageApi.gettingPageRange(
            bookId,
            pageNumber,
            pageNumber,
            pageNumber
        )
            .then(res => {
                setData(prev => {
                    return {
                        ...prev,
                        pages: [...prev.pages, ...res.data],
                    };
                });
            })
            .catch(err => {
                if (err.response.status === 403) {
                    onError403();
                } else {
                    onErrorElse(err);
                }
            });
    }, [pageNumber]);

    const isBookPageLoaded = selectedPage => {
        return data.pages.some((page, index) => {
            return page.index === selectedPage;
        });
    };

    function updatePageIndexValue(thresholdIndex, delta) {
        setData(prev => {
            return {
                ...prev,
                pages: prev.pages.map(page => ({
                    ...page,
                    index:
                        page.index > thresholdIndex
                            ? page.index + delta
                            : page.index,
                })),
            };
        });
    }
    function deletePageByIndex(indexToDelete) {
        setData(prev => {
            return {
                ...prev,
                pages: prev.pages.filter(page => page.index !== indexToDelete),
            };
        });
    }

    return {
        data,
        updatePageIndexValue: (thresholdIndex, delta) =>
            updatePageIndexValue(thresholdIndex, delta),
        deletePageByIndex: indexToDelete => deletePageByIndex(indexToDelete),
    };
};
