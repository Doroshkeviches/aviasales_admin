import { RootState } from "src/store";

export const usersSelector = (state: RootState) => state.users.users
export const usersErrorsSelector = (state: RootState) => state.users.errors.users
export const usersPendingSelector = (state: RootState) => state.users.pending.users

export const userSelector = (state: RootState) => state.users.user
export const userErrorsSelector = (state: RootState) => state.users.errors.user
export const userPendingSelector = (state: RootState) => state.users.pending.user
