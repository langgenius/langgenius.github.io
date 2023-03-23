import cn from 'classnames';
import s from './index.module.css';

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'middle' | 'large'
}

const Button = ({ children, size = 'middle', onClick }: IProps) => {
  return (
    <label className={cn(s.btn, s[size])} onClick={onClick}>
      {children}
    </label>
  )
};

export default Button;
