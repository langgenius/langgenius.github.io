import { useTranslation } from "react-i18next";
import cn from "classnames";
import Container from "../basic/container";
import Card from "../basic/card";
import s from "./index.module.css";
import Button from "../basic/button";
import Icon from "../basic/icon";

const Block5 = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("过去"),
      subTitle: t("需要两周或更多时间"),
      list: [
        { title: t("准备一个 OpenAI 调用密钥") },
        { title: t("通过编写代码调试 Prompt") },
        { title: t("学习诸如“微调”之类的晦涩概念") },
        { title: t("准备结构化的数据集") },
        { title: t("在服务器上部署应用与向量数据库") },
        { title: t("盲盒般运营…可能得开发个后台？") },
        { title: t("天知道还有啥？") },
      ],
      footer: {
        title: t("组上一帮子人"),
        list: [
          "Product Designer",
          "UI designer",
          "UI designer",
          "back-end engineer",
          "Data Analyst (😭Unable to Work)",
        ],
      },
    },
    {
      active: true,
      title: t("现在"),
      subTitle: t("在 LangGenius 上 5 分钟完成"),
      btn: "构建一个自己的 AI 应用",
      list: [
        { title: t("准备一个 OpenAI 调用密钥") },
        { title: t("可视化的创建 App") },
        { title: t("直接发布，或集成 WebAPI 到你的应用") },
        { title: t("持续运营、分析和训练") },
      ],
      footer: {
        title: t("一个聪明的家伙就够了"),
        list: ["🤠 Prompt Engineer", "Anyone else"],
      },
    },
  ];

  return (
    <Container className={s.container}>
      <div className={s.title}>{t("AI 解放生产力，开发 AI 也别使蛮力")}</div>
      <div className={s.box}>
        {data.map((item, id) => {
          return (
            <Card
              key={id * 4 + 3}
              className={cn(s.card, item.active ? "" : s.gray)}
            >
              <div className={s.header}>{item.title}</div>
              <div className={s.subtitle}>{item.subTitle}</div>
              {item.btn && (
                <Button className={s.btn}>
                  {t("构建一个自己的 AI 应用")}
                  <Icon className={s.icon} type="arrow-white-left" />
                </Button>
              )}
              <div className={s.list}>
                {item.list.map((listItem, index) => {
                  return (
                    <div key={id * index + 4} className={cn(s.item)}>
                      <div
                        className={cn(s.rank, item.active ? s.rankactive : "")}
                      >
                        {index + 1}
                      </div>
                      <div className={s.text}>{listItem.title}</div>
                    </div>
                  );
                })}
              </div>
              <div className={s.divider} />
              <div className={s.footertitle}>{item.footer.title}</div>
              <div className={s.people}>
                {item.footer.list.map((people, key) => {
                  return (
                    <div
                      key={key * 5 + 5}
                      className={cn(
                        s.peopleitem,
                        item.active ? s.peopleactive : ""
                      )}
                    >
                      {people}
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Block5;
