import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ChapterItemEditPage from './ChapterItemEditPage/ChapterItemEditPage';
import AddChapterEditPage from './AddChapterEditPage/AddChapterEditPage';
import stl from './ChaptersEditPage.module.css';

export default function ChaptersEditPage() {
    const [chapters, setChapters] = useState([]);
    const [isReversed, setIsReversed] = useState(false);

    const handleDragEnd = result => {
        if (!result.destination) {
            return;
        }

        const items = Array.from(chapters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setChapters(items);
    };
    const addChapter = chapterTitle => {
        const newChapter = {
            title: chapterTitle,
            date: new Date().toLocaleDateString(),
        };
        isReversed
            ? setChapters([newChapter, ...chapters])
            : setChapters([...chapters, newChapter]);
    };
    const reverseOrder = () => {
        setChapters(prevChapters => [...prevChapters].reverse()); // Изменение порядка элементов
        setIsReversed(prevState => !prevState); // Изменение состояния для отслеживания порядка сортировки
    };

    return (
        <div>
            <div className={stl.wrapperControlChapters}>
                <AddChapterEditPage onAddChapter={addChapter} />
                <button className={stl.btnReverse} onClick={reverseOrder}>
                    &#8593;&#8595;
                </button>
            </div>
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
                                            <ChapterItemEditPage {...chapter} />
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
