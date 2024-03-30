import { BookPageApi } from 'modules/books/api/bookPageApi.js';
import { useAuth } from 'modules/auth/domain/hooks/useAuth.js';
import { useAuthModal } from 'modules/modals/domain/hooks/modal-types/useAuthModal.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBookData } from './useBookData.js';

export const useBookPage = () => {
    const { isAuthed, roles } = useAuth();
    const { bookId } = useParams();
    const { data, setData } = useBookData(bookId);
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

    return {
        data,
        bookId,

        control: {
            toggleLibrary,
            toggleStarred,
        },
    };
};
