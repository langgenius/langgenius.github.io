
import cn from 'classnames';
import s from './index.module.css';

interface IProps {
  type: 'horn' | 'arrow-blue-left' | 'github'
  className?: string;
}
const Icon = ({ type, className }: IProps) => {
  return(
    <div className={cn(s.container, s[type], className)}></div>
  )
};

export default Icon;
