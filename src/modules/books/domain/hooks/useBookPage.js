import { useAuth } from 'modules/auth/domain/hooks/useAuth.js';
import { bookBasicApi } from 'modules/books/api/bookBasicApi.js';
import { useAuthModal } from 'modules/modals/domain/hooks/modalTypes/useAuthModal.js';
import { useParams } from 'react-router-dom';

export const useBookPage = () => {
    const { isAuthed } = useAuth();
    const { bookId } = useParams();

    const { data, isLoading } = bookBasicApi.useGetBookDataQuery(bookId);
    const [removeFromLibrary] = bookBasicApi.useRemoveFromLibraryMutation(bookId);
    const [addToLibrary] = bookBasicApi.useAddToLibraryMutation(bookId);
    const [starBook] = bookBasicApi.useStarBookMutation(bookId);
    const [unstarBook] = bookBasicApi.useUnstarBookMutation(bookId);

    const authModal = useAuthModal();

    const toggleLibrary = () => {
        if (!isAuthed) return authModal.open();

        if (data.isInLibrary) {
            removeFromLibrary(bookId);
        } else {
            addToLibrary(bookId);
        }
    };

    const toggleStarred = () => {
        if (!isAuthed) return authModal.open();

        if (data.isStarred) {
            unstarBook(bookId);
        } else {
            starBook(bookId);
        }
    };

    return {
        data,
        isLoading,
        bookId,

        control: {
            toggleLibrary,
            toggleStarred,
        },
    };
};
