import React from 'react';
import './HomePage.css'
import {Button, Typography} from '@material-ui/core';

export default function HomePage() {
    return (
        <main className="home-page">
            <div className="home-description">
                <Typography variant="h1">Suggest A Dram</Typography>
                <Typography variant="h3" gutterBottom>Find the perfect Whisky</Typography>
                <Typography variant="body1" gutterBottom>Discover the most accurate flavour profiles of Scottish Whiskies</Typography>
                <Typography variant="body1" gutterBottom>Simply select your flavour preferences and let us suggest a dram for you</Typography>
                <Button variant="contained" color="secondary" size="large" href="/start">Start</Button>
            </div>
        </main>
    )
}