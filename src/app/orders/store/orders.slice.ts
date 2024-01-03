import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "./orders.actions";

interface InitialState {
  orders: any,
  pending: {
    orders: boolean
  },
  errors: {
    orders: null | string
  }
}
const initialState: InitialState = {
  orders: [],
  pending: {
    orders: false
  },
  errors: {
    orders: null
  }
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.pending.orders = true;
        state.errors.orders = null;
      })
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.orders = payload
        state.pending.orders = false;
      })
      .addCase(getOrders.rejected, (state, { payload }: any) => {
        state.errors = payload.response.data.message
        state.pending.orders = false;
      })
  },
});

