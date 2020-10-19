import { style } from '@material-ui/system';
import React, {Component} from 'react';
import SliderSection from './StyleContainer';

export default class QuestionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            styleWhiskies: [],
            characterWhiskies: [],
            rankedWhiskies: [],
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