import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { routesHome,routesAdmin } from "routes/index";
import HomeTemplate from "./containers/HomeTemplate";
import PageNotFound from "containers/PageNotFound/index";
import SignUpPage from "./containers/HomeTemplate/SignUpPage";
import SignInPage from "./containers/HomeTemplate/SignInPage";
import BookingPage from "containers/HomeTemplate/BookingPage/index";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import Dashboard from "containers/AdminTemplate/Dashboard/index";
import DashboardLayout from "layouts/dashboard-layout/DashboardLayout";
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
        <Route path="/booking/:id" component={BookingPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/sign-in" component={SignInPage} />
        {showLayout(routesAdmin, DashboardLayout)}
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="" component={PageNotFound} />
      </Switch>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => ({
  themeMode: state.navbarHomeReducer.themeMode,
});
const ConnectedComponent = connect(mapStateToProps)(App);
export default withRouter(ConnectedComponent);
