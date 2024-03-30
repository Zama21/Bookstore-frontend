import { bookReadActions } from 'modules/books/store/bookReadSlice.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFontSize = () => {
    const fontSize = useSelector(state => state.bookRead.fontSize);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedFontSize = localStorage.getItem('preference/fontSize');
        if (savedFontSize) {
            dispatch(bookReadActions.setFontSize(Number(savedFontSize)));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('preference/fontSize', fontSize);
    }, [fontSize]);

    return {
        fontSize,
        increaseFontSize: () => dispatch(bookReadActions.increaseFontSize()),
        decreaseFontSize: () => dispatch(bookReadActions.decreaseFontSize()),
    };
};
