import { Book } from "./booksTypes";

export interface BooksSchema {
  isLoading: boolean;
  error: undefined;
  data: Book[];
}
