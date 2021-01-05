import NavbarHome from "components/NavbarHome";
import React from "react";
import { Route } from "react-router-dom";
function LayoutHome(props) {
  return (
    <>
      <NavbarHome />
      {props.children}
    </>
  );
}
function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <LayoutHome>
            <Component {...propsComponent} />
          </LayoutHome>
        );
      }}
    />
  );
}

export default HomeTemplate;
