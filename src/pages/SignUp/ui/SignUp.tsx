import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import cls from "./SignUp.module.scss";
import { classNames } from "../../../helpers/classNames/classNames";

import { Button, Input, Loader, ErrorDialog } from "../../../components";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCreateUser } from "../model/services/fetchCreateUser";
import {
  getCreateUserData,
  getCreateUserError,
  getCreateUserIsLoading,
} from "../model/selector/createUserSelector";

const SignUp = () => {
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
      const email = formRef.current.querySelector('[name="email"]');
      const password = formRef.current.querySelector('[name="password"]');

      if (
        fName instanceof HTMLInputElement &&
        email instanceof HTMLInputElement &&
        password instanceof HTMLInputElement
      ) {
        if ((fName?.value, email?.value, password?.value)) {
          dispatch(
            fetchCreateUser({
              fName: fName.value,
              email: email.value,
              password: password.value,
              path: "signup",
              method: "post",
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

          <label htmlFor="email" className={classNames(cls.Form__label)}>
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required={true}
            minLength={3}
            placeholder="Email"
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

          <Link to="/sign-in">Sign In</Link>
        </form>
      </div>

      {userDataIsLoading && <Loader />}

      {userDataError && <ErrorDialog isErrorProps={!false} />}
    </div>
  );
};

export default SignUp;
