// Imports
import { Typography, Paper } from '@material-ui/core';
import React, {Component} from 'react';
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
            whiskies: []
        }

    }

    // Methods
    componentDidMount() {
        const request = new Request();
        
        request.get('/api/whiskies')
        .then(data => this.setState({whiskies: data}));
    }

    // Render
    render() {

        const whiskies = this.state.whiskies.map((whisky, index) => {
            return <WhiskyItem whisky={whisky} key={index} />
        })

        return(
            <div className="result-wrapper">
                
                <Paper>

                    <div className="result-content">

                        <Typography variant="h2">All Whiskies</Typography>

                        <div className="results-search-area">

                            <SearchBar />

                        </div>

                        <div className="results-whisky-wrapper">
                        
                            {whiskies}

                        </div>

                    </div>

                </Paper>

            </div>
        );
    }

}