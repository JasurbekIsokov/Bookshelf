import { useEffect } from "react";
import cls from "./Loader.module.scss";
import { classNames } from "../../helpers/classNames/classNames";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <div className={cls.Loader__box} />
    </div>
  );
};

export default Loader;
