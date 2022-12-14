import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIStatus } from "constants/http";
import { httpMerchantList } from "http/merchant/list";

export const actionMerchantList = createAsyncThunk(
  "merchant/list",
  httpMerchantList
);

export type MerchantState = {
  status: APIStatus;
};

const initialState: MerchantState = {
  status: APIStatus.IDLE,
};

const merchantSlice = createSlice({
  name: "merchant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionMerchantList.pending, (state) => {
      state.status = APIStatus.LOADING;
    });

    builder.addCase(actionMerchantList.fulfilled, (state) => {});
  },
});

export const {} = merchantSlice.actions;

export const merchantReducer = merchantSlice.reducer;
