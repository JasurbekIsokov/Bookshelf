export interface Book {
  isbn: string;
  title: string;
  cover: string;
  author: string;
  published: number;
}

export interface BooksApiResponce {
  data: Book[];
  isOk: boolean;
  message: string;
}
