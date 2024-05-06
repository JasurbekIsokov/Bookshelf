import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CryptoJS from "crypto-js";
import { Button } from "@mui/material";

import cls from "./Home.module.scss";
import { classNames } from "../../../helpers/classNames/classNames";

import { fetchBooks } from "../model/services/fetchBooks";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch/useAppDispatch";
import { getCreateUserData } from "../../SignUp/model/selector/createUserSelector";

import {
  getBooksData,
  getBooksError,
  getBooksIsLoading,
} from "../model/selector/booksSelector";

import { baseUrl } from "../../../constants/baseUrl";
import { BooksApiResponce } from "../model/types/booksTypes";
import { BookCard, ErrorDialog, Loader } from "../../../components";

const Home = () => {
  const dispatch = useAppDispatch();

  const userData = useSelector(getCreateUserData);

  const booksData = useSelector(getBooksData);
  const booksDataIsLoading = useSelector(getBooksIsLoading);
  const booksDataError = useSelector(getBooksError);

  useEffect(() => {
    if (userData && userData.key) {
      dispatch(
        fetchBooks({
          key: userData.key,
        })
      );
    }
  }, [dispatch]);

  const createBook = async (key: string) => {
    try {
      const path = "books";

      const signStr = `POST/${path}MySecret${key}`;
      const sign = CryptoJS.MD5(signStr).toString();

      const config = {
        headers: {
          Key: key,
          Sign: sign,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const data = new URLSearchParams();
      data.append("isbn", "9781118464465");

      const response = await axios.post<BooksApiResponce>(
        `${baseUrl}/books`,
        data,
        config
      );

      return response.data;
    } catch (e: any) {
      console.log(e);
    }
  };

  const handleClickCreateBook = () => {
    console.log("click");

    if (userData && userData.key) {
      createBook(userData.key);
    }
  };

  const BookDataForTest = [
    {
      book: {
        id: 21,
        isbn: "9781118464465",
        title: "Raspberry Pi User Guide",
        cover: "http://url.to.book.cover",
        author: "Eben Upton",
        published: 2012,
        pages: 221,
      },
      status: 0,
    },
    {
      book: {
        id: 21,
        isbn: "9781118464465",
        title: "Raspberry Pi User Guide",
        cover: "http://url.to.book.cover",
        author: "Eben Upton",
        published: 2012,
        pages: 221,
      },
      status: 1,
    },
    {
      book: {
        id: 21,
        isbn: "9781118464465",
        title: "Raspberry Pi User Guide",
        cover: "http://url.to.book.cover",
        author: "Eben Upton",
        published: 2012,
        pages: 221,
      },
      status: 2,
    },
    {
      book: {
        id: 21,
        isbn: "9781118464465",
        title: "Raspberry Pi User Guide",
        cover: "http://url.to.book.cover",
        author: "Eben Upton",
        published: 2012,
        pages: 221,
      },
      status: 0,
    },
    {
      book: {
        id: 21,
        isbn: "9781118464465",
        title: "Raspberry Pi User Guide",
        cover: "http://url.to.book.cover",
        author: "Eben Upton",
        published: 2012,
        pages: 221,
      },
      status: 1,
    },
    {
      book: {
        id: 21,
        isbn: "9781118464465",
        title: "Raspberry Pi User Guide",
        cover: "http://url.to.book.cover",
        author: "Eben Upton",
        published: 2012,
        pages: 221,
      },
      status: 2,
    },
  ];

  return (
    <div>
      <h2 className={classNames(cls.testTitle)}>
        Menda backenddan kelayotgan Bookning datasi null keldi. Shu sababli test
        uchun booklarni statik render qildim. Barchasi RTK query orqali amalga
        oshirildi, birgina data null bo'lib kelganligi sababli booklarni statik
        render qildim
      </h2>
      {/* <h2>Books are not available</h2> */}
      <div className={classNames(cls.BooksContainer)}>
        {BookDataForTest.map((bookData) => (
          <BookCard
            name={bookData.book.title}
            author={bookData.book.author}
            published={bookData.book.published}
            pages={bookData.book.pages}
            status={bookData.status}
          />
        ))}
      </div>
      {/* <Button type="button" onClick={handleClickCreateBook}>
        Create Book
      </Button> */}
      {booksDataIsLoading && <Loader />}
      {booksDataError && <ErrorDialog isErrorProps={!false} />}
    </div>
  );
};

export default Home;
