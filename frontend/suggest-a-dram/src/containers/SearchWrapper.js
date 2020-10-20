// Imports
import { Typography, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import WhiskyItem from '../components/WhiskyItem';
import Request from '../helpers/request';

export default class ResultWrapper extends Component {

    // Constructor
    constructor(props) {

        // Super
        super(props);

        // State
        this.state = {
            whiskies: [],
            filteredWhiskies: []
        }

        // Binds
        this.onSearchChange = this.onSearchChange.bind(this);
        // this.displayState = this.displayState.bind(this);

    }

    // Methods
    componentDidMount() {
        const request = new Request();

        request.get('/api/whiskies')
            .then(data => this.setState({ whiskies: data }));
    }

    onSearchChange(value) {
        const filtered = [];
        for(const whisky of this.state.whiskies){
            if (whisky['meta-data'].name.indexOf(value) > -1){
                filtered.push(whisky);
            }
        }
        this.setState({ filteredWhiskies: filtered })
    }

    // allWhiskies(){
    //     this.state.whiskies.map((whisky, index) => {
    //         return <WhiskyItem whisky={whisky} key={index} />
    //     })
    // }

    // searchResults(){
    //     this.state.filteredWhiskies.map((whisky, index) => {
    //         return <WhiskyItem whisky={whisky} key={index} />
    //     })
    // }

    // displayState(){
    //     if (this.state.filteredWhiskies.length === 0){
    //         return this.allWhiskies();
    //     } else {
    //         return this.searchResults();
    //     }
    // }



    // Render
    render() {

        const whiskies = this.state.whiskies.map((whisky, index) => {
            return <WhiskyItem whisky={whisky} key={index} />
        })

        const searchResults = this.state.filteredWhiskies.map((whisky, index) => {
            return <WhiskyItem whisky={whisky} key={index} />
        })

        return (
            <div className="result-wrapper">

                <Paper>

                    <div className="result-content">

                        <Typography variant="h2">All Whiskies</Typography>

                        <div className="results-search-area">

                            <SearchBar onSearchChange={this.onSearchChange} />

                        </div>

                        <div className="results-whisky-wrapper">
                            
                            {/* {this.displayState()} */}
                            {whiskies}

                        </div>

                    </div>

                </Paper>

            </div>
        );
    }

}