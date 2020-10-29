import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button, Grid, makeStyles} from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Logo from './logo.png';

const useStyles = makeStyles((theme) => ({
    logo: {
        width: "35px"
    },
    navButton: {
        marginLeft: "10px"
    }
}));

export default function NavBar() {

    const classes = useStyles();

    return (
        <AppBar position="sticky">

            <Toolbar>

                <Grid justify="space-between" container>

                    {/* <img src={Logo} alt="Suggest A Dram" className={classes.logo} /> */}

                    <Grid item>

                        <Button variant="contained" color="secondary" size="large" className={classes.navButton} href="/" startIcon={<HomeRoundedIcon />}>Home</Button>
                        <Button variant="contained" color="secondary" size="large" className={classes.navButton} href="/quiz" startIcon={<SearchRoundedIcon />}>Suggest a Whisky</Button>
                        <Button variant="contained" color="secondary" size="large" className={classes.navButton} href="/all" startIcon={<LocalBarRoundedIcon />}>All Whiskies</Button>
                        <Button variant="contained" color="secondary" size="large" className={classes.navButton} href="/auth" startIcon={<AccountCircleRoundedIcon />}>Login</Button>

                    </Grid>

                </Grid>

            </Toolbar>

        </AppBar>
    )
}