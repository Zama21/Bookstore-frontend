import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { homeActions } from '../store/homeSlice.js';
import { useEffect } from 'react';

export const useSidebar = () => {
    const dispatch = useDispatch();
    const showSidebar = useSelector(state => state.home.showSidebar);

    useEffect(() => {
        const showSidebarPreference = localStorage.getItem('preference/sidebarShown');
        if (showSidebarPreference === 'true') {
            dispatch(homeActions.setShowSidebar(true));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('preference/sidebarShown', showSidebar);
    }, [showSidebar]);

    return {
        isShown: showSidebar,
        toggle() {
            dispatch(homeActions.toggleSidebar());
        },
    };
};
