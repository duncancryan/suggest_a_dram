// Imports
import React, { Component, Fragment, Button } from "react";
import { Typography, Grid } from "@material-ui/core";
import CharacterItem from '../components/CharacterItem';

// Build component - Character Select
export default class CharacterWrapper extends Component {
  // Constructor
  constructor(props) {
    // Super
    super(props);

    // State
    this.state = {
      element_score: 0,
      fruit_score: 0,
      confectionery_score: 0,
      spice_score: 0,
      floral_score: 0,
      fatty_score: 0,
      tagArrays: {
        elements: ["Smoke", "Iodine", "Tobacco", "Coffee", "Oak"],
        fruit: ["Apple", "Orange", "Cherry", "Peach", "Blackcurrant"],
        confectionery: [
          "Honey",
          "Chocolate",
          "Vanilla",
          "Caramel",
          "Butterscotch",
        ],
        spice: ["Cinnamon", "Aniseed", "Mint", "Black Pepper", "Rosemary"],
        floral: ["Grass", "Heather", "Honeysuckle", "Rose", "Hay"],
        fatty: ["Butter", "Cream", "Almond", "Hazelnut", "Coconut"],
      },
    };
  }

  // Methods
  matchWhiskies() {
      // This will match styledWhiskies with character based
  }

  nextStage() {
      this.props.onProgressChange();
  }

  submit() {
      // This will calculated matched whiskies and send them back up
  }

  onTagSelect(tagType) {
    if (tagType === "element") {
      this.setState({ element_score: this.element_score + 1 });
    }
    if (tagType === "fruit") {
      this.setState({ element_score: this.fruit_score + 1 });
    }
    if (tagType === "confectionery") {
      this.setState({ confectionery_score: this.confectionery_score + 1 });
    }
    if (tagType === "spice") {
      this.setState({ spice_score: this.spice_score + 1 });
    }
    if (tagType === "floral") {
      this.setState({ floral_score: this.floral_score + 1 });
    }
    if (tagType === "fatty") {
      this.setState({ fatty_score: this.fatty_score + 1 });
    }
  }

  chipSet() {
    return (
      <Fragment>
          <Grid item >
            <CharacterItem
            type="element"
            text={this.state.tagArrays.elements[this.props.questionSet - 1]}
            onSelected={this.onTagSelect}
            />
          </Grid>
          <Grid item>
            <CharacterItem
            type="fruit"
            text={this.state.tagArrays.fruit[this.props.questionSet - 1]}
            onSelected={this.onTagSelect}
            />
          </Grid>
          <Grid item>
            <CharacterItem
            type="confectionery"
            text={this.state.tagArrays.confectionery[this.props.questionSet - 1]}
            onSelected={this.onTagSelect}
            />
          </Grid>
          <Grid item>
            <CharacterItem
            type="spice"
            text={this.state.tagArrays.spice[this.props.questionSet - 1]}
            onSelected={this.onTagSelect}
            />
          </Grid>
          <Grid item>
            <CharacterItem
            type="floral"
            text={this.state.tagArrays.floral[this.props.questionSet - 1]}
            onSelected={this.onTagSelect}
            />
          </Grid>
          <Grid item>
            <CharacterItem
            type="fatty"
            text={this.state.tagArrays.fatty[this.props.questionSet - 1]}
            onSelected={this.onTagSelect}
            />
          </Grid>
      </Fragment>
    );
  }

  buttonDisplay() {

    if (this.props.questionSet < 6) {
        return <Button variant="contained" colour="secondary" onClick={this.nextStage}>Next</Button>
    } else {
        return <Button variant="contained" colour="secondary" onClick={this.submit}>Finish</Button>
    }

  }

  //Render
  render() {
    return (
      <Fragment>
        <Typography variant="h3">Time to choose some character!</Typography>
        <Typography variant="h4">{this.props.stage}/5</Typography>

        <Grid container justify="space-evenly">
            {this.chipSet()}
        </Grid>

      </Fragment>
    );
  }
}
