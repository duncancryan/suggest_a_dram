// Imports
import React, { Component, Fragment } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
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
        elements: ["Smoke", "Iodine", "Tobacco", "Coffee", "Oak", 'Salt'],
        fruit: ["Apple", "Orange", "Cherry", "Peach", "Blackcurrant", "Raisins"],
        confectionery: [
          "Toffee",
          "Honey",
          "Chocolate",
          "Vanilla",
          "Caramel",
          "Butterscotch",
        ],
        spice: ["Cinnamon", "Aniseed", "Mint", "Black Pepper", "Rosemary", "Nutmeg"],
        floral: ["Grass", "Heather", "Honeysuckle", "Rose", "Hay", "Elderflower"],
        fatty: ["Butter", "Cream", "Almond", "Hazelnut", "Coconut", "Olive"],
      },
    };

    // Binds
    this.onTagSelect = this.onTagSelect.bind(this);
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
      this.setState({ element_score: this.state.element_score + 1 });
    } else if (tagType === "fruit") {
      this.setState({ element_score: this.state.fruit_score + 1 });
    } else if (tagType === "confectionery") {
      this.setState({ confectionery_score: this.state.confectionery_score + 1 });
    } else if (tagType === "spice") {
      this.setState({ spice_score: this.state.spice_score + 1 });
    } else if (tagType === "floral") {
      this.setState({ floral_score: this.state.floral_score + 1 });
    } else if (tagType === "fatty") {
      this.setState({ fatty_score: this.state.fatty_score + 1 });
    }

    this.nextStage();
  }

  chipSet() {
    if (this.props.stage < 7){
      return (
        <Fragment>
            <Grid item >
              <CharacterItem
              type="element"
              text={this.state.tagArrays.elements[this.props.stage - 1]}
              onSelected={this.onTagSelect}
              />
            </Grid>
            <Grid item>
              <CharacterItem
              type="fruit"
              text={this.state.tagArrays.fruit[this.props.stage - 1]}
              onSelected={this.onTagSelect}
              />
            </Grid>
            <Grid item>
              <CharacterItem
              type="confectionery"
              text={this.state.tagArrays.confectionery[this.props.stage - 1]}
              onSelected={this.onTagSelect}
              />
            </Grid>
            <Grid item>
              <CharacterItem
              type="spice"
              text={this.state.tagArrays.spice[this.props.stage - 1]}
              onSelected={this.onTagSelect}
              />
            </Grid>
            <Grid item>
              <CharacterItem
              type="floral"
              text={this.state.tagArrays.floral[this.props.stage - 1]}
              onSelected={this.onTagSelect}
              />
            </Grid>
            <Grid item>
              <CharacterItem
              type="fatty"
              text={this.state.tagArrays.fatty[this.props.stage - 1]}
              onSelected={this.onTagSelect}
              />
            </Grid>
        </Fragment>
      );
    }
  }

  buttonDisplay() {

    if (this.props.stage > 6) {
        return <Button variant="contained" colour="secondary" href="/result" onClick={this.submit}>Finish</Button>
    }

  }

  //Render
  render() {
    return (
      <Fragment>
        <Typography variant="h3">Time to choose some character!</Typography>
        <Typography variant="h4">{this.props.stage - 1}/6</Typography>

        <Grid container justify="space-evenly">
            {this.chipSet()}
            {this.buttonDisplay()}
        </Grid>

      </Fragment>
    );
  }
}
