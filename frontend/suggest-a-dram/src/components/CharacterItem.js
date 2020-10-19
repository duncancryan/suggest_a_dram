// Imports
import React, {Component} from 'react';
import {Chip} from '@material-ui/core';

// Build component - Character Chip Item
export default class CharacterItem extends Component {

    constructor(props) {
        // Super
        super(props);

        // State
        this.state = {
            selected: false
        }

        // Binds
        this.onChoose = this.onChoose.bind(this);
    }

    // Functions
    onChoose(type){
        this.props.onSelected(type)
        this.setState({selected: true})
    }

    // Render
    render() {
        return (
            <Chip label={this.props.text} color="secondary" onClick={this.onChoose(this.props.type)} disabled={this.state.selected} />
        );
    }

}