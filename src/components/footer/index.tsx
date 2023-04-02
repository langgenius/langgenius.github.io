import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cn from "classnames";
import i18n from "../../local";
import Icon from "../basic/icon";
import s from "./index.module.css";
import { SetStateAction, useState } from "react";

const list1 = [
  {
    text: "Product Roadmap",
    props: {
      href: `https://docs.langgenius.ai${
        i18next.language === "zh" ? "/zh-hans" : ""
      }/community/product-roadmap`,
      target: "_blank",
      rel: "noreferrer",
    },
  },
  { text: "API Reference" },
  {
    icon: "github",
    text: "GitHub",
    props: {
      href: "https://github.com/langgenius",
      target: "_blank",
      rel: "noreferrer",
    },
  },
  { icon: "discord", text: "Discord" },
];

const list2 = [
  {
    text: "Creators",
    props: {
      to: "/about",
      target: "_blank",
      rel: "noreferrer",
    },
  },
  {
    text: "Terms of Service",
    props: {
      to: "/terms-of-service",
      target: "_blank",
      rel: "noreferrer",
    },
  },
  {
    text: "Privacy Policy",
    props: {
      href: "/privacy-policy",
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
  const [title, setTitle] = useState(t("语言"));
  const [displayMenu, setDisplayMenu] = useState(false);
  const showDropdownMenu = () => setDisplayMenu(true);
  const hideDropdownMenu = (v: string, t: string) => {
    i18n.changeLanguage(v)
    setDisplayMenu(false);
    setTitle(t);
  };
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.brand}>
          <div className={s.logo} />
          <div className={s.text}>
            LangGenius is progressing to become the best open source LLMOps
            platform.
          </div>
        </div>
        <div className={s.nav}>
          <div className={s.list}>
            {list1.map((l1) => {
              return (
                <a className={s.item} key={l1.text} {...(l1.props || {})}>
                  {l1.icon && <Icon type={l1?.icon as any} />}
                  {l1.text}
                </a>
              );
            })}
          </div>
          <div className={s.list}>
            {list2.map((l2) => {
              return (
                <Link
                  className={s.item}
                  key={l2.text}
                  to={l2.props?.href || ""}
                  {...(l2.props || {})}
                >
                  {l2.text}
                  {l2.text === "Status OK" && <div className={s.ok} />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.copywrite}>© 2023 LangGenius, Inc. </div>
        <div className={s.language}>
          <>
            {displayMenu && <div className={s.shade} onClick={() => setDisplayMenu(false)} />}
            <div className={s.dropdown}>
              <div className={cn([s.button, displayMenu ? s.active : ""])} onClick={() => showDropdownMenu()}>
                <Icon type="language" className={s.icon} />
                <div className={s.title}>{title}</div>
                <Icon type="tranggle-down" />
              </div>
              {displayMenu && (
                <div className={s.menu}>
                  <div onClick={() => hideDropdownMenu("en", "English")}>English</div>
                  <div onClick={() => hideDropdownMenu("zh", "简体中文")}>
                    {"简体中文"}
                  </div>
                  <div onClick={() => hideDropdownMenu("ja", "日本語")}>日本語</div>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Footer;
