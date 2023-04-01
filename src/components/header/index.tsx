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
          <a href="/" className={s.logo}>
          </a>
          <Link href='#examples'>{t('案例')}</Link>
          <Link href='#features'>{t('特性')}</Link>
          <Link target='_blank' rel='noreferrer' href={`https://docs.langgenius.ai${i18n.language === 'zh' ? '/zh-hans' : ''}`}>{t('文档')}</Link>
        </div>
        <div className={s.view}>
          <Link href='https://cloud.langgenius.ai' target="_blank">{t('登录')}</Link>
          <Button>{t('获知更新')}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
