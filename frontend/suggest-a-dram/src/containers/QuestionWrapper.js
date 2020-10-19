import React, {Component, Fragment} from 'react';
import CharacterWrapper from './CharacterWrapper';
import StyleWrapper from './StyleWrapper';

export default class QuestionWrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            styleWhiskies: [],
            characterWhiskies: [],
            rankedWhiskies: []
        }
        // Binds
        this.onSubmitStyle = this.onSubmitStyle.bind(this);
        this.onCharacterSelect = this.onCharacterSelect.bind(this);
        this.onCharacterSubmit = this.onCharacterSubmit.bind(this);
    }

    onSubmitStyle(data){
        this.setState({styleWhiskies: data});
        this.props.onComplete();
    }
        
    onCharacterSubmit(data) {
        this.setState({characterWhiskies: data});
        this.props.onComplete();
    }

    onCharacterSelect(){
        this.props.onComplete();
    }

    questionSet() {

        if (this.props.questionSet === 0){
            return <StyleWrapper onProgressChange={this.onSubmitStyle} />
        } else {
            return (
            <CharacterWrapper stage={this.props.questionSet} 
                onProgressChange={this.onCharacterSelect} 
                characterSubmit={this.onCharacterSelect}
                currentWhiskies={this.state.styleWhiskies}
             />
             )
        }

    }

    render(){

        return(
            <Fragment>
                {this.questionSet()}
            </Fragment>
        )
    }
}