import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import stl from './BookPage.module.css';
import stlTableContents from './stl/TableContents.module.css';
import BookViewBox from './components/BookViewBox/BookViewBox';
import SwitchingBox from './components/SwitchingBox/SwitchingBox';
import TableContents from '../../../../../shared/ui/components/TableСontents/TableСontents';
import { axiosInstance } from 'shared/api/apiInstance';
import { useAuth } from 'modules/auth/domain/hooks/useAuth';
import { BookPageApi } from 'modules/auth/api/bookPageApi.js';
import { useBookData } from 'modules/books/domain/hooks/useBookData.js';

const tableContentsObj = {
    defaultValue: 'title',
    data: ['арбуз', 'глава2', 'kio rio'],
    stl: stlTableContents,
};

export const BookPage = () => {
    const { data, control, bookId, showAuthModal } = useBookData();
    const { isAuthed } = useAuth();

    const dataSwitchingBox = {
        description: data?.description,
        title: data?.title,
    };

    const dataBookViewBox = {
        addsToLibraryCount: data?.addsToLibraryCount,
        author: data?.author,
        coverSrc: data?.coverSrc,
        createdAt: data?.createdAt,
        rewardsCount: data?.rewardsCount,
        series: data?.series,
        status: data?.status,
        updatedAt: data?.updatedAt,
        viewsCount: data?.viewsCount,
        title: data?.title,
        starsCount: data?.starsCount,
        isAuthed,
        toggleLibrary: control.toggleLibrary,
        isInLibrary: data.isInLibrary,
        toggleStarred: control.toggleStarred,
        isStarred: data.isStarred,
        currentPage: data?.currentPage,
        bookId,
        cost: data?.cost,
    };

    return (
        <>
            <div className={stl.wrapper}>
                <BookViewBox {...dataBookViewBox} />
                <TableContents {...tableContentsObj}></TableContents>
                <SwitchingBox {...dataSwitchingBox}></SwitchingBox>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis labore iusto,
                    nesciunt recusandae fugiat quo ipsum cumque et laudantium provident pariatur fugit
                    quibusdam nemo debitis assumenda aperiam minus voluptatibus quam. Rerum sequi
                    voluptatibus perferendis inventore omnis corporis consequuntur cumque adipisci quia
                    exercitationem iste commodi corrupti voluptatum, debitis mollitia aperiam
                </p>
            </div>
        </>
    );
};
