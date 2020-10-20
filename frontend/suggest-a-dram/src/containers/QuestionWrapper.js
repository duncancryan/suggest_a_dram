import React, { Component, Fragment } from 'react';
import CharacterWrapper from './CharacterWrapper';
import StyleWrapper from './StyleWrapper';
import { Button, Typography } from '@material-ui/core';

export default class QuestionWrapper extends Component {

  constructor(props) {
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

  onSubmitStyle(data) {
    if (data.length > 0) {
      this.setState({ styleWhiskies: data });
      this.props.onComplete("positive");
    } else {
      this.props.onComplete("negative");
    }
  }

  onCharacterSubmit(data) {
    this.setState({ rankedWhiskies: data });
    this.props.setFinalSet(data);
    this.props.onComplete("positive");
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
        <Fragment>
          <CharacterWrapper 
            stage={this.props.questionSet}
            onProgressChange={this.onCharacterSelect}
            characterSubmit={this.onCharacterSubmit}
            currentWhiskies={this.state.styleWhiskies}
          />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Typography variant="h2">It's not you it's us!</Typography>
          <div className="error-wrapper">
            <Typography variant="body1">Sorry, we couldn't find any whiskies that matched your style.</Typography>
            <Typography variant="body1">Our database is still growing so we probibily haven't seen your style before!</Typography>
            <Typography variant="body2">Try again by clicking the button below</Typography>
          </div>
          <Button variant="contained" color="secondary" href="/quiz" className="quiz-button">Try again!</Button>
        </Fragment>
      );
    }
  }

  render() {
    return (

      <Fragment>

        {this.questionSet()}

      </Fragment>

    );
  }
}
