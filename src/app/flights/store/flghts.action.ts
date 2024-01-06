import { createAsyncThunk } from "@reduxjs/toolkit";
import { Flight } from "../types/Flight.type";
import repository from "src/repository";
import { City } from "../types/City.type";
import { Paths } from "../types/Paths.type";

export const getFlights = createAsyncThunk<Paths[], { from_city: string | null, to_city: string | null, date: Date | null }>("GET/flights", async (body, { rejectWithValue }) => {
    try {
        const response = await repository.get(`/flights?from_city=${body.from_city}&to_city=${body.to_city}&date=${body.date}`);
        return response.data
    } catch (error: any) {
        return rejectWithValue(error);
    }
});

export const getCities = createAsyncThunk<City[]>("GET/Cities", async (_, { rejectWithValue }) => {
    try {
        const response = await repository.get("/city");
        return response.data
    } catch (error: any) {
        return rejectWithValue(error);
    }
});