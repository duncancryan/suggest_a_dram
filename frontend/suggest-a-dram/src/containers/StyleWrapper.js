import React, { Component } from 'react';
import SliderComponent from '../components/SliderComponent';
import Button from '@material-ui/core/Button';
import Request from '../helpers/request';

export default class StyleWrapper extends Component {
    constructor(props) {
        super(props);

        // State
        this.state = {
            body: 0,
            richness: 0,
            smoke: 0,
            sweetness: 0,
            test: []
        }
        // Binds
        this.onBodyChange = this.onBodyChange.bind(this)
        this.onRichnessChange = this.onRichnessChange.bind(this)
        this.onSmokeChange = this.onSmokeChange.bind(this)
        this.onSweetnessChange = this.onSweetnessChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    // Methods
    matchOnStyle(){
        const whiskies = [];
        const request = new Request();
        request.get(`/api/whiskies/${this.state.body}/${this.state.richness}/${this.state.smoke}/${this.state.sweetness}`)
        .then(data => data.map(item => whiskies.push(item)));
        return whiskies;
    }

    handleSubmit(){
        this.props.onProgressChange(this.matchOnStyle());
    }

    onBodyChange(body){
        this.setState({body: body})
    }
    onRichnessChange(richness){
        this.setState({richness: richness})
    }
    onSmokeChange(smoke){
        this.setState({smoke: smoke})
    }
    onSweetnessChange(sweetness){
        this.setState({sweetness: sweetness})
    }


    // Render

    render() {
        return (
            // does this need to be inside a form?
            <div>

                <SliderComponent onChange={this.onBodyChange} />
                <SliderComponent onChange={this.onRichnessChange} />
                <SliderComponent onChange={this.onSmokeChange} />
                <SliderComponent onChange={this.onSweetnessChange} />
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Next</Button>
            </div>
        )
    }
}
