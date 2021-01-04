import "./App.css";
import { Switch, Route } from "react-router-dom";
import { routesHome } from "routes/index";
import HomeTemplate from "./containers/HomeTemplate";
import PageNotFound from "containers/PageNotFound/index";
import SignUpPage from "./containers/HomeTemplate/SignUpPage";
import SignInPage from "./containers/HomeTemplate/SignInPage";
import BookingPage from "containers/HomeTemplate/BookingPage/index";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
const showLayout = (routes, Template) => {
  return routes.map((route, index) => {
    return (
      <Template
        exact={route.exact}
        path={route.path}
        Component={route.component}
        key={index}
      />
    );
  });
};
function App(props) {
  return (
    <ThemeProvider theme={props.themeMode}>
      <Switch>
        {showLayout(routesHome, HomeTemplate)}
        <Route path="/booking" component={BookingPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="" component={PageNotFound} />
      </Switch></ThemeProvider >
  );
}
const mapStateToProps = (state) => ({
  themeMode: state.navbarHomeReducer.themeMode,
});
export default connect(mapStateToProps)(App);
