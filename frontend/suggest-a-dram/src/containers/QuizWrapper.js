import { Grid, Typography, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import QuestionWrapper from './QuestionWrapper';
import EmptyGlass from '../images/empty.png';
import FirstFill from '../images/first-fill.png'
import SecondFill from '../images/second-fill.png'
import ThirdFill from '../images/third-fill.png'
import FourthFill from '../images/fourth-fill.png'
import FullGlass from '../images/full-glass.png'
import '../images/image-css.css'

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

                        {/* <Grid item>
                            <img className="glass-image" src={EmptyGlass} />
                        </Grid> */}
                    </Grid>
                </main>
            </div>
        )
    }
}