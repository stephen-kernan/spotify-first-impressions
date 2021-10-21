import React from "react";
import { Route, useHistory, useLocation } from "react-router";

// the place where global nav lives, and themes are aplenty.
export const PageRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    const location = useLocation();

    return (
        <Route {...rest}>
            <div className='wrapper'>
                <Component location={location} history={history} />
            </div>
        </Route>
    );
};
