import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
    name: 'token',
    initialState: "",
    reducers: {
        setToken(state, action) {
            state = action.payload;
        },
        deleteToken(state, action) {
            state = "";
        },
    }
});

export const { setToken, deleteToken } = tokenSlice.actions;

export default tokenSlice;