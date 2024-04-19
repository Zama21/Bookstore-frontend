import { bookBasicApi } from 'modules/books/api/bookBasicApi.js';
import { useParams } from 'react-router-dom';
import { BackButton } from 'shared/ui/components/BackButton/BackButton.jsx';
import BookViewBoxEditPage from './components/BookViewBoxEditPage/BookViewBoxEditPage';
import SwitchingBoxEditPage from './components/SwitchingBoxEditPage/SwitchingBoxEditPage';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';

export default function BookEditPage() {
    const { bookId } = useParams();
    const { data, isLoading } = bookBasicApi.useGetBookDataQuery(bookId);

    return (
        <div className='wrapperPage'>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <BackButton />
                    <BookViewBoxEditPage bookData={data} />
                    <SwitchingBoxEditPage bookData={data} />
                </>
            )}
        </div>
    );
}
