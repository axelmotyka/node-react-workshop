import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import AppContainer from "./containers/AppContainer.js";

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
    , document.getElementById("root")
);