import i18next from "i18next";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import Container from "../basic/container";
import Button from "../basic/button";
import Icon from "../basic/icon";
import s from "./index.module.css";
import blockBgEn from "../../assets/block-1-en.png";
import blockBgZh from "../../assets/block-1-cn.png";
import { useCallback } from "react";
// import ChimpDialog from "../chimp-dialog";
// import { useState } from "react";

const Block1 = () => {
  const { t } = useTranslation();
  const local = i18next.language;
  // const [isChimpVisible, setIsChimpVisible] = useState(false);
  // const [githubText, setGithubText] = useState(t("Github"));
  const onTryCloud = useCallback(() => {
    window.gtag_report_conversion();
    window.open("https://cloud.langgenius.ai", "_blank");

  }, []);
  return (
    <Container className={s.container}>
      <div className={s.top}>
        <div className={s.alph}>
          <Button size="small">
            <Icon type="horn" className={s.r} />
            {t("内测进行中")}
          </Button>
          <div className={s.text}>{t("Inside announcement text")}</div>
          {/* <a
            className={s.link}
            target="_blank"
            rel="noreferrer"
            href={`https://docs.langgenius.ai${
              i18next.language === 'zh' ? '/zh-hans' : ''
            }/community/product-roadmap`}
          >
            {t('产品 Roadmap')}
            <Icon type="arrow-blue-left" className={s.l} />
          </a> */}
        </div>
        <div className={s.title}>{t("10 倍速创作你的 AI 应用")}</div>
        <div className={s.tip}>
          {t(
            "快速、直观地开发可运营的 GPT 应用。即使是非开发人员也能轻松完成。"
          )}
        </div>
        <div className={s.tip}>
          {t("LangGenius 正在进步成为最好的开源 LLMOps 平台。")}
        </div>
        <div className={s.btn}>
          <Button
            size="large"
            type="white"
            onClick={() =>
              window.open("https://github.com/langgenius/langgenius", "_blank")
            }
          >
            <Icon type="github" className={s.btnicon} />
            Github
          </Button>
          <Button
            size="large"
            onClick={onTryCloud}
          >
            {t("体验云服务")}
            {/* <div className={s.coming}>{t('即将上线')}</div> */}
          </Button>
        </div>
      </div>
      <div className={s.imgcontainer}>
        <img
          alt=""
          src={local === "zh" ? blockBgZh : blockBgEn}
          className={s.img}
        />
        <div className={cn(s.imgsmall, local === "zh" ? s.zh : s.en)} />
      </div>
      {/* <ChimpDialog
        open={isChimpVisible}
        onClose={() => setIsChimpVisible(false)}
      /> */}
    </Container>
  );
};

export default Block1;
