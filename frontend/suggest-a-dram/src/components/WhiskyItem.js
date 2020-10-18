// Imports
import { Card, CardContent, CardMedia, Chip, makeStyles, Typography, Grid, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';

// Styling
const useStyles = makeStyles({
    root: {
      background: grey[600],
      color: grey[50],
      margin: "0px 0px 10px 0px",
      display: 'flex'
    },
    mediaContainer: {
      width: "20%"
    },
    media: {
        width: "100%",
        height: "100%"
    },
    content: {
        width: "80%",
        textAlign: 'left'
    },
    chips: {
        margin: "10px 0px 10px 0px"
    },
    link: {
        margin: "10px 0px 0px 0px"
    }
  });

// Build component - Whisky Item
export default function WhiskyItem(props) {

    const classes = useStyles();

    return(
        <Card className={classes.root}>
            
            <CardContent className={classes.content}>

                <Typography variant="h4">{props.whisky['meta-data'].name}</Typography>

                <Grid container spacing={1} className={classes.chips}>

                    <Grid item>
                        <Chip label={"Body: " + props.whisky.attributes.body} />
                    </Grid>

                    <Grid item>
                        <Chip label={"Smoke: " + props.whisky.attributes.smoke} />
                    </Grid>

                    <Grid item>
                        <Chip label={"Richness: " + props.whisky.attributes.richness} />
                    </Grid>

                    <Grid item>
                        <Chip label={"Sweetness: " + props.whisky.attributes.sweetness} />
                    </Grid>

                </Grid>

                <Typography variant="body2">{props.whisky['meta-data'].pagemd['page-description']}</Typography>

                <Button variant="contained" color="secondary" className={classes.link} href={props.whisky['meta-data'].pagemd['product-url']} target="_blank">Learn More</Button>

            </CardContent>

            <div className={classes.mediaContainer}>
                <CardMedia image={props.whisky['meta-data'].pagemd['product-image']} className={classes.media} />
            </div>
        
        </Card>
    );

}