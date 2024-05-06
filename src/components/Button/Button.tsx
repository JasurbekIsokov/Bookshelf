import cls from "./Button.module.scss";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  content: string;
}

const Button = ({ type, content }: ButtonProps) => {
  return (
    <div className={cls.BtnWrapper}>
      <button type={type}>{content}</button>
    </div>
  );
};

export default Button;
