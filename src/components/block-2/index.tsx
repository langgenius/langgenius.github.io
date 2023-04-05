import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Container from "../basic/container";
import Card from "../basic/card";
import Icon from "../basic/icon";
import Button from "../basic/button";
import s from "./index.module.css";

const Block2 = () => {
  const { t } = useTranslation();
  const local = i18next.language;
  const data = [
    {
      icon: "old-man",
      title: t("与苏格拉底漫步"),
      content: t(
        "我愿用苹果全部的技术，去换和苏格拉底共度的一个下午——史蒂夫·乔布斯"
      ),
      link:
        local === "zh"
          ? "https://langgenius.app/chat/hHHwxiorZ4XaWSV5"
          : "https://langgenius.app/chat/mx1C9IN0eJcBKNlO",
      learn:
        local === "zh"
          ? "https://docs.langgenius.ai/zh-hans/application/creating-an-application"
          : "https://docs.langgenius.ai/en/application/creating-an-application",
    },
    {
      icon: "writing",
      title: t("翻译助理"),
      content: t("为外文文字工作者提供个性化的翻译工具。"),
      link:
        local === "zh"
          ? "https://langgenius.app/completion/F68G7B8bzk1hoqtA"
          : "https://langgenius.app/completion/eu92JaoaD1qphwGm",
      learn:
        local === "zh"
          ? "https://docs.langgenius.ai/zh-hans/application/creating-an-application"
          : "https://docs.langgenius.ai/en/application/creating-an-application",
    },
    {
      icon: "computer",
      title: t("代码翻译器"),
      content: t(
        "将代码由一种编程语言翻译成另一种，这基于我们提供的文本生成型 Web App 模版开发。你可以将它部署在任何地方。"
      ),
      link:
        local === "zh"
          ? "https://langgenius.app/completion/40ddg3LbHIhOKl5h"
          : "https://langgenius.app/completion/aeFTj0VCb3Ok3TUE",
      learn:
        local === "zh"
          ? "https://docs.langgenius.ai/zh-hans/application/creating-an-application"
          : "https://docs.langgenius.ai/en/application/creating-an-application",
    },
    {
      icon: "robot",
      title: t("AI 前端面试官"),
      content: t(
        "扮演前端面试官，为你检验技能水平并针对你的回答给出优化建议。"
      ),
      link:
        local === "zh"
          ? "https://langgenius.app/chat/oVNMvO96PQl4iZiN"
          : "https://langgenius.app/chat/J4MpxGOjEasj5eWL",
      learn:
        local === "zh"
          ? "https://docs.langgenius.ai/zh-hans/application/creating-an-application"
          : "https://docs.langgenius.ai/en/application/creating-an-application",
    },
    {
      icon: "magic",
      title: t("You can build unlimited creative,practical apps of AI."),
      link: "https://cloud.langgenius.ai/",
    },
  ];
  const onOpen = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <Container id="examples" className={s.container}>
      <div className={s.title}>
        {t("AI 创意嘉年华，全都由 LangGenius 创建")}
      </div>
      <div className={s.box}>
        {data.map((item) => {
          return (
            <Card className={s.card} key={item.title}>
              <div className={s.icon}>
                <Icon className={s.iconcontent} type={item.icon as any} />
              </div>
              <div className={s.header}>{item.title}</div>
              {item.content ? (
                <div className={s.content}>{item.content}</div>
              ) : (
                <></>
              )}
              {item.content ? (
                <div className={s.bg}>
                  <div className={s.btn}>
                    <Button size="small" onClick={() => onOpen(item.link)}>
                      {t("Go to app")}
                    </Button>
                    <Button
                      size="small"
                      type="white"
                      onClick={() => onOpen(item.learn)}
                    >
                      {t("Learn to Build")}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className={s.bg}>
                  <div className={s.btn}>
                    <Button onClick={() => onOpen(item.link)}>
                      {t("Get Started")}
                      <Icon className={s.arrow} type="arrow-white-left" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Block2;
