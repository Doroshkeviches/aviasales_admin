import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "src/constants";
import { LogIn } from "src/app/auth/types/LogInForm";
import { tokens } from "src/app/auth/types/tokens.type";


export const signin = createAsyncThunk<tokens, LogIn>("POST/login", async (body, { rejectWithValue }) => {
  try {
    const response = await axios.post(baseUrl + "/auth/admin/signin", body);
    sessionStorage.setItem('access-token', response.data.access_token)
    localStorage.setItem('refresh-token', response.data.access_token)
    return response.data
  } catch (error: any) {
    return rejectWithValue(error);
  }
});

