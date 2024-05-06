import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchBooks } from "../services/fetchBooks";
import { BooksApiResponce } from "../types/booksTypes";
import { BooksSchema } from "../types/booksTypeSchema";

const initialState: BooksSchema = {
  isLoading: false,
  error: undefined,
  data: [],
};

export const AllBooksSlice = createSlice({
  name: "create user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<BooksApiResponce>) => {
          state.isLoading = false;

          state.data = action.payload.data;
        }
      )
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: allBooksActions } = AllBooksSlice;
export const { reducer: allBooksReducer } = AllBooksSlice;
