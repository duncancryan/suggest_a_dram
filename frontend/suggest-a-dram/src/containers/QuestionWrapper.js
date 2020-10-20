import React, { Component, Fragment } from 'react';
import CharacterWrapper from './CharacterWrapper';
import ResultWrapper from './ResultWrapper';
import StyleWrapper from './StyleWrapper';
import BottleImage from '../components/BottleImage'

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
    this.displayState = this.displayState.bind(this);
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
      return <p>Sorry cant find any whiskies with that style</p>
    }
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
