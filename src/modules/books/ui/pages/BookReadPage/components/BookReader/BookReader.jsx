import { BookReadPageApi } from 'modules/auth/api/bookReadPageApi';
import React, { useState, useEffect } from 'react';
import NumberRangeDisplay from '../NumberRangeDisplay/NumberRangeDisplay';

const BookReader = ({ bookId }) => {
    const [currentPartIndex, setCurrentPartIndex] = useState(1);
    const [selectedPage, setSelectedPage] = useState(1);
    const [data, setData] = useState({});
    // const [pages, setPages] = useState([]);

    const handleSelectItem = item => {
        setSelectedPage(item);
    };
    useEffect(() => {
        BookReadPageApi.gettingChapterMetaInformation(
            bookId,
            currentPartIndex,
            1
        ).then(res => {
            setData(res.data);
            console.log(res.data);
        });
    }, [bookId, currentPartIndex]);

    // const handleNextPart = () => {
    //     if (currentPartIndex < totalPages) {
    //         setCurrentPartIndex(currentPartIndex + 1);
    //     }
    // };

    // const handlePrevPart = () => {
    //     if (currentPartIndex > 1) {
    //         setCurrentPartIndex(currentPartIndex - 1);
    //     }
    // };

    return (
        <div>
            <NumberRangeDisplay
                start={1}
                end={13}
                selected={selectedPage}
                onSelect={handleSelectItem}
            />
        </div>
    );
};

export default BookReader;
