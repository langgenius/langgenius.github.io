import { useTranslation } from 'react-i18next';
import Button from '../basic/button';
import Link from '../basic/link';
import s from './index.module.css';

const Header = () => {
  const { t } = useTranslation();
  return(
    <nav className={s.header}>
      <div className={s.center}>
        <div className={s.ctrl}>
          <div className={s.logo}></div>
          <Link href='#'>{t('案例')}</Link>
          <Link href='#'>{t('特性')}</Link>
          <Link href='#'>{t('文档')}</Link>
        </div>
        <div className={s.view}>
          <Link>{t('登录')}</Link>
          <Button>{t('获知更新')}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
