import { StateSchema } from "../../../../provider/StoreProvider";

export const getBooksData = (state: StateSchema) => state.books.data;

export const getBooksIsLoading = (state: StateSchema) => state.books.isLoading;

export const getBooksError = (state: StateSchema) => state.books.error;
