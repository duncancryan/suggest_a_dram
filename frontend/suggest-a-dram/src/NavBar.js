import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Button, Grid, makeStyles, ButtonGroup} from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

export default function NavBar() {

    return (
        <AppBar>

            <Toolbar>

                <Grid justify="space-between" container>

                    <Grid item>

                        <Typography variant="h4" >Suggest A Dram</Typography>

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