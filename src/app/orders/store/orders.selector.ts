import { RootState } from "src/store";

export const ordersSelector = (state: RootState) => state.orders.orders
export const ordersPendingSelector = (state: RootState) => state.orders.pending.orders
export const ordersErrorsSelector = (state: RootState) => state.orders.errors.orders
