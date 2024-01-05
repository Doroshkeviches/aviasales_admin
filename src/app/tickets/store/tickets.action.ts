import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SithUpForm } from "src/app/auth/types/SignUpForm";
import { baseUrl } from "src/constants";
import { LogIn } from "src/app/auth/types/LogInForm";
import { tokens } from "src/app/auth/types/tokens.type";
import repository from "src/repository";
import { Ticket } from "../types/ticket.type";


export const getTickets = createAsyncThunk<Ticket[]>("Get/tickets", async (_, { rejectWithValue }) => {
    try {
        const response = await repository.get("/ticket");
        console.log(response)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error);
    }
});

