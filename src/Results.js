import React from "react";

export const Results = () => {
    if (!localStorage.getItem('accessToken')) {
        window.location = '/'
    }

    return (
        <div>
            <h1>Result Page</h1>
        </div>
    );
};
