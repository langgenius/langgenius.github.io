import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Button from '../basic/button';
import Link from '../basic/link';
import s from './index.module.css';
import ChimpDialog from '../chimp-dialog';
import { useCallback, useState } from 'react';

const Header = () => {
  const { t } = useTranslation();
  const [isChimpVisible, setIsChimpVisible] = useState(false)
  const onSignIn = useCallback(() => {
    window.gtag_report_conversion();
    window.open("https://cloud.langgenius.ai", "_blank");
  }, []);

  return (
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
          <Link onClick={onSignIn}>{t('登录')}</Link>
          <Button onClick={() => setIsChimpVisible(true)}>{t('获知更新')}</Button>
        </div>
        <ChimpDialog open={isChimpVisible} onClose={() => setIsChimpVisible(false)} />
      </div>
    </nav>
  );
};

export default Header;
