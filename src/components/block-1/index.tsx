import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../basic/container";
import Button from "../basic/button";
import Icon from "../basic/icon";
import s from "./index.module.css";

const Block1 = () => {
  const { t } = useTranslation();
  const [githubText, setGithubText] = useState("GitHub");
  const [experienceText, setExperienceText] = useState(t('体验云服务'));
  return (
    <Container className={s.container}>
      <div className={s.top}>
        <div className={s.alph}>
          <Button size="small">
            <Icon type="horn" className={s.r} />
            {t("内测进行中")}
          </Button>
          <div className={s.text}>
            {t("v0.1 云端版内测后，LangGenius 将在 GitHub 开源")}
          </div>
          <div className={s.link}>
            {t("产品 Roadmap")}
            <Icon type="arrow-blue-left" className={s.l} />
          </div>
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
            onMouseEnter={() => setGithubText("Coming soon")}
            onMouseLeave={() => setGithubText("   Github  ")}
          >
            <Icon type="github" className={s.btnicon} />
            {githubText}
          </Button>
          <Button
            size="large"
            onMouseEnter={() => setExperienceText("Coming soon")}
            onMouseLeave={() => setExperienceText(t('体验云服务'))}
          >
            {experienceText}
          </Button>
        </div>
      </div>
      <div className={s.img} />
    </Container>
  );
};

export default Block1;
