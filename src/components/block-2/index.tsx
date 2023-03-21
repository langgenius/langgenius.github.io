import s from './index.module.css';

const data = [
  {
    icon: 'old-man',
    title: '与苏格拉底漫步',
    content: '我愿用苹果全部的技术，去换和苏格拉底共度的一个下午——史蒂夫·乔布斯',
  }
];

const Block2 = () => {
  return (
    <div className={s.container}>
      <div className={s.title}></div>
    </div>
  );
};

export default Block2;
