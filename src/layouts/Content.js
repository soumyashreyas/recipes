import React from "react";
import { Outlet } from "react-router";

function Content() {
  return (
    <main>
    <div className="container-fluid px-4 min-vh-cont">
      <Outlet />
    </div>
  </main>
  );
}

export default Content;
