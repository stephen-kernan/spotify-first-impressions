import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { LandingPage } from "./LandingPage";

export const App = () => {
    // const history = createBrowserHistory();
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={LandingPage} exact />
                <Route path='/callback' component={LandingPage} exact />
            </Switch>
        </BrowserRouter>
    );
};
