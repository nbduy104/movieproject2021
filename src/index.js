import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./sass/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/js/all.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// Setting redux,redux-thunk
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
// Setting Material-ui
import { StylesProvider } from "@material-ui/core/styles";
import "fontsource-roboto";

// Setting thunk
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StylesProvider>
  </Provider>,
  // document.getElementById("root")
  document.querySelector("#root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
