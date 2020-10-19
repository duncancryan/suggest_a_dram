import { Grid, Typography } from '@material-ui/core';
import React, {Component} from 'react';
import QuestionWrapper from './QuestionWrapper';

export default class QuizContainer extends Component{

    // Constructor
    constructor(props){
        super(props)
        // State
        this.state = {
            bottle_image_urls: [],
            progress: 0
        }
    }

    // Methods

    onProgressChange(){
        this.setState({progress: this.progress + 1});
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
                        <Typography variant="h1">This is the whisky image</Typography>
                    </Grid>

                </Grid>
            </main>
        )
    }
}