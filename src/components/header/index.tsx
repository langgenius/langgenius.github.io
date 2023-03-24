import Button from '../basic/button';
import Link from '../basic/link';
import s from './index.module.css';

const Header = () => {
  return(
    <nav className={s.header}>
      <div className={s.center}>
        <div className={s.ctrl}>
          <div className={s.logo} />
          <Link>案例</Link>
          <Link>特性</Link>
          <Link>文档</Link>
        </div>
        <div className={s.view}>
          <Link>登录</Link>
          <Button>获知更新</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
