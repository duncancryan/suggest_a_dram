import React, {Component} from 'react';

export default class QuizContainer extends Component{

    // Constructor
    constructor(props){
        super(props)
        // State
        this.state = {
            bottle_image_urls: [],
        }
    }

    // Methods

    onProgressChange(){

    }

    // Render

    render(){
        return(
            <main>
                <div className="quiz-content">
                    <div className="questiuon-box">
                        I will be the Question Container
                    </div>
                    <div className="whisky-fill">
                        And I shall be the Whiksy Bottle!
                    </div>
                </div>

            </main>
        )
    }
}