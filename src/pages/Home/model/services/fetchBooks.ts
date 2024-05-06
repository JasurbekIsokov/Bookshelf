import axios from "axios";
import CryptoJS from "crypto-js";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../provider/StoreProvider";

import { baseUrl } from "../../../../constants/baseUrl";
import { BooksApiResponce } from "../types/booksTypes";

export const fetchBooks = createAsyncThunk<
  BooksApiResponce,
  { key: string },
  ThunkConfig<string>
>("Books", async ({ key }, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  console.log(key);

  try {
    const path = "books";

    const signStr = `GET/${path}MySecret${key}`;

    const sign = CryptoJS.MD5(signStr).toString();

    const config = {
      headers: {
        Key: key,
        Sign: sign,
      },
    };

    const response = await axios.get<BooksApiResponce>(
      `${baseUrl}/books`,
      config
    );

    return response.data;
  } catch (e: any) {
    return rejectWithValue(e.message);
  }
});
