import { bookBasicApi } from 'modules/books/api/bookBasicApi.js';
import { useParams } from 'react-router-dom';
import { BackButton } from 'shared/ui/components/BackButton/BackButton.jsx';
import BookViewBoxEditPage from './components/BookViewBoxEditPage/BookViewBoxEditPage';
import SwitchingBoxEditPage from './components/SwitchingBoxEditPage/SwitchingBoxEditPage';

export default function BookEditPage() {
    const { bookId } = useParams();
    const { data } = bookBasicApi.useGetBookDataQuery(bookId);

    return (
        <div className='wrapperPage'>
            {data && (
                <>
                    <BackButton />
                    <BookViewBoxEditPage bookData={data} />
                    <SwitchingBoxEditPage bookData={data} />
                </>
            )}
        </div>
    );
}
