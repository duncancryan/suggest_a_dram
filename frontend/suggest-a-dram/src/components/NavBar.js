import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Button, Grid, ButtonGroup, makeStyles} from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Logo from './logo.png';

const useStyles = makeStyles((theme) => ({
    logo: {
        width: "35px",
        margin: "0px 10px 0px 0px"
    }
}));

export default function NavBar() {

    const classes = useStyles();

    return (
        <AppBar position="sticky">

            <Toolbar>

                <Grid justify="space-between" container>

                    <Grid item>

                        <Grid container justify="space-between">

                            <Grid item>
                                <img src={Logo} alt="" className={classes.logo} />
                            </Grid>

                            <Grid item>
                                <Typography variant="h4">Suggest A Dram</Typography>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item>

                        <ButtonGroup variant="contained" color="secondary" size="large">
                            <Button href="/" startIcon={<HomeRoundedIcon />}>Home</Button>
                            <Button href="/start" startIcon={<SearchRoundedIcon />}>Suggest a Whisky</Button>
                            <Button href="/all" startIcon={<LocalBarRoundedIcon />}>All Whiskys</Button>
                            <Button href="/auth" startIcon={<AccountCircleRoundedIcon />}>Login</Button>
                        </ButtonGroup>

                    </Grid>

                </Grid>

            </Toolbar>

        </AppBar>
    )
}