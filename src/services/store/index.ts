import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { usersReducer } from "../search/reducer";

export const rootReducer = combineReducers({
    users: usersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});
