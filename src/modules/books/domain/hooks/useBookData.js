import { BookPageApi } from 'modules/auth/api/bookPageApi.js';
import { useAuth } from 'modules/auth/domain/hooks/useAuth.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useBookData = () => {
    const [data, setData] = useState({});
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [closingAnimation, setClosingAnimation] = useState(true);

    const { isAuthed } = useAuth();

    const { bookId } = useParams();

    const updateAddsToLibrary = (delta) => {
        setData((prev) => ({
            ...prev,
            isInLibrary: !prev.isInLibrary,
            addsToLibraryCount: prev?.addsToLibraryCount + delta,
        }));
    };

    const updateBookStarred = (delta) => {
        setData((prev) => ({
            ...prev,
            isStarred: !prev.isStarred,
            starsCount: prev?.starsCount + delta,
        }));
    };

    const toggleLibrary = () => {
        if (!isAuthed) {
            setShowAuthModal((prev) => !prev);
            setClosingAnimation((prev) => !prev);
            return;
        }
        if (data.isInLibrary) {
            BookPageApi.removeFromLibrary(bookId).then((res) => updateAddsToLibrary(-1));
        } else {
            BookPageApi.addToLibrary(bookId).then((res) => updateAddsToLibrary(1));
        }
    };

    const toggleStarred = () => {
        if (!isAuthed) {
            setShowAuthModal((prev) => !prev);
            setClosingAnimation((prev) => !prev);
            return;
        }
        if (data.isStarred) {
            BookPageApi.unstarBook(bookId).then(() => updateBookStarred(-1));
        } else {
            BookPageApi.starBook(bookId).then(() => updateBookStarred(1));
        }
    };

    useEffect(() => {
        BookPageApi.getBookInfo(bookId).then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);

    return {
        data,
        bookId,

        control: {
            toggleLibrary,
            toggleStarred,
        },

        showAuthModal,
        setShowAuthModal,
        closingAnimation,
        setClosingAnimation,
    };
};
