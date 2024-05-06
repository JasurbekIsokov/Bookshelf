import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { apiResponceuserData } from "../types/userDataType";
import { userDataSchema } from "../types/userDataSchema";
import { fetchCreateUser } from "../services/fetchCreateUser";

const initialState: userDataSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const createUserSlice = createSlice({
  name: "create user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateUser.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCreateUser.fulfilled,
        (state, action: PayloadAction<apiResponceuserData>) => {
          state.isLoading = false;

          state.data = action.payload.data;
        }
      )
      .addCase(fetchCreateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: userCreateActions } = createUserSlice;
export const { reducer: userCreateReducer } = createUserSlice;
