import { StateSchema } from "../../../../provider/StoreProvider";

export const getCreateUserData = (state: StateSchema) => state.createUser.data;

export const getCreateUserIsLoading = (state: StateSchema) =>
  state.createUser.isLoading;

export const getCreateUserError = (state: StateSchema) =>
  state.createUser.error;
