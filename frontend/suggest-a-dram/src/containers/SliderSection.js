import React, { Component } from 'react';
import SliderComponent from '../components/SliderComponent';
import Button from '@material-ui/core/Button';

export default class SliderSection extends Component {
    constructor(props) {
        super(props);

        // State
        this.state = {
            body: 0,
            richness: 0,
            smoke: 0,
            sweetness: 0
        }

        // Binds
        this.onBodyChange = this.onBodyChange.bind(this)
        this.onRichnessChange = this.onRichnessChange.bind(this)
        this.onSmokeChange = this.onSmokeChange.bind(this)
        this.onSweetnessChange = this.onSweetnessChange.bind(this)

    }
    // Methods
    matchOnStyle(){
        // This method will match whiskies based on style scores and be called in the handle submit
    }

    handleSubmit(){
        // This method will use the submit even to shuttle the result of matching up and set it as the styleWhiskies array
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
