import cn from 'classnames';
import s from './index.module.css';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return(
    <section className={cn(s.container, className)}>
      {children}
    </section>
  );
};

export default Container;
