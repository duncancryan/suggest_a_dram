import React, {Component} from 'react';
import NavBar from '../NavBar';


export default class QuizContainer extends Component{

    // Constructor
    constructor(){

        // State
        this.state = {
            body: 0,
            richness: 0,
            smoke: 0,
            sweetness: 0,
            bottle_image_url: '',
            character: []
        }
    }

    // Methods

    onProgressChange(){

    }


    // Render

    render(){
        return(
            <main>
                <NavBar/>
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