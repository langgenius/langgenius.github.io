import Button from '../basic/button';
import s from './index.module.css';

const Header = () => {
  return(
    <div className={s.header}>
      <div className={s.center}>
        <div className={s.ctrl}>
          <div className={s.logo} />
          <label>案例</label>
          <label>特性</label>
          <label>文档</label>
        </div>
        <div className={s.view}>
          <label>登录</label>
          <Button>获知更新</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
