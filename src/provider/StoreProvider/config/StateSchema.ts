import { AxiosInstance } from "axios";

import {
  Reducer,
  AnyAction,
  EnhancedStore,
  ReducersMapObject,
} from "@reduxjs/toolkit";

import { rtkApi } from "../../../utils/api/rtkApi";
import { userDataSchema } from "../../../pages/SignUp/model/types/userDataSchema";
import { BooksSchema } from "../../../pages/Home/model/types/booksTypeSchema";

type CombinedState<S> = {
  [K in keyof S]: S[K];
};

export interface StateSchema {
  createUser: userDataSchema;
  books: BooksSchema;

  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  [x: string]: any;
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
