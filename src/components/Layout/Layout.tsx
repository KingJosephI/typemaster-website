import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "../../app.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
