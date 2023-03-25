import cn from 'classnames';
import s from './index.module.css';

interface IProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ id, className, children }: IProps) => {
  return(
    <section {...{id}} className={cn(s.container, className)}>
      {children}
    </section>
  );
};

export default Container;
