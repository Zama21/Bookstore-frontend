import { BookStatusTextMap } from 'modules/books/lib/bookStatusMap.js';
import { catalogActions } from 'modules/catalog/store/catalogSlice.js';
import Modal from 'modules/modals/ui/Components/Modals/BaseModals/Modal/Modal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { sharedApi } from 'shared/api/sharedApi.js';
import { Button } from 'shared/ui/components/Button/Button.jsx';
import CustomSelectOption from 'shared/ui/components/CustomSelectOption/CustomSelectOption.jsx';
import { LoadingSpinner } from 'shared/ui/components/LoadingSpinner/LoadingSpinner.jsx';
import { PriceFilter, PriceFilterNoValue } from '../../components/PriceFilter/PriceFilter.jsx';
import cls from './FiltersModal.module.css';

export const FiltersModal = props => {
    const dispatch = useDispatch();
    const { data: genres, isLoading: isLoadingGenres } = sharedApi.useGetGenresQuery();
    const filters = useSelector(state => state.catalog.filters);

    const handleGenreUpdate = genre => {
        dispatch(catalogActions.setFilters({ genres: genre ? [genre] : undefined }));
    };

    const handleBookStatusUpdate = bookStatus => {
        dispatch(
            catalogActions.setFilters({
                bookStatus: Object.keys(BookStatusTextMap).find(
                    key => BookStatusTextMap[key] === bookStatus
                ),
            })
        );
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
                            defaultValue={filters.genres?.[0] ?? 'любой'}
                            containerClassName={cls.selector}
                            IsClearSelection={true}
                            clearSelectionText={'любой'}
                        />
                        <CustomSelectOption
                            label='Статус'
                            options={Object.values(BookStatusTextMap)}
                            onChange={handleBookStatusUpdate}
                            defaultValue={BookStatusTextMap[filters.bookStatus] ?? 'любой'}
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
