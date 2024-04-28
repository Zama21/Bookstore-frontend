import { useAuth } from 'modules/auth/domain/hooks/useAuth';
import { useBookPage } from 'modules/books/domain/hooks/useBookPage.js';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';
import BookViewBox from './components/BookViewBox/BookViewBox';
import SwitchingBox from './components/SwitchingBox/SwitchingBox';
import { BackButton } from 'shared/ui/components/BackButton/BackButton.jsx';

export const BookPage = () => {
    const { data, isLoading, control, bookId, showAuthModal } = useBookPage();
    const { isAuthed } = useAuth();

    const dataSwitchingBox = {
        description: data?.description,
        title: data?.title,
    };

    const dataBookViewBox = data && {
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
        parts: data?.parts,
        currentPart: data?.currentPart,
        freeChaptersCount: data?.freeChaptersCount,
    };

    return (
        <>
            <div className=''>
                <BackButton />
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <BookViewBox {...dataBookViewBox} />
                        <SwitchingBox {...dataSwitchingBox}></SwitchingBox>
                    </>
                )}
            </div>
        </>
    );
};
