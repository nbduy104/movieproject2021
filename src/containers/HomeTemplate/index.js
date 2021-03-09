import NavbarHome from "components/NavbarHome";
import React from "react";
import { Route } from "react-router-dom";
import Partners from "../../components/Partners";
function LayoutHome(props) {
  return (
    <>
      <NavbarHome />
      {props.children}
      <Partners />
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
