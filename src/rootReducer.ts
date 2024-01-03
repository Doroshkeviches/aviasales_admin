import { combineReducers } from "@reduxjs/toolkit";
import { authSelector } from "./app/auth/store/auth.selector";
import { authSlice } from "./app/auth/store/auth.slice";
export const rootReducer = combineReducers({
    auth: authSlice.reducer,
})