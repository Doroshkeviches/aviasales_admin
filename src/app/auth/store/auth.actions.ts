import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SithUpForm } from "src/app/auth/types/SignUpForm";
import { LogIn } from "src/app/auth/types/LogInForm";
import { tokens } from "src/app/auth/types/tokens.type";
import { ResetToken } from "../types/ResetToken.type";
import { ForgotPassword } from "../types/ForgotPassword.type";
import { ResetPassword } from "../types/ResetPassword.type";

const baseUrl = process.env.BASE_URL
export const signin = createAsyncThunk<tokens, LogIn>("POST/signin", async (body, { rejectWithValue }) => {
  try {
    const device_id = localStorage.getItem('device_id')
    const response = await axios.post(baseUrl + "/auth/admin/signin", { ...body, device_id });
    sessionStorage.setItem('access-token', response.data.access_token)
    localStorage.setItem('refresh-token', response.data.access_token)
    return response.data
  } catch (error: any) {
    return rejectWithValue(error);
  }
});


export const forgotPassword = createAsyncThunk<ResetToken, ForgotPassword>("POST/forgot-password", async (body, { rejectWithValue }) => {
  try {
    const device_id = localStorage.getItem('device_id')
    const response = await axios.post(baseUrl + "/auth/forgot-password", { ...body, device_id });
    return response.data
  } catch (error: any) {
    return rejectWithValue(error);
  }
});


export const resetPassword = createAsyncThunk<tokens, ResetPassword>("POST/reset-password", async (body, { rejectWithValue }) => {
  try {
    const device_id = localStorage.getItem('device_id')
    const refresh_token = sessionStorage.getItem('reset-token')
    const response = await axios.post(baseUrl + "/auth/reset-password", { ...body, device_id, refresh_token });
    sessionStorage.setItem('access-token', response.data.access_token)
    localStorage.setItem('refresh-token', response.data.access_token)
    return response.data
  } catch (error: any) {
    return rejectWithValue(error);
  }
});

