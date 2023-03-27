import React from "react";
import { Outlet } from "react-router-dom";
import Header from './header';
import Footer from './footer';

import cn from 'classnames';
import s from './index.module.css';

const Layout = () => {
  return (
    <div className={s.box}>
      <Header />
      <div className={s.container}>
        <div className={cn(s.center)}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Layout;
