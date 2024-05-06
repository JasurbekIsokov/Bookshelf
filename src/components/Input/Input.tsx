import { useState } from "react";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import cls from "./Input.module.scss";
import { classNames } from "../../helpers/classNames/classNames";

interface InputProps {
  id?: string;
  name?: string;
  type: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  required: boolean;
}

const Input = ({
  id,
  name,
  type,
  required,
  maxLength,
  minLength,
  placeholder,
}: InputProps) => {
  const [hideEye, setHideEye] = useState(false);

  return (
    <div className={cls.InputWrapper}>
      <input
        id={id}
        name={name}
        className={classNames(cls.Input)}
        type={hideEye ? "text" : type}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
      />

      {hideEye && type === "password" ? (
        <RemoveRedEyeIcon
          onClick={() => setHideEye(false)}
          className={cls.FixValueBnt}
        />
      ) : type === "password" ? (
        <VisibilityOffIcon
          onClick={() => setHideEye(true)}
          className={cls.FixValueBnt}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
