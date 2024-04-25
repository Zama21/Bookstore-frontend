import Modal from 'modules/modals/ui/Components/Modals/BaseModals/Modal/Modal.jsx';
import cls from './FiltersModal.module.css';
import { sharedApi } from 'shared/api/sharedApi.js';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';
import { useDispatch } from 'react-redux';
import { catalogActions } from 'modules/catalog/store/catalogSlice.js';
import CustomSelectOption from 'shared/ui/components/CustomSelectOption/CustomSelectOption.jsx';
import { BookStatus } from 'modules/books/domain/enums/bookStatus.js';
import { BookStatusTextMap } from 'modules/books/lib/bookStatusMap.js';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/components/Button/Button.jsx';
import { PriceFilter, PriceFilterNoValue } from '../../components/PriceFilter/PriceFilter.jsx';

export const FiltersModal = props => {
    const dispatch = useDispatch();
    const { data: genres, isLoading: isLoadingGenres } = sharedApi.useGetGenresQuery();
    const filters = useSelector(state => state.catalog.filters);

    const handleGenreUpdate = genre => {
        dispatch(catalogActions.setFilters({ genres: [genre] }));
    };

    const handleBookStatusUpdate = bookStatus => {
        dispatch(catalogActions.setFilters({ bookStatus }));
    };

    const handlePriceUpdate = ({ min, max }) => {
        dispatch(
            catalogActions.setFilters({
                price: {
                    min: min === PriceFilterNoValue ? undefined : min ?? filters.price?.min,
                    max: max === PriceFilterNoValue ? undefined : max ?? filters.price?.max,
                },
            })
        );
    };

    return (
        <Modal {...props}>
            <div className={cls.content}>
                <h1 className={cls.heading}>Фильтры</h1>

                {isLoadingGenres ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <CustomSelectOption
                            label='Жанр'
                            options={genres.map(genres => genres.name)}
                            onChange={handleGenreUpdate}
                            defaultValue={'любой'}
                            containerClassName={cls.selector}
                            IsClearSelection={true}
                            clearSelectionText={'любой'}
                        />
                        <CustomSelectOption
                            label='Статус'
                            options={Object.values(BookStatusTextMap)}
                            onChange={handleBookStatusUpdate}
                            defaultValue={'любой'}
                            containerClassName={cls.selector}
                            IsClearSelection={true}
                            clearSelectionText={'любой'}
                        />
                        <div className={cls.selector}>
                            <p>Цена</p>
                            <PriceFilter
                                value={[filters.price?.min ?? '', filters.price?.max ?? '']}
                                onChange={handlePriceUpdate}
                            />
                        </div>
                        <div className={cls.closeBtnContainer}>
                            <Button onClick={props.onHideCart}>Ок</Button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
};
