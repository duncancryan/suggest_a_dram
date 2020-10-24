import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    }
}));

export default function HomePage() {

    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Typography varient="h2">Sorry, login is not available at this time.</Typography>
        </main>
    )
}