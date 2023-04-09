import cn from "classnames";
import s from "./index.module.css";

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "middle" | "large";
  type?: "default" | "white";
  disable?: boolean;
  className?: string;
  buttonType?: "button" | "submit" | "reset";
  [key: string]: any;
}

const Button = ({
  children,
  size = "middle",
  type = "default",
  disable = false,
  onClick,
  className,
  buttonType = "button",
  ...restProps
}: IProps) => {
  return (
    <button
      className={cn(s.btn, s[size], disable ? s.disable : s[type], className)}
      onClick={onClick}
      type={buttonType}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
