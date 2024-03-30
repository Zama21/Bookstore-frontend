import { createSlice } from '@reduxjs/toolkit';

const Config = {
    fontSize: {
        min: 6,
        max: 60,
    },
};

export const bookReadSlice = createSlice({
    name: 'book-read',
    initialState: {
        fontSize: 16,
    },
    reducers: {
        increaseFontSize(state) {
            state.fontSize = Math.min(state.fontSize + 2, Config.fontSize.max);
        },
        decreaseFontSize(state) {
            state.fontSize = Math.max(state.fontSize - 2, Config.fontSize.min);
        },
        setFontSize(state, action) {
            state.fontSize = action.payload;
        },
    },
});

export const { actions: bookReadActions } = bookReadSlice;
export const { reducer: bookReadReducer } = bookReadSlice;
