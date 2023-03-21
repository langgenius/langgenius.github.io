import Container from '../basic/container';
import s from './index.module.css';

const Block1 = () => {
  return (
    <Container className={s.container}>
      <div className={s.top}></div>
      <div className={s.img} />
    </Container>
  );
};

export default Block1;
