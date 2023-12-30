import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from "src/constants";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { signin } from "./auth.actions";

interface AuthState {
  session: JwtPayload | null,
  pending: boolean,
  errors: null | string
}

function decode_user_from_token(token: string | null) {
  if (!token) return null
  const decoded = jwtDecode(token);
  return decoded
}

const initialState: AuthState = {
  session: decode_user_from_token(localStorage.getItem('refresh-token')),
  pending: false,
  errors: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, { payload }) => {
      state.session = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.pending = true;
        state.errors = null;
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        state.session = decode_user_from_token(payload.access_token);
        state.pending = false;
      })
      .addCase(signin.rejected, (state, { payload }: any) => {
        state.errors = payload.response.data.message
        state.pending = false;
      })
  },
});

export const checkAuth = async (dispatch: any) => {
  const refresh_token = localStorage.getItem('refresh-token')
  try {
    const response = await axios.get(baseUrl + '/auth/refresh', {
      headers: {
        Authorization: `Berear ${refresh_token}`
      }
    })
    localStorage.setItem('refresh-token', response.data.refresh_token)
    sessionStorage.setItem('access-token', response.data.access_token)
    dispatch(setSession(decode_user_from_token(response.data.access_token)))
  } catch (error) {
    console.log(error, 'autoAuthError')
  }
}

export const { setSession } = authSlice.actions
