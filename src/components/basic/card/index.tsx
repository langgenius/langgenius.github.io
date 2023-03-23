import cn from 'classnames';
import s from './index.module.css';

interface IProps {
  children: React.ReactNode;
  [key: string]: any;
}

const Card = ({ children, className, ...restProps }: IProps) => {
  return (
    <div className={cn(s.card, className)} {...restProps}>
      {children}
    </div>
  )
};

export default Card;
