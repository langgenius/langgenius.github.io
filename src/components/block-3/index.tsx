import { useEffect, useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Container from "../basic/container";
import Icon from "../basic/icon";
import s from "./index.module.css";

import prompten from "../../assets/prompten.png";
import promptcn from "../../assets/promptcn.png";
import apicn from "../../assets/apicn.png";
import apien from "../../assets/apien.png";
import logcn from "../../assets/logcn.png";
import logen from "../../assets/logen.png";
import dataseten from "../../assets/dataseten.png";
import datasetcn from "../../assets/datasetcn.png";

const Block3 = () => {
  const { t } = useTranslation();
  const local = i18next.language;
  const [activeImg, setActiveImg] = useState({ key: "promp", img: prompten });
  const data = [
    {
      icon: "vector",
      title: t("快速创建 AI 应用"),
      content: t(
        "简单几步就可以快速生成漂亮的 AI 应用，无需编码完成基于 GPT 的产品，你甚至可将它部署到 Vercel。"
      ),
      key: "promp",
      bg: local === "en" ? prompten : promptcn,
    },
    {
      icon: "terminal",
      title: t("增强且易用的 WebAPI"),
      content: t(
        "省掉后端开发环节，在 LangGenius 上直接部署 WebAPI，基于 HybridPrompt 语法开发强大应用，每个应用都能独立鉴权。"
      ),
      key: "api",
      bg: local === "en" ? apien : apicn,
    },
    {
      icon: "paper-airplane",
      title: t("运营可视化"),
      content: t(
        "在易用的界面上分析你的应用状态、用量与费用，基于日志标记数据集，持续微调你的模型，让你的 AI 应用日渐成长。"
      ),
      key: "log",
      bg: local === "en" ? logen : logcn,
    },
    {
      icon: "clipboard-list",
      title: t("释放 GPT 的全部潜力"),
      btn: t("coming soon"),
      content: t(
        "基于你的内容训练专属 AI 模型。利用上下文增强能力突破 GPT 的 4096 字节的限制。"
      ),
      key: "dataset",
      bg: local === "en" ? dataseten : datasetcn,
    },
  ];

  useEffect(() => {
    const imageList = [
      prompten,
      promptcn,
      apicn,
      apien,
      logcn,
      logen,
      dataseten,
      datasetcn,
    ];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  return (
    <Container id="features" className={s.container}>
      <div className={s.left}>
        {data.map((item) => {
          return (
            <div
              key={item.title}
              className={s.card}
              onClick={() => setActiveImg({ key: item.key, img: item.bg })}
            >
              <div className={s.icon}>
                <Icon className={s.iconinner} type={item.icon as any} />
              </div>
              <div className={s.detail}>
                <div className={s.header}>{item.title}</div>
                {item.btn && <div className={s.btn}>{item.btn}</div>}
                <div className={s.content}>{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className={s.imageinner}> */}
      <img className={cn(s.img)} src={activeImg.img} alt="" />
      {/* </div> */}
    </Container>
  );
};

export default Block3;
