import { combineReducers } from "@reduxjs/toolkit";
import { authSelector } from "./app/auth/store/auth.selector";
import { authSlice } from "./app/auth/store/auth.slice";
import { ticketsSlice } from "./app/tickets/store/tickets.slice";
import { usersSlice } from "./app/users/store/users.slice";

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    tickets: ticketsSlice.reducer,
    users: usersSlice.reducer,
})