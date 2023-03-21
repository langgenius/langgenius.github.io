import s from './index.module.css';

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: IProps) => {
  return (
    <label className={s.btn}>
      {children}
    </label>
  )
};

export default Button;
