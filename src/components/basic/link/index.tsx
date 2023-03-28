/* eslint-disable jsx-a11y/anchor-is-valid */
import s from "./index.module.css";

interface IProps {
  href?: string;
  children?: React.ReactNode;
  target?: String;
  [key: string]: any;
}

const Link = ({ children, href, target, restProps }: IProps) => {
  return (
    <a className={s.link} href={href} target={target} { ...restProps }>
      {children}
    </a>
  );
};

export default Link;
