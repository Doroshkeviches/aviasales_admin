import { createSlice } from "@reduxjs/toolkit";
import {getUsers } from "./users.action";
import { User } from "../types/User.type";

interface AuthState {
    users: User[],
    user: User | null
    pending: {
        users: boolean,
        user: boolean
    },
    errors: {
        users: null | string,
        user: null | string,

    }
}

const initialState: AuthState = {
    users: [],
    user: null,
    pending: {
        users: false,
        user: false
    },
    errors: {
        users: null,
        user: null
    }
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.pending.users = true;
                state.errors.users = null;
            })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                state.users = payload
                state.pending.users = false;
            })
            .addCase(getUsers.rejected, (state, { payload }: any) => {
                state.errors = payload.response.data.message
                state.users = []
                state.pending.users = false;
            })
    },
});


