import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
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
          <Link href='#examples'>{t('案例')}</Link>
          <Link href='#features'>{t('特性')}</Link>
          <a target='_blank' rel='noreferrer' href={`https://docs.langgenius.ai${i18n.language === 'zh' ? '/zh-hans' : ''}`}>{t('文档')}</a>
        </div>
        <div className={s.view}>
          <div>{t('登录')}</div>
          <Button>{t('获知更新')}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
