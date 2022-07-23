import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tokenSlice from "./token.js";

const reducers = combineReducers({
    token: tokenSlice.reducer,
});

const store = configureStore({ reducer: reducers });

export default store;
