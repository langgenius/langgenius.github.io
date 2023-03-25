import { useTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from "../../local";
import Icon from "../basic/icon";
import s from "./index.module.css";

const list1 = [
  {
    text: "Product Roadmap",
    props: {
      href: `https://docs.langgenius.ai${i18next.language === 'zh' ? '/zh-hans' : ''}/community/product-roadmap`,
      target: "_blank",
      rel: "noreferrer",
    },
  },
  { text: "API Reference" },
  {
    icon: "github",
    text: "GitHub",
    props: {
      href: 'https://github.com/langgenius',
      target: "_blank",
      rel: "noreferrer",
    },
  },
  { icon: "discord", text: "Discord" },
];

const list2 = [
  { text: "Creators" },
  { text: "Terms of Service" },
  {
    text: "Privacy Policy",
    props: {
      href: "https://langgenius.notion.site/Privacy-Policy-46a4c083600541b3a77e7dd8fcfc0508",
      target: "_blank",
      rel: "noreferrer",
    },
  },
  {
    text: "Status OK",
    props: {
      href: "http://langgenius.statuspage.io",
      target: "_blank",
      rel: "noreferrer",
    },
  },
];
const Footer = () => {
  const [t] = useTranslation();
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.bg} />
        <div className={s.brand}>
          <div className={s.logo} />
          <div className={s.text}>
            LangGenius is progressing to become the best open source LLMOps
            platform.
          </div>
        </div>
        <div className={s.nav}>
          <div className={s.list}>
            {list1.map((l1, index) => {
              return (
                <a className={s.item} key={index} {...(l1.props || {})}>
                  {l1.icon && <Icon type={l1?.icon as any} />}
                  {l1.text}
                </a>
              );
            })}
          </div>
          <div className={s.list}>
            {list2.map((l2, index) => {
              return <a className={s.item} key={index} {...(l2.props || {})}>{l2.text}</a>;
            })}
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.copywrite}>© 2023 LangGenius, Inc. </div>
        <div className={s.language}>
          <Icon type="language" />
          {t("语言")}
        </div>
        <div onClick={() => i18n.changeLanguage("en")}>English</div>
        <div onClick={() => i18n.changeLanguage("zh")}>简体中文</div>
      </div>
    </div>
  );
};

export default Footer;
