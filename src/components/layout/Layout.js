import React from "react";
import Header from "../header/Header";
const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <p>Footer here</p>
    </main>
  );
};

export default Layout;
