import React, { Component } from 'react';
import SliderComponent from '../components/SliderComponent';

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
    handleSubmit(){

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
            <div>
                <SliderComponent onChange={this.onBodyChange} />
                <SliderComponent onChange={this.onRichnessChange} />
                <SliderComponent onChange={this.onSmokeChange} />
                <SliderComponent onChange={this.onSweetnessChange} />
                {/* button will be here which calls handleSubmit */}
            </div>
        )
    }
}
