import React, { useEffect, useState } from "react";
import { Paper, Chip, Grid } from "@mui/material";
import "./Results.css";
import axios from "axios";

export const SpotifyImpression = ({ song }) => {
    const openInSpotify = () => {
        window.location = song?.trackURL;
    };

    return (
        <Grid container rowSpacing={1} columnSpacing={4} className='spotify-impression'>
            <Grid item xs={12} md={4}>
                <img src={song?.image} alt='cover-art' style={{ width: "325px", height: "325px" }} />
            </Grid>
            <Grid item direction='column' container xs={12} md={8} className='spotify-impression__detail-container'>
                <Grid item xs>
                    <h3 className='spotify-impression__title'>{song?.title}</h3>
                </Grid>
                <Grid item xs>
                    <div className='spotify-impression__artist'>{song?.artistName}</div>
                    <div className='spotify-impression__album'>{song?.album}</div>
                </Grid>
                <Grid item xs>
                    <Chip
                        variant='filled'
                        color='primary'
                        label='Play In Spotify'
                        className='spotify-impression__button'
                        onClick={openInSpotify}
                    ></Chip>
                </Grid>
            </Grid>
        </Grid>
    );
};

export const Results = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const token = localStorage.getItem("accessToken");
    if (!localStorage.getItem("accessToken")) {
        window.location = "/";
    }

    const getNewSong = () => {
        axios
            .get("https://api.spotify.com/v1/me/tracks", { headers: { authorization: `Bearer ${token}` } })
            .then(({ data }) => {
                const trackNumber = Math.floor(Math.random() * data.items.length);
                const track = data.items[trackNumber].track;
                setCurrentSong({
                    image: track.album.images[0].url,
                    title: track.name,
                    trackURL: track.external_urls.spotify,
                    artistName: track.artists[0].name,
                    album: track.album.name,
                });
            });
    };

    const onClickHandler = () => {
        getNewSong();
    };

    useEffect(() => {
        getNewSong();
    }, []);

    return (
        <div className='results-page'>
            <h3 className='results-page__title'>First Impression 🎸</h3>
            <div className='results-page__sub-header-container'>
                <h2 className='results-page__sub-header'>Our first impression of you is...</h2>
                <Chip
                    variant='outlined'
                    label='Try Again'
                    size='small'
                    color='primary'
                    className='results-page__sub-header-container-button'
                    onClick={onClickHandler}
                />
            </div>
            <Paper elevation={1} sx={{ color: "text.main", p: 3 }}>
                <h3 className='results-page__card-title'>Okay damn 🔥</h3>
                <SpotifyImpression song={currentSong}></SpotifyImpression>
            </Paper>
        </div>
    );
};

const song = {
    external_urls: {
        spotify: "string",
    },
    href: "string",
    id: "2up3OPMp9Tb4dAKM2erWXQ",
    album: {
        images: [
            {
                url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                height: 300,
                width: 300,
            },
        ],

        name: "string",
    },
    artists: [
        {
            external_urls: {
                spotify: "string",
            },

            name: "string",
            reason: "string",
        },
    ],
    name: "string",
    popularity: 0,
    preview_url: "string",
    track_number: 0,
    type: "string",
    uri: "string",
    is_local: true,
};
