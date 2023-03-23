import cn from 'classnames';
import s from './index.module.css';

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'middle' | 'large';
  type?: 'default' | 'white';
}

const Button = ({ children, size = 'middle', type = 'default', onClick }: IProps) => {
  return (
    <label className={cn(s.btn, s[size], s[type])} onClick={onClick}>
      {children}
    </label>
  )
};

export default Button;
