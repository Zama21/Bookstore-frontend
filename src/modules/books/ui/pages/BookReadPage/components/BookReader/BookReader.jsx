import DOMPurify from 'dompurify';
import { useReadPagination } from 'modules/books/domain/hooks/useReadPagination';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReadingPagination from '../ReadingPagination/ReadingPagination';
import cls from './BookReader.module.css';
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
    const { data } = useReadPagination({
        bookId,
        onError403: () => {
            setContent(byeContent);
        },
        onErrorElse: err => {
            console.log('get pages err', err);
            navigateToCurrentReadingPage();
        },
    });

    const navigateToCurrentReadingPage = () => {
        if (parts.length === 0) return;
        navigate(
            `/book/${bookId}/read?chapterNumber=${dataBook.currentPart?.id ?? parts[0]?.id}&pageNumber=${
                dataBook.currentPage ?? 1
            }`
        );
    };

    useEffect(() => {
        gettingContent();
    }, [data.pages, pageNumber]);

    const handleSelectItem = (newPageNumber, deltaPart = 0, deltaPage = 0) => {
        const currentPartIndex = parts.findIndex(part => part.id === selectedPart);
        // console.log(parts);
        // console.log(currentPartIndex, deltaPart);
        navigate(
            `/book/${bookId}/read?chapterNumber=${parts[currentPartIndex + deltaPart].id}&pageNumber=${
                newPageNumber + deltaPage
            }`
        );
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

    // const cleanContent = DOMPurify.sanitize(content, {
    //     USE_PROFILES: { html: true },
    // });
    // console.log(typeof cleanContent);

    return (
        data &&
        data.firstPageIndex && (
            <div>
                <ReadingPagination {...paginationObj} />
                <span className={cls.divider}></span>
                <div
                    className={cls.WrapperBodyText}
                    style={{ fontSize: fontSize }}
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
                <span className={cls.divider}></span>
                <ReadingPagination {...paginationObj} />
            </div>
        )
    );
};

export default BookReader;
