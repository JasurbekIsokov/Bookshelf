import React from "react";

import cls from "./Book.module.scss";
import { classNames } from "../../helpers/classNames/classNames";

interface BookProps {
  name: string;
  author: string;
  published: number;
  pages: number;
  status: number;
}

const Book = ({ name, author, published, pages, status }: BookProps) => {
  return (
    <div className={classNames(cls.BookCard)}>
      <div className={classNames(cls.BookCard__title)}>
        <h2> {name}</h2>
      </div>
      <div className={classNames(cls.BookCard__info)}>
        <div className={classNames(cls["BookCard__info--author"])}>
          <p>
            Author: <span>{author}</span>
          </p>
        </div>

        <div className={classNames(cls["BookCard__info--pages"])}>
          <p>
            Published: <span>{published}</span>
          </p>
          <p>
            Pages: <span>{pages}</span>
          </p>
        </div>

        <div className={classNames(cls["BookCard__info--status"])}>
          <div
            className={classNames(cls.BookCardStatusSircle, {
              ["statusNewSircle"]: status === 0,
              ["statusReadingSircle"]: status === 1,
              ["statusCompletedSircle"]: status === 2,
            })}
          />
          <p
            className={classNames(cls.BookCardStatusTitle, {
              ["statusNew"]: status === 0,
              ["statusReading"]: status === 1,
              ["statusCompleted"]: status === 2,
            })}
          >
            {status === 0 ? "New" : status === 1 ? "Reading" : "Completed"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
