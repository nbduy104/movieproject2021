import NavbarHome from "components/NavbarHome";
import React from "react";
import { Route } from "react-router-dom";
import Paperbase from "./Paperbase";
function LayoutAdmin(props) {
  return (
    <>
      <Paperbase />
      {props.children}
    </>
  );
}
function DashboardLayout({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <LayoutAdmin>
            <Component {...propsComponent} />
          </LayoutAdmin>
        );
      }}
    />
  );
}

export default DashboardLayout;
