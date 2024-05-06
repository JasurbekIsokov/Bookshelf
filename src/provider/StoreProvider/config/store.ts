import { Reducer } from "redux";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { $api } from "../../../utils/api/api";
import { rtkApi } from "../../../utils/api/rtkApi";

import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { createReducerManager } from "./reducerManager";
import { userCreateReducer } from "../../../pages/SignUp/model/slice/userCreateSlice";
import { allBooksReducer } from "../../../pages/Home/model/slice/booksSlice";

type CombinedState<S> = {
  [K in keyof S]: S[K];
};

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,

    createUser: userCreateReducer,
    books: allBooksReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
