import { bookBasicApi } from 'modules/books/api/bookBasicApi.js';
import { BookReadPageApi } from 'modules/books/api/bookReadPageApi';
import { useFontSize } from 'modules/books/domain/hooks/useFontSize.js';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Comments from 'shared/ui/components/Comments/Comments';
import CustomSelectOption from 'shared/ui/components/CustomSelectOption/CustomSelectOption';
import stl from './BookReadPage.module.css';
import BookReader from './components/BookReader/BookReader';
import stlCommentsBookRead from './stl/Comments.module.css';
import stlCustomSelectOption from './stl/customSelectOption/customSelectOption.module.css';
import BookReadSvgSelector from './svg/BookReadSvgSelector';

const commentsObj = {
    data: [
        {
            avatar: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663110850_6-mykaleidoscope-ru-p-spokoinii-chelovek-vkontakte-8.jpg',
            firstName: 'Grot',
            lastName: 'Grotovich',
            date: '12.02.2024',
            time: '12:03',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.',
            answers: [
                {
                    avatar: 'https://get.wallhere.com/photo/face-women-model-portrait-long-hair-blue-eyes-brunette-looking-at-viewer-photography-blue-fashion-hair-Person-skin-head-girl-beauty-smile-eye-woman-lady-blond-hairstyle-portrait-photography-photo-shoot-brown-hair-facial-expression-41103.jpg',
                    firstName: 'Grot',
                    lastName: '',
                    date: '12.02.2024',
                    time: '12:03',
                    text: 'Да, согласен!',
                    Answers: [],
                },
                {
                    avatar: 'http://microsac.es/wp-content/uploads/2019/06/8V1z7D_t20_YX6vKm.jpg',
                    firstName: 'Grot',
                    lastName: 'Mimrovich',
                    date: '12.02.2024',
                    time: '12:03',
                    text: 'Плюсую!111!1111!111',
                    Answers: [],
                },
            ],
        },
        {
            avatar: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663110850_6-mykaleidoscope-ru-p-spokoinii-chelovek-vkontakte-8.jpg',
            firstName: 'Grot',
            lastName: 'Grotovich',
            date: '12.02.2024',
            time: '12:03',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.',
            answers: [
                {
                    avatar: 'https://get.wallhere.com/photo/face-women-model-portrait-long-hair-blue-eyes-brunette-looking-at-viewer-photography-blue-fashion-hair-Person-skin-head-girl-beauty-smile-eye-woman-lady-blond-hairstyle-portrait-photography-photo-shoot-brown-hair-facial-expression-41103.jpg',
                    firstName: 'Grot',
                    lastName: '',
                    date: '12.02.2024',
                    time: '12:03',
                    text: 'Да, согласен!',
                    Answers: [],
                },
                {
                    avatar: 'http://microsac.es/wp-content/uploads/2019/06/8V1z7D_t20_YX6vKm.jpg',
                    firstName: 'Grot',
                    lastName: 'Mimrovich',
                    date: '12.02.2024',
                    time: '12:03',
                    text: 'Плюсую!111!1111!111',
                    Answers: [],
                },
            ],
        },
    ],
    stl: stlCommentsBookRead,
};

export const BookReadPage = () => {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();

    const { data: dataBook } = bookBasicApi.useGetBookDataQuery(bookId);

    const [searchParams] = useSearchParams();
    const chapterNumber = searchParams.get('chapterNumber');
    const pageNumber = searchParams.get('pageNumber');

    const handleSelection = title => {
        const chapter = dataBook.parts.find(item => item.title === title);
        BookReadPageApi.gettingChapterMetaInformation(bookId, chapter.id, 0).then(res => {
            navigate(
                `/book/${bookId}/read?chapterNumber=${chapter.id}&pageNumber=${res.data.firstPageIndex}`
            );
        });
    };

    const bookReaderObj = dataBook && {
        bookId,
        fontSize: fontSize + 'px',
        pageNumber: +pageNumber,
        selectedPart: +chapterNumber,
        parts: dataBook.parts,
        dataBook,
    };

    return (
        dataBook && (
            <>
                <div className='wrapperPage'>
                    <h1 className={stl.bookReadH1}>
                        <Link to={`/book/${bookId}`}>{dataBook.title}</Link>
                    </h1>

                    <div className={stl.WrapperTableContentsAndBtn}>
                        {dataBook.parts.length > 0 ? (
                            <CustomSelectOption
                                options={dataBook.parts.map(item => item.title)}
                                onChange={handleSelection}
                                defaultValue={
                                    dataBook.parts.find(part => part.id == chapterNumber)?.title
                                }
                                containerClassName={stlCustomSelectOption.container}
                            />
                        ) : (
                            <p>В книге пока нет глав</p>
                        )}
                        <div className={stl.wrapperBtnZoom}>
                            <button className={stl.textZoomButton} onClick={increaseFontSize}>
                                <BookReadSvgSelector nameSvg='+'></BookReadSvgSelector>
                            </button>
                            <button className={stl.textZoomButton} onClick={decreaseFontSize}>
                                <BookReadSvgSelector nameSvg='-'></BookReadSvgSelector>
                            </button>
                        </div>
                    </div>

                    <BookReader {...bookReaderObj} />

                    <Comments {...commentsObj}></Comments>
                </div>
            </>
        )
    );
};
