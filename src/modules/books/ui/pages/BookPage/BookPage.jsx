import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import stl from './BookPage.module.css';
import stlTableContents from './stl/TableContents.module.css';
import BookViewBox from './components/BookViewBox/BookViewBox';
import SwitchingBox from './components/SwitchingBox/SwitchingBox';
import TableContents from '../../../../../shared/ui/components/TableСontents/TableСontents';
import { axiosInstance } from 'shared/api/apiInstance';
import { useAuth } from 'modules/auth/domain/hooks/useAuth';
import ModalOfferToAuthorize from 'shared/ui/components/Modal/modalOfferToAuthorize/ModalOfferToAuthorize';

const tableContentsObj = {
    defaultValue: 'title',
    data: ['арбуз', 'глава2', 'kio rio'],
    stl: stlTableContents,
};

export const BookPage = () => {
    const [data, setData] = useState({});
    const [isInLibrary, setIsInLibrary] = useState(false);
    const [isStarred, setIsStarred] = useState(false);
    const { bookId } = useParams();
    const { isAuthed } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [closingAnimation, setClosingAnimation] = useState(true);

    const onHideCart = () => {
        setClosingAnimation(true);
        setTimeout(() => {
            setShowModal(false);
        }, 300);
    };
    // const onShowCart = () => {
    //     setShowModal(true);
    //     setClosingAnimation(false);
    // };
    const toggleLibrary = () => {
        if (!isAuthed) {
            setShowModal(prev => !prev);
            setClosingAnimation(prev => !prev);
            return;
        }
        if (isInLibrary) {
            axiosInstance
                .post(`/books/${bookId}/removeFromLibrary`)
                .then(res => {
                    setData(prev => ({
                        ...prev,
                        addsToLibraryCount: prev?.addsToLibraryCount - 1,
                    }));
                })
                .catch(error => {
                    console.error('Ошибка запроса:', error);
                });
        } else {
            axiosInstance
                .post(`/books/${bookId}/addToLibrary`)
                .then(res => {
                    setData(prev => ({
                        ...prev,
                        addsToLibraryCount: prev?.addsToLibraryCount + 1,
                    }));
                })
                .catch(error => {
                    console.error('Ошибка запроса:', error);
                });
        }
        setIsInLibrary(prev => !prev);
    };

    const toggleStarred = () => {
        if (!isAuthed) {
            setShowModal(prev => !prev);
            setClosingAnimation(prev => !prev);
            return;
        }
        if (isStarred) {
            axiosInstance
                .post(`/books/${bookId}/unstar`)
                .then(res => {
                    setData(prev => ({
                        ...prev,
                        starsCount: prev?.starsCount - 1,
                    }));
                })
                .catch(error => {
                    console.error('Ошибка запроса:', error);
                });
        } else {
            axiosInstance
                .post(`/books/${bookId}/star`)
                .then(res => {
                    setData(prev => ({
                        ...prev,
                        starsCount: prev?.starsCount + 1,
                    }));
                })
                .catch(error => {
                    console.error('Ошибка запроса:', error);
                });
        }

        setIsStarred(prev => !prev);
    };

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
        toggleLibrary,
        isInLibrary,
        toggleStarred,
        isStarred,
        currentPage: data?.currentPage,
        bookId,
        cost: data?.cost,
    };

    useEffect(() => {
        axiosInstance
            .get(`/books/${bookId}`)
            .then(res => {
                setData(res.data);
                res.data.isInLibrary ? setIsInLibrary(true) : '';
                res.data.isStarred ? setIsStarred(true) : '';

                console.log(res.data);
            })
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }, []);

    return (
        <>
            {showModal && (
                <ModalOfferToAuthorize
                    closingAnimation={closingAnimation}
                    onHideCart={onHideCart}
                />
            )}
            <div className={stl.wrapper}>
                <BookViewBox {...dataBookViewBox} />
                <TableContents {...tableContentsObj}></TableContents>
                <SwitchingBox {...dataSwitchingBox}></SwitchingBox>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis labore iusto, nesciunt recusandae fugiat quo ipsum
                    cumque et laudantium provident pariatur fugit quibusdam nemo
                    debitis assumenda aperiam minus voluptatibus quam. Rerum
                    sequi voluptatibus perferendis inventore omnis corporis
                    consequuntur cumque adipisci quia exercitationem iste
                    commodi corrupti voluptatum, debitis mollitia aperiam
                </p>
            </div>
        </>
    );
};
