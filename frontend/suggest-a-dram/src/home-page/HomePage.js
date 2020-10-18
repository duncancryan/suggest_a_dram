import React from 'react';
import NavBar from '../NavBar';
import './HomePage.css'
import Button from '@material-ui/core/Button';

export default function HomePage() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
        
            <main className="home-description">
                <h2>Find the perfect Whisky</h2>
                <h3>Discover the most accurate flavour profiles of Scottish Whiskies</h3>
                <h4>Simply select your flavour preferences and let us suggest a dram for you</h4>
                <Button variant="contained" color="secondary">Start</Button>
            </main>
        </div>

    )
}