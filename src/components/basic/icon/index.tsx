import cn from "classnames";
import s from "./index.module.css";

interface IProps {
  type:
    | "horn"
    | "arrow-blue-left"
    | "github"
    | "old-man"
    | "writing"
    | "computer"
    | "robot"
    | "magic"
    | "arrow-white-left"
    | "vector"
    | "terminal"
    | "paper-airplane"
    | "clipboard-list"
    | "dot"
    | "arrow-blue-w-left"
    | "discord"
    | "language"
    | "tranggle-down";

  className?: string;
}
const Icon = ({ type, className }: IProps) => {
  return <div className={cn(s.container, s[type], className)}></div>;
};

export default Icon;
