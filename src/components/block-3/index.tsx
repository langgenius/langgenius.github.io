import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../basic/container';
import Icon from '../basic/icon';
import s from './index.module.css';
import vectorImg from '../../assets/vector.svg';
import terminalImg from '../../assets/terminal.svg';
import paperAirplaneImg from '../../assets/paper-airplane.svg';
import clipboardListImg from '../../assets/clipboard-list.svg';

const Block3 = () => {
  const { t } = useTranslation();
  const [activeImg, setActiveImg] = useState(vectorImg);
  const data = [
    {
      icon: 'vector',
      title: t('快速创建 AI 应用'),
      content: t('简单几步就可以快速生成漂亮的 AI 应用，无需编码完成基于 GPT 的产品，你甚至可将它部署到 Vercel。'),
      img: vectorImg
    },
    {
      icon: 'terminal',
      title: t('增强且易用的 WebAPI'),
      content: t('省掉后端开发环节，在 LangGenius 上直接部署 WebAPI，基于 HybridPrompt 语法开发强大应用，每个应用都能独立鉴权。'),
      img: terminalImg
    },
    {
      icon: 'paper-airplane',
      title: t('运营可视化'),
      content: t('在易用的界面上分析你的应用状态、用量与费用，基于日志标记数据集，持续微调你的模型，让你的 AI 应用日渐成长。'),
      img: paperAirplaneImg
    },
    {
      icon: 'clipboard-list',
      title: t('释放 GPT 的全部潜力'),
      content: t('基于你的内容训练专属 AI 模型。利用上下文增强能力突破 GPT 的 4096 字节的限制。'),
      img: clipboardListImg
    },
  ];
  return (
    <Container id='features' className={s.container}>
      <div className={s.left}>
        {data.map(item => {
          return(
            <div className={s.card} onClick={() => setActiveImg(item.img)}>
              <div className={s.icon}>
                <Icon className={s.iconinner} type={item.icon as any} />
              </div>
              <div>
                <div className={s.header}>{item.title}</div>
                <div className={s.content}>{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.img}>
        <img alt='' src={activeImg} />
      </div>
    </Container>
  );
};

export default Block3;
