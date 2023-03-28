import cn from "classnames";
import s from "./index.module.css";

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "middle" | "large";
  type?: "default" | "white";
  disable?: boolean;
  [key: string]: any;
}

const Button = ({
  children,
  size = "middle",
  type = "default",
  disable = false,
  onClick,
  ...restProps
}: IProps) => {
  return (
    <label
      className={cn(s.btn, s[size], disable ? s.disable : s[type])}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </label>
  );
};

export default Button;
