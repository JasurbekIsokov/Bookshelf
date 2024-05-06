import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import cls from "./SignIn.module.scss";
import { classNames } from "../../helpers/classNames/classNames";

import { Button, ErrorDialog, Input, Loader } from "../../components";
import { useAppDispatch } from "../../lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCreateUser } from "../SignUp/model/services/fetchCreateUser";
import { useSelector } from "react-redux";
import {
  getCreateUserData,
  getCreateUserError,
  getCreateUserIsLoading,
} from "../SignUp/model/selector/createUserSelector";

const SignIn = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userData = useSelector(getCreateUserData);
  const userDataIsLoading = useSelector(getCreateUserIsLoading);
  const userDataError = useSelector(getCreateUserError);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Access form elements using formRef.current
    if (formRef.current) {
      const fName = formRef.current.querySelector('[name="fName"]');
      const password = formRef.current.querySelector('[name="password"]');

      if (
        fName instanceof HTMLInputElement &&
        password instanceof HTMLInputElement
      ) {
        if ((fName?.value, password?.value)) {
          dispatch(
            fetchCreateUser({
              fName: fName.value,
              password: password.value,
              path: "myself",
              method: "get",
            })
          );
        }
      }
    }
  };

  useEffect(() => {
    if (userData?.key) {
      navigate("/");
    }
  }, [userData]);

  return (
    <div>
      <div className={classNames(cls.FormWrapper)}>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={classNames(cls.Form)}
        >
          <h2 className={cls.Form__title}>Sign In</h2>

          <label htmlFor="fName" className={classNames(cls.Form__label)}>
            First Name
          </label>

          <Input
            id="fName"
            name="fName"
            type="string"
            required={true}
            minLength={3}
            placeholder="First Name"
          />

          <label htmlFor="password" className={classNames(cls.Form__label)}>
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            required={true}
            minLength={8}
            maxLength={14}
            placeholder="Password"
          />

          <Button type="submit" content="Enter" />

          <Link to="/sign-up">Sign Up</Link>
        </form>
      </div>

      {userDataIsLoading && <Loader />}

      {userDataError && <ErrorDialog isErrorProps={!false} />}
    </div>
  );
};

export default SignIn;
