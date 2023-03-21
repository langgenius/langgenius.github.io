import cn from 'classnames';
import Header from './header';
import Block1 from './block-1';
import Block2 from './block-2';
import s from './index.module.css';

const Container = () => {
  return (
    <div className={s.box}>
      <Header />
      <div className={s.container}>
        <div className={cn(s.center)}>
          <Block1 />
          <Block2 />
        </div>
      </div>
      <div className={s.footer}>#footer</div>
    </div>
  )
};

export default Container;
