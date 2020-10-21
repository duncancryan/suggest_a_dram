import { Grid, Typography, Paper } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import QuestionWrapper from './QuestionWrapper';
import FirstBottle from '../images/whisky-state-1.svg';
import SecondBottle from '../images/whisky-state-2.svg';
import ThirdBottle from '../images/whisky-state-3.svg';
import FourthBottle from '../images/whisky-state-4.svg';
import FifthBottle from '../images/whisky-state-5.svg';
import SixthBottle from '../images/whisky-state-6.svg';
import SeventhBottle from '../images/whisky-state-7.svg';
import EighthBottle from '../images/whisky-state-8.svg';
import BottleImage from '../components/BottleImage';
import ResultWrapper from './ResultWrapper';

export default class QuizContainer extends Component {

    // Constructor
    constructor(props) {
        super(props)
        // State
        this.state = {
            bottle_image_urls: [FirstBottle, SecondBottle, ThirdBottle, FourthBottle, 
                FifthBottle, SixthBottle, SeventhBottle, EighthBottle],
            progress: 0,
            finalSet: []
        }

        // Binds
        this.onProgressChange = this.onProgressChange.bind(this);
        this.getFinalSet = this.getFinalSet.bind(this);
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

    getFinalSet(data) {
        this.setState({finalSet: data})
    }

    bottleDisplay() {
        if (this.state.progress > -1) {
            return (
                <div className="bottle-image-wrapper">
                    <Grid item>
                            <Typography variant="h2" color="primary">Stage {this.state.progress + 1}/8</Typography>
                            <BottleImage progress={this.state.progress} images={this.state.bottle_image_urls}/>
                    </Grid>
                </div>
            )
        }
    }

    displayState() {
        if (this.state.progress < 8) {
            return (
                <main className="slider-page">
                    <Grid container>
                        <Paper className="slider-section">
                            <Grid item>
                                <QuestionWrapper onComplete={this.onProgressChange} questionSet={this.state.progress} setFinalSet={this.getFinalSet} />
                            </Grid>
                        </Paper>

                        {this.bottleDisplay()}
                    </Grid>
                </main>
            );
        } else {
          return <ResultWrapper whiskies={this.state.finalSet} />
        }
    
      }

    // Render

    render() {
        return (
            <Fragment>
                {this.displayState()}
            </Fragment>
        )
    }
}