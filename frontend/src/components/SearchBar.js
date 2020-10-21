import { Paper, InputBase, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        background: grey[50]
    },
    searchbar: {
        color: grey[900],
        width: "90%"
    }
}))

export default function SearchBar(props) {

    function handleChange(event){
        props.onSearchChange(event.target.value);
    }

    const classes = useStyles();

    return(
        <Paper component="form" className={classes.root} >
            <InputBase className={classes.searchbar} placeholder="Search for a whisky by name or tasting note..." onChange={handleChange}/>

            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>

        </Paper>
    );

}