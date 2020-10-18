import { style } from '@material-ui/system';
import React, {Component} from 'react';
import SliderSection from './SliderSection';

export default class QuestionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            style: {
                body: 0,
                richness: 0,
                smoke: 0,
                sweetness: 0,
            },
            whiskiesFromSliders: [],
            characters: {
                elements: 0,
                fruit: 0,
                spice: 0,
                confectionary: 0,
                fatty: 0,
                floral: 0
            },
            progressStateOfQuestions: 0
        }
        // Binds
        this.onSubmitStyle = this.onSubmitStyle.bind(this);
    }

    onSubmitStyle(){
        this.setState({style: style})
    }

    onCharacterSelect(){

    }

    onProgressChange(){

    }

    render(){
        return(
            <div>
                <SliderSection onSliderChange={this.onSubmitStyle} style={this.state.style} />
                {/* characterContainer this.state.notes */}
                <p>Question Container</p>
            </div>
        )
    }
}