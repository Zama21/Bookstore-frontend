import { useState } from 'react';
import BookInformationEditForm from './BookInformationEditForm/BookInformationEditForm';
import ChaptersEditPage from './ChaptersEditPage/ChaptersEditPage';
import stl from './SwitchingBoxEditPage.module.css';
import { BookStatusOptionsMap } from './config.js';
import { myBooksApi } from 'modules/home/api/myBooksApi.js';

export default function SwitchingBoxEditPage({ description, title, bookData }) {
    const [SelectedSection, setSelectedSection] = useState('tableContents');
    let content;
    let activeClassForBtn = `${stl.SwitchBox} ${stl.active}`;
    const handleClick = nameSelectedSection => {
        setSelectedSection(nameSelectedSection);
    };

    const initialBookInfoValues = bookData && {
        bookCover: bookData.coverSrc,
        bookTitle: bookData.title,
        annotation: bookData.description,
        cycleName: bookData.series?.name,
        genre1: bookData.genres[0],
        genre2: bookData.genres[1],
        genre3: bookData.genres[2],
        bookStatus: BookStatusOptionsMap[bookData.status],
        ageRestriction: bookData.ageRestriction ?? '',
        cost: bookData.cost ?? 0,
        freeChaptersCount: bookData.freeChaptersCount ?? 0,
    };

    const [editBook, editBookResult] = myBooksApi.useEditBookMutation();
    const handleEditBook = values => {
        editBook({
            bookId: bookData.id,
            editBookData: {
                title: values.bookTitle,
                description: values.annotation,
                freeChaptersCount: values.freeChaptersCount,
                cost: values.cost,
                ageRestriction: values.ageRestriction,
                genres: [values.genre1, values.genre2, values.genre3].filter(
                    Boolean
                ),
                bookCover: values.bookCover,
                bookStatus: Object.keys(BookStatusOptionsMap).find(
                    key => BookStatusOptionsMap[key] === values.bookStatus
                ),
            },
        });
    };

    switch (SelectedSection) {
        case 'tableContents':
            content = <ChaptersEditPage bookData={bookData} />;
            break;
        case 'bookInformation':
            content = (
                <BookInformationEditForm
                    initialFormValues={initialBookInfoValues}
                    onSubmit={handleEditBook}
                />
            );
            break;
    }
    return (
        <div className={stl.wrapper}>
            <div className={`flxRow`}>
                <button
                    onClick={() => handleClick('tableContents')}
                    className={`${
                        SelectedSection == 'tableContents'
                            ? activeClassForBtn
                            : stl.SwitchBox
                    }`}
                >
                    Оглавление
                </button>
                <button
                    onClick={() => handleClick('bookInformation')}
                    className={`${
                        SelectedSection == 'bookInformation'
                            ? activeClassForBtn
                            : stl.SwitchBox
                    }`}
                >
                    Информация о книге
                </button>
            </div>
            <div className={stl.wrapper2}>{content}</div>
        </div>
    );
}
