import { Grid, Typography } from '@material-ui/core';
import React, {Component} from 'react';
import QuestionWrapper from './QuestionWrapper';
import EmptyGlass from '../images/empty.png';
import FirstFill from '../images/first-fill.png'
import SecondFill from '../images/second-fill.png'
import ThirdFill from '../images/third-fill.png'
import FourthFill from '../images/fourth-fill.png'
import FullGlass from '../images/full-glass.png'
import '../images/image-css.css'

export default class QuizContainer extends Component{

    // Constructor
    constructor(props){
        super(props)
        // State
        this.state = {
            bottle_image_urls: [],
            progress: 0
        }

        // Binds
        this.onProgressChange = this.onProgressChange.bind(this);
    }

    // Methods

    onProgressChange(status){
        if (status === "negative"){
            const progress_state = this.state.progress - 1
            this.setState({progress: progress_state});
        } else {
            const progress_state = this.state.progress + 1
            this.setState({progress: progress_state});
        }
    }

    // Render

    render(){

        return(
            <main>
                <Grid container justify="space-evenly">

                    <Grid item>
                        <QuestionWrapper onComplete={this.onProgressChange} questionSet={this.state.progress} />
                    </Grid>

                    <Grid item>
                        {/* <Typography variant="h1">This is the whisky image</Typography> */}
                        <img className="glass-image" src={EmptyGlass} />
                    </Grid>

                </Grid>
            </main>
        )
    }
}