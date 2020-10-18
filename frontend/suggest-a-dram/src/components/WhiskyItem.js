// Imports
import { Card, CardContent, CardMedia, Chip, makeStyles, Typography, Grid, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { Fragment } from 'react';

// Styling
const useStyles = makeStyles({
    root: {
      background: grey[600],
      color: grey[50],
      margin: "10px 0px 10px 0px",
      display: 'flex',
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
    },
    rootSmall: {
        background: grey[600],
        color: grey[50],
        margin: "10px 5px 10px 5px",
        display: 'flex',
    }
  });

// Build component - Whisky Item
export default function WhiskyItem(props) {

    const classes = useStyles();

    const title = function() {

        if (props.size === "small") {
            return <Typography variant="h6">{props.whisky['meta-data'].name}</Typography>
        } else if (props.size === "large") {
            return <Typography variant="h2">{props.whisky['meta-data'].name}</Typography>
        }

        return <Typography variant="h4">{props.whisky['meta-data'].name}</Typography>

    }

    const description = function() {

        if (props.size != "small") {
            return (
                <Fragment>
                <Typography variant="body2">{props.whisky['meta-data'].pagemd['page-description']}</Typography>
                </Fragment>
            );
        }

    }

    const product_image = function() {

        if (props.size != "small") {
            return (
                <div className={classes.mediaContainer}>
                    <CardMedia image={props.whisky['meta-data'].pagemd['product-image']} className={classes.media} />
                </div>
            );
        }

    }

    return(
        <Card className={(props.size === "small") ? classes.rootSmall : classes.root}>
            
            <CardContent className={classes.content}>

                {title()}

                <Grid container spacing={2} className={classes.chips}>

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

                {description()}

                <Button variant="contained" color="secondary" className={classes.link} href={props.whisky['meta-data'].pagemd['product-url']} target="_blank">Learn More</Button>

            </CardContent>

            {product_image()}
        
        </Card>
    );

}