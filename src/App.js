import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Results } from "./Results/Results";
import { PageRoute } from "./PageRoute";

export const App = () => {
    // const history = createBrowserHistory();
    return (
        <BrowserRouter>
            <Switch>
                <PageRoute path='/' component={LandingPage} exact />
                <PageRoute path='/callback' component={LandingPage} exact />
                <PageRoute path='/results' component={Results} exact />
            </Switch>
        </BrowserRouter>
    );
};
