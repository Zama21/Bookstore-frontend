import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        showSidebar: false,
    },
    reducers: {
        setShowSidebar(state, action) {
            state.showSidebar = action.payload;
        },
        toggleSidebar(state) {
            state.showSidebar = !state.showSidebar;
        },
    },
});

export const { actions: homeActions } = homeSlice;
export const { reducer: homeReducer } = homeSlice;
