import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App" id="card-class">
        {/* <header className="App-header"> */}
        <div id="IDcount">
          ({this.props.sCurrent + 1} of {this.props.sList.length})
        </div>

        <h1>{this.props.sList[this.props.sCurrent].name}</h1>
        <p>
          Lives in: {this.props.sList[this.props.sCurrent].from}
          <br />
          Fun Fact: {this.props.sList[this.props.sCurrent].funFact}
          <br />
          City of Country: {this.props.sList[this.props.sCurrent].cityOrCountry}
          <br />
          Indoors or Outdoors:{" "}
          {this.props.sList[this.props.sCurrent].indoorsOrOutdoors}
          <br />
          Travel: {this.props.sList[this.props.sCurrent].travel}
          <br />
          Food: {this.props.sList[this.props.sCurrent].food}
          <br />
          Dog or Cat: {this.props.sList[this.props.sCurrent].dogOrCat}
        </p>
        {/* </header> */}
      </div>
    );
  }
}

export default Card;
