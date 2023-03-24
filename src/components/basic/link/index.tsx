/* eslint-disable jsx-a11y/anchor-is-valid */
import s from './index.module.css';

interface IProps {
  href?: string;
  children?: React.ReactNode
}

const Link = ({ children, href }: IProps) => {
  return(
    <a className={s.link} href={href}>
      {children}
    </a>
  );
}

export default Link;
