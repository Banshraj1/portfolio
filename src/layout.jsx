import React from "react";
import { Sidebar,Header,Footer } from "./components/index.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>
        <div><Sidebar /></div>
        <Header />
        <Outlet />
        <Footer />
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default Layout;
