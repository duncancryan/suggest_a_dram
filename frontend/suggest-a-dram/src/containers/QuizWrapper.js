import { Grid, Typography, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import QuestionWrapper from './QuestionWrapper';
import EmptyGlass from '../images/whisky-state-1.svg';
import FirstFill from '../images/whisky-state-2.svg';
import SecondFill from '../images/whisky-state-3.svg';
import ThirdFill from '../images/whisky-state-4.svg';
import FourthFill from '../images/whisky-state-5.svg';
import FullGlass from '../images/whisky-state-6.svg';
import '../images/image-css.css'
import BottleImage from '../components/BottleImage';

export default class QuizContainer extends Component {

    // Constructor
    constructor(props) {
        super(props)
        // State
        this.state = {
            bottle_image_urls: [EmptyGlass, FirstFill, SecondFill, ThirdFill, FourthFill, FullGlass],
            progress: 0
        }

        // Binds
        this.onProgressChange = this.onProgressChange.bind(this);
    }

    // Methods

    onProgressChange(status) {
        if (status === "negative") {
            const progress_state = this.state.progress - 1
            this.setState({ progress: progress_state });
        } else {
            const progress_state = this.state.progress + 1
            this.setState({ progress: progress_state });
        }
    }

    // Render

    render() {

        return (
            <div className='background'>
                <main className="slider-page">
                    <Grid container justify="space-evenly">
                        <Paper className="slider-section">
                            <Grid item>
                                <QuestionWrapper onComplete={this.onProgressChange} questionSet={this.state.progress} images={this.state.bottle_image_urls} />
                            </Grid>
                        </Paper>

                        <Grid item>
                            <BottleImage progress={this.state.progress} images={this.state.bottle_image_urls}/>
                        </Grid>
                    </Grid>
                </main>
            </div>
        )
    }
}