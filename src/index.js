import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { LandingPage } from "./LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Results } from "./Results";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Route path='/' component={LandingPage} exact />
            <Route path='/callback' component={LandingPage} exact />
            <Route path='/results' component={Results} exact />{" "}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
