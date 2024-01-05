import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "src/repository";
import { User } from "../types/User.type";


export const getUsers = createAsyncThunk<User[], number>("Get/users", async (page, { rejectWithValue }) => {
    try {
        const response = await repository.get(`/user?page=${page}`);
        console.log(response)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error);
    }
});

export const getUser = createAsyncThunk<User, string>("Get/user", async (id, { rejectWithValue }) => {
    try {
        const response = await repository.get(`/user/${id}`);
        console.log(response)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error);
    }
});

