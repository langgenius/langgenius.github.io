import { useTranslation } from "react-i18next";
import cn from "classnames";
import Container from "../basic/container";
import Card from "../basic/card";
import Icon from "../basic/icon";
import s from "./index.module.css";

const Block4 = () => {
  const { t } = useTranslation();
  const data = [
    {
      img: "block4-1",
      title: t("OpenAI GPT-4"),
      content: t("最具开创性的 AI 模型，智能语言处理的颠覆性进步。"),
    },
    {
      img: "block4-2",
      title: t("OpenAI ChatGPT-3.5"),
      content: t("卓越的人工智能对话体验，提供多场景应用支持。"),
    },
    {
      img: "block4-3",
      title: t("OpenAI GPT-3(Davinci)"),
      content: t("理解和生成自然语言，支持微调，训练你的 AI 模型。"),
    },
  ];
  const lastMode = {
    title: t("更多模型支持中"),
    content:
      t("除了 OpenAI 的 GPT 系列，LangGenius 将陆续支持更多大型语言模型。请向我们反馈，或在开源社区参与开发。"),
    btn: t("更多模型支持中")
  };
  return (
    <Container className={s.container}>
      <div className={s.title}>{t("与广受欢迎的 LLMs 一同进步")}</div>
      <div className={s.box}>
        {data.map((item) => {
          return (
            <Card className={s.card}>
              <div className={s.header}>{item.title}</div>
              <div className={s.content}>{item.content}</div>
              <div className={cn(s.bg, s[item.img])}></div>
            </Card>
          );
        })}
        <Card className={s.card}>
          <Icon className={s.icon} type="dot" />
          <div className={s.header}>{lastMode.title}</div>
          <div className={s.content}>{lastMode.content}</div>
          <div className={s.btn}>
            {lastMode.btn}
            <Icon className={s.arrow} type="arrow-blue-w-left" />
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Block4;
