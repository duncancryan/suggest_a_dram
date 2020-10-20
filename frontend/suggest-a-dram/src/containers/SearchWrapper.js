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
            filteredWhiskies: [],
            filtered: false
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
            const lowerCased = whisky['meta-data'].name.toLowerCase();
            if (lowerCased.indexOf(value.toLowerCase()) > -1){
                filtered.push(whisky);
            }
        }
        this.setState({ filteredWhiskies: filtered })
        this.setState({ filtered: true })
    }



    displayState(){

        const whiskies = this.state.whiskies.map((whisky, index) => {
            return <WhiskyItem whisky={whisky} key={index} />
        })

        const searchResults = this.state.filteredWhiskies.map((whisky, index) => {
            return <WhiskyItem whisky={whisky} key={index} />
        })

        if (!this.state.filtered){
            return whiskies;
        } else {
            return searchResults;
        }
    }



    // Render
    render() {



        return (
            <div className="result-wrapper">

                <Paper>

                    <div className="result-content">

                        <Typography variant="h2">All Whiskies</Typography>

                        <div className="results-search-area">

                            <SearchBar onSearchChange={this.onSearchChange} />

                        </div>

                        <div className="results-whisky-wrapper">
                            
                            {this.displayState()}
                            {/* {whiskies} */}

                        </div>

                    </div>

                </Paper>

            </div>
        );
    }

}