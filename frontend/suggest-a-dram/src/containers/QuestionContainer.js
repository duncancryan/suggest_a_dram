import React, {Component} from 'react';

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
    }

    onSliderChange(){

    }

    onCharacterSelect(){

    }

    onProgressChange(){
        
    }

    render(){
        return(
            <div>
                {/* slidercontainer this.state.style*/}
                {/* characterContainer this.state.notes */}
                <p>Question Container</p>
            </div>
        )
    }
}