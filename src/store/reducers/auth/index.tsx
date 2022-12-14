import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIStatus } from "constants/http";
import { httpAuthLogin, LoginResponse } from "http/auth/login";
import { httpAuthRegister, RegisterResponse } from "http/auth/register";
import { httpAuthValidate } from "http/auth/validate";

export const actionAuthLogin = createAsyncThunk("auth/login", httpAuthLogin);

export const actionAuthRegister = createAsyncThunk(
  "auth/register",
  httpAuthRegister
);

export const actionAuthValidate = createAsyncThunk(
  "auth/validate",
  httpAuthValidate
);

type AuthState = {
  status: APIStatus;
  user?: LoginResponse;
  registeredUser?: RegisterResponse;
};

const initialState: AuthState = {
  status: APIStatus.IDLE,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionAuthLogin.pending, (state) => {
      state.status = APIStatus.LOADING;
    });
    builder.addCase(actionAuthLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = APIStatus.IDLE;
    });

    builder.addCase(actionAuthValidate.pending, (state) => {
      state.status = APIStatus.LOADING;
    });

    builder.addCase(actionAuthValidate.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = APIStatus.IDLE;
    });

    builder.addCase(actionAuthRegister.pending, (state) => {
      state.status = APIStatus.LOADING;
    });

    builder.addCase(actionAuthRegister.fulfilled, (state, action) => {
      state.registeredUser = action.payload;
    });
  },
});

export const {} = authSlice.actions;

export const authReducer = authSlice.reducer;
