import { memo, ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import cls from "./MainLayout.module.scss";
import { classNames } from "../../helpers/classNames/classNames";
import { SignIn, SignUp } from "../../pages";

import { useSelector } from "react-redux";
import {
  getCreateUserData,
  getCreateUserError,
  getCreateUserIsLoading,
} from "../../pages/SignUp/model/selector/createUserSelector";

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
}

const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, header } = props;
  const navigate = useNavigate();

  const location = useLocation();
  const userData = useSelector(getCreateUserData);
  const userDataIsLoading = useSelector(getCreateUserIsLoading);
  const userDataError = useSelector(getCreateUserError);

  useEffect(() => {
    if (!userData?.key && !userDataIsLoading && !userDataError) {
      navigate("/sign-in");
    }
  }, [userData]);

  return (
    <div>
      {location.pathname === "/sign-in" ? (
        <SignIn />
      ) : location.pathname === "/sign-up" ? (
        <SignUp />
      ) : (
        <div className={classNames(cls.MainLayout, {}, [className])}>
          <div className={cls.header}>{header}</div>

          <div className={cls.content}>{content}</div>
        </div>
      )}
    </div>
  );
});

export default MainLayout;
