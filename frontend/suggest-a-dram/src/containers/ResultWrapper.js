// Imports
import React from 'react';
import { Typography, Paper, Divider, Grid } from '@material-ui/core';
import WhiskyItem from '../components/WhiskyItem';

export default function ResultWrapper(props) {
    // Methods
    const others = props.whiskies.map(whisky => {

        if (props.whiskies.indexOf(whisky) > 0){
            return (
                <Grid item>
                    <WhiskyItem whisky={whisky} size="small" />
                </Grid>
            );
        }

        return null

    })

    // Render
    return(
        <div className="result-wrapper">
            
            <Paper>

                <div className="result-content">

                    <Typography variant="h2">Your Results</Typography>

                    <div className="results-whisky-wrapper">

                        <Typography variant="h3">We think you'll love this!</Typography>

                        <WhiskyItem whisky={props.whiskies[0]} size="large" />
                    
                        <Divider />

                        <Typography variant="h4">We also suggest...</Typography>

                        <Grid container justify="space-evenly">

                            {others}

                        </Grid>

                    </div>

                </div>

            </Paper>

        </div>
    );

}