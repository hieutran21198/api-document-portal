import { RootState } from "store";

export const selectAuth = (state: RootState) => state.auth;

export const selectRegisteredUser = (state: RootState) =>
  state.auth.registeredUser;
