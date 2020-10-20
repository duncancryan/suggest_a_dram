import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterWrapper from './CharacterWrapper';
import ResultWrapper from './ResultWrapper';
import StyleWrapper from './StyleWrapper';

export default class QuestionWrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            styleWhiskies: [],
            rankedWhiskies: []
        }
        // Binds
        this.onSubmitStyle = this.onSubmitStyle.bind(this);
        this.onCharacterSelect = this.onCharacterSelect.bind(this);
        this.onCharacterSubmit = this.onCharacterSubmit.bind(this);
    }

    onSubmitStyle(data){
        if (data.length > 0) {
          this.setState({styleWhiskies: data});
          this.props.onComplete("positive");
        } else {
          this.props.onComplete("negative");
        }
    }
        
    onCharacterSubmit(data) {
        this.setState({rankedWhiskies: data});
    }


  onCharacterSelect() {
    this.props.onComplete("positive");
  }

  questionSet() {
    if (this.props.questionSet === 0) {
      return <StyleWrapper onProgressChange={this.onSubmitStyle} />;
    }

    if (this.props.questionSet > 0) {
      return (
        <CharacterWrapper
          stage={this.props.questionSet}
          onProgressChange={this.onCharacterSelect}
          characterSubmit={this.onCharacterSubmit}
          currentWhiskies={this.state.styleWhiskies}
        />
      );
    } else {
      return <p>Sorry cant find any whiskies with that style</p>
    }

    // if (this.state.styleWhiskies.length > 0){
    // } else {
    //     return <Typography variant="body1">Sorry couldn't find any whiskies matching your request. Please try again</Typography>
    // }
  }

  displayState() {

    if (this.state.rankedWhiskies.length === 0) {
      return this.questionSet();
    } else {
      return <ResultWrapper whiskies={this.state.rankedWhiskies} />
    }

  }

  render() {
    return (

      <Fragment>

       {this.displayState()}

      </Fragment>

    );
  }
}
