import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from "../../local";
import Icon from "../basic/icon";
import s from "./index.module.css";

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
    // props: {
    //   to: "/about",
    //   target: "_blank",
    //   rel: "noreferrer",
    // },
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
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.copywrite}>© 2023 LangGenius, Inc. </div>
        <div className={s.language}>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {t("语言")}
                <Icon type="language" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items>
                <Menu.Item key={"English"} as={Fragment}>
                  <div onClick={() => i18n.changeLanguage("en")}>English</div>
                </Menu.Item>
                <Menu.Item key={"简体中文"} as={Fragment}>
                <div onClick={() => i18n.changeLanguage("zh")}>简体中文</div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {/* <div onClick={() => i18n.changeLanguage("en")}>English</div>
        <div onClick={() => i18n.changeLanguage("zh")}>简体中文</div> */}
      </div>
    </div>
  );
};

export default Footer;
