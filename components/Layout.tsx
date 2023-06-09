import React from "react";
import Navbar from "./Navbar";

type Child = {
  children: any;
};

function Layout({ children }: Child) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
