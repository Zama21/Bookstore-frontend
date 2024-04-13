import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { homeActions } from '../store/homeSlice.js';

export const useSidebar = () => {
    const dispatch = useDispatch();
    const showSidebar = useSelector(state => state.home.showSidebar);

    return {
        isShown: showSidebar,
        toggle() {
            dispatch(homeActions.toggleSidebar());
        },
    };
};
