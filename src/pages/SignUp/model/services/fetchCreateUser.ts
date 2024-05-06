import axios from "axios";
import CryptoJS from "crypto-js";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../provider/StoreProvider";
import { apiResponceuserData } from "../types/userDataType";
import { baseUrl } from "../../../../constants/baseUrl";

export const fetchCreateUser = createAsyncThunk<
  apiResponceuserData,
  {
    fName: string;
    email?: string;
    password: string;
    path: "myself" | "signup";
    method: "get" | "post";
  },
  ThunkConfig<string>
>("Create user", async ({ fName, email, password, path, method }, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    if (method === "get") {
      const signStr = `GET/${path}MySecret${password}`;

      const sign = CryptoJS.MD5(signStr).toString();

      const config = {
        headers: {
          Key: password,
          Sign: sign,
        },
      };

      const response = await axios.get<apiResponceuserData>(
        `${baseUrl}/${path}`,
        config
      );

      return response.data;
    } else if (method === "post") {
      const data = {
        name: fName,
        email: email,
        key: password,
        secret: `MySecret${password}`,
      };

      const config = {
        headers: {
          Key: `${password}`,
          Sign: `sign`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post<apiResponceuserData>(
        `${baseUrl}/${path}`,
        data,
        config
      );

      return response.data;
    }
  } catch (e: any) {
    return rejectWithValue(e.message);
  }
});
