import { Button, Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./App.css";
import concertImage from "./img/concert.jpg";

const spotifyScopes = "user-read-private user-read-email";
const redirectUri = "http://localhost:3000/callback";
const myClientId = "fb7ba895f27e4ba19d6e59eadac95775";

export const LandingPage = () => {
    const history = useHistory();
    const location = useLocation();

    const parseHash = () => {
        const hashList = location.hash.split(/&|#/);
        const hashObject = hashList
            .filter((param) => param.length)
            .reduce((reducer, param) => {
                const keyValuePair = param.split("=");
                return {
                    ...reducer,
                    [keyValuePair[0]]: keyValuePair[1],
                };
            }, {});
        return hashObject;
    };

    let getStarted = () => {
        window.location =
            "https://accounts.spotify.com/authorize" +
            "?response_type=token" +
            "&client_id=" +
            myClientId +
            (spotifyScopes ? "&scope=" + encodeURIComponent(spotifyScopes) : "") +
            "&redirect_uri=" +
            encodeURIComponent(redirectUri);
    };

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            history.push("/results");
        }

        if (location.pathname === "/callback" && location.hash) {
            const { access_token: accessToken, token_type: tokenType, expires_in: expiresIn } = parseHash();

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("tokenType", tokenType);
            localStorage.setItem("expiresIn", expiresIn);
            history.push("/results");
        }
    });

    return (
        <div className='page'>
            <h3>First Impressions 🎸</h3>
            <Paper className='basic-container' data-testid='home-page' elevation={3}>
                <Grid container spacing={0}>
                    <Grid item xs={5}>
                        <img src={concertImage} alt='concert' height='100%' width='100%' fit='cover' />
                    </Grid>
                    <Grid item xs={7} className='landing-page__text-container'>
                        <h1>You Only Get One Shot</h1>
                        <p>
                            First impressions are everything, but you can’t always control what people see. Is your
                            Spotify library ✨flawless✨, or do people just tolerate it 🙄? Let us pick one song and
                            find out.
                        </p>
                        <Button
                            onClick={getStarted}
                            className='primary-button mt-4'
                            variant='contained'
                            data-testid='getting-started-button'
                        >
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};
