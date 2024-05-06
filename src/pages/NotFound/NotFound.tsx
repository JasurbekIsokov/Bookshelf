import { classNames } from "../../helpers/classNames/classNames";

import cls from "./NotFound.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFound = ({ className }: NotFoundPageProps) => {
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      Page Not Found
    </div>
  );
};

export default NotFound;
