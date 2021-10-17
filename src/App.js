import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Results } from "./Results";

export const App = () => {
    // const history = createBrowserHistory();
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={LandingPage} exact />
                <Route path='/callback' component={LandingPage} exact />
                <Route path='/results' component={Results} exact />
            </Switch>
        </BrowserRouter>
    );
};
