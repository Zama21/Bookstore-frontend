import { BookPageApi } from 'modules/auth/api/bookPageApi.js';
import { useAuth } from 'modules/auth/domain/hooks/useAuth.js';
import { useAuthModal } from 'modules/modals/domain/hooks/modal-types/useAuthModal.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useBookData = () => {
    const [data, setData] = useState({});
    const { isAuthed } = useAuth();
    const { bookId } = useParams();
    const authModal = useAuthModal();

    const updateAddsToLibrary = delta => {
        setData(prev => ({
            ...prev,
            isInLibrary: !prev.isInLibrary,
            addsToLibraryCount: prev?.addsToLibraryCount + delta,
        }));
    };

    const updateBookStarred = delta => {
        setData(prev => ({
            ...prev,
            isStarred: !prev.isStarred,
            starsCount: prev?.starsCount + delta,
        }));
    };

    const toggleLibrary = () => {
        if (!isAuthed) return authModal.open();

        if (data.isInLibrary) {
            BookPageApi.removeFromLibrary(bookId).then(res => updateAddsToLibrary(-1));
        } else {
            BookPageApi.addToLibrary(bookId).then(res => updateAddsToLibrary(1));
        }
    };

    const toggleStarred = () => {
        if (!isAuthed) return authModal.open();

        if (data.isStarred) {
            BookPageApi.unstarBook(bookId).then(() => updateBookStarred(-1));
        } else {
            BookPageApi.starBook(bookId).then(() => updateBookStarred(1));
        }
    };

    useEffect(() => {
        BookPageApi.getBookInfo(bookId).then(res => {
            console.log('Book info', res.data);
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
    };
};
