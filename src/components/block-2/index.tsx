import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../basic/container';
import Card from '../basic/card';
import Icon from '../basic/icon';
import Button from '../basic/button';
import s from './index.module.css';

const Block2 = () => {
  const { t } = useTranslation();
  const data = [
    {
      icon: 'old-man',
      title: t('与苏格拉底漫步'),
      content: t('我愿用苹果全部的技术，去换和苏格拉底共度的一个下午——史蒂夫·乔布斯'),
    },
    {
      icon: 'writing',
      title: t('翻译助理'),
      content: t('为外文文字工作者提供个性化的翻译工具。'),
    },
    {
      icon: 'computer',
      title: t('代码翻译器'),
      content: t('将代码由一种编程语言翻译成另一种，这基于我们提供的文本生成型 Web App 模版开发。你可以将它部署在任何地方。'),
    },
    {
      icon: 'robot',
      title: t('AI 前端面试官'),
      content: t('扮演前端面试官，为你检验技能水平并针对你的回答给出优化建议。'),
    },
    {
      icon: 'magic',
      title: t('You can build unlimited creative,practical apps of AI.'),
    }
  ];
  return (
    <Container id='examples' className={s.container}>
      <div className={s.title}>
        {t("AI 创意嘉年华，全都由 LangGenius 创建")}
      </div>
      <div className={s.box}>
        {data.map((item) => {
          return(
            <Card className={s.card} key={item.title}>
              <div className={s.icon}>
                <Icon className={s.iconcontent} type={item.icon as any} />
              </div>
              <div className={s.header}>
                {item.title}
              </div>
              {item.content ?
                (
                  <div className={s.content}>
                    {item.content}
                  </div>
                ) : <></>}
              {item.content ?
                (
                  <div className={s.btn}>
                    <Button size='small'>{t('Go to app')}</Button>
                    <Button size='small' type='white'>{t('Learn to Build')}</Button>
                  </div>
                ) : (
                  <div className={s.btn}>
                    <Button>
                      {t('Get Started')}
                      <Icon className={s.arrow} type='arrow-white-left' />
                    </Button>
                  </div>
                )}
            </Card>
          )
        })}
      </div>
    </Container>
  );
};

export default Block2;
