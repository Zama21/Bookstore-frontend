import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ChapterItemEditPage from './ChapterItemEditPage/ChapterItemEditPage';
import AddChapterEditPage from './AddChapterEditPage/AddChapterEditPage';
import stl from './ChaptersEditPage.module.css';
import { BookEditPartApi } from 'modules/auth/api/BookEditPartApi';

export default function ChaptersEditPage({ bookData }) {
    const [chapters, setChapters] = useState(bookData.parts);
    const [isReversed, setIsReversed] = useState(false);
    const [isErrorValidateTitle, setIsErrorValidateTitle] = useState(false);
    const [isUpdateFirstPage, setIsUpdateFirstPage] = useState(false);
    // console.log(bookData);
    // console.log(chapters);

    function changeBuyPart() {
        setChapters(prev => {
            const newArrParts = prev.map((item, index) => {
                if (isReversed) {
                    if (index >= prev.length - bookData.freeChaptersCount) {
                        return { ...item, isFree: true };
                    }
                } else {
                    if (index < bookData.freeChaptersCount)
                        return { ...item, isFree: true };
                }
                return { ...item, isFree: false };
            });

            let arrPartsForOrder = newArrParts.map((item, index) => {
                return item.id;
            });

            arrPartsForOrder = isReversed
                ? arrPartsForOrder.reverse()
                : arrPartsForOrder;
            BookEditPartApi.changeOrderParts(
                arrPartsForOrder,
                bookData.id
            ).then(res => {
                setIsUpdateFirstPage(true);
            });

            return newArrParts;
        });
    }
    const handleDragEnd = result => {
        if (!result.destination) {
            return;
        }

        let items = Array.from(chapters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setChapters(items);
        changeBuyPart();
    };

    const deleteChapter = chapterId => {
        setChapters(prevChapters => {
            return prevChapters.filter(chapter => chapter.id !== chapterId);
        });
        setIsUpdateFirstPage(true);
    };
    const addChapter = chapterTitle => {
        if (chapterTitle.trim().length < 3) {
            setIsErrorValidateTitle(true);
            return;
        }
        setIsErrorValidateTitle(false);
        BookEditPartApi.addNewPart(bookData.id, chapterTitle).then(res => {
            const newChapter = {
                id: res.data.partId,
                isFree: bookData.freeChaptersCount > chapters.length,
                title: chapterTitle,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            isReversed
                ? setChapters([newChapter, ...chapters])
                : setChapters([...chapters, newChapter]);
        });
    };

    const reverseOrder = () => {
        setChapters(prevChapters => [...prevChapters].reverse());
        setIsReversed(prevState => !prevState);
    };

    return (
        <div>
            <div className={stl.wrapperControlChapters}>
                <AddChapterEditPage
                    onAddChapter={addChapter}
                    setIsErrorValidateTitle={setIsErrorValidateTitle}
                />

                <button className={stl.btnReverse} onClick={reverseOrder}>
                    &#8593;&#8595;
                </button>
            </div>
            {isErrorValidateTitle && (
                <div className={stl.errorMessage}>
                    Название должно содержать как минимум 3 символа.
                </div>
            )}
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='chapters'>
                    {provided => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {chapters.map((chapter, index) => (
                                <Draggable
                                    key={index}
                                    draggableId={`chapter-${index}`}
                                    index={index}
                                >
                                    {provided => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <ChapterItemEditPage
                                                {...chapter}
                                                bookId={bookData.id}
                                                isUpdateFirstPage={
                                                    isUpdateFirstPage
                                                }
                                                setIsUpdateFirstPage={
                                                    setIsUpdateFirstPage
                                                }
                                                deleteChapter={deleteChapter}
                                            />
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
