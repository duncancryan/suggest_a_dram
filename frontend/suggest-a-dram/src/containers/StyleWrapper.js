import React, { Component } from 'react';
import SliderComponent from '../components/SliderComponent';
import {Button, Typography} from '@material-ui/core';
import Request from '../helpers/request';

export default class StyleWrapper extends Component {
    constructor(props) {
        super(props);

        // State
        this.state = {
            body: 3,
            richness: 3,
            smoke: 3,
            sweetness: 3,
        }
        // Binds
        this.onBodyChange = this.onBodyChange.bind(this)
        this.onRichnessChange = this.onRichnessChange.bind(this)
        this.onSmokeChange = this.onSmokeChange.bind(this)
        this.onSweetnessChange = this.onSweetnessChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.matchOnStyle = this.matchOnStyle.bind(this);

    }
    // Methods
    matchOnStyle(){
        let body = this.state.body;
        let richness = this.state.richness;
        let smoke = this.state.smoke;
        let sweetness = this.state.sweetness;
        const plugIn =[body, richness, smoke, sweetness];
        const request = new Request();
        const resOne = request.get(`/api/whiskies/${plugIn[0]}/${plugIn[1]}/${plugIn[2]}/${plugIn[3]}`);
        if (resOne.then(data => data !== []){
            return resOne;
        } else {
            const plugIn2 = [];
            for (let attr in plugIn){
                if (attr === 5){
                    attr -= 1;
                    plugIn2.push(attr);
                } else if (attr === 0){
                    attr += 1;
                    plugIn2.push(attr);
                }
            }
            return request.get(`/api/whiskies/${plugIn2[0]}/${plugIn2[1]}/${plugIn2[2]}/${plugIn2[3]}`);  
        }
    }

    async handleSubmit(){
        this.matchOnStyle()
        .then(data => this.props.onProgressChange(data));
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
            <Typography variant="h2">Choose your style</Typography>
            <h3>Body</h3>
            <SliderComponent onChange={this.onBodyChange} />
            <h3>Richness</h3>
            <SliderComponent onChange={this.onRichnessChange} />
            <h3>Smoke</h3>
            <SliderComponent onChange={this.onSmokeChange} />
            <h3>Sweetness</h3>
            <SliderComponent onChange={this.onSweetnessChange} />
            <Button
              variant="contained"
              className="quiz-button"
              color="primary"
              onClick={this.handleSubmit}
            >
              Next
            </Button>
          </div>
        );
    }
}
