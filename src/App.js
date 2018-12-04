import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import students from "./students.js";
import Card from "./Card.js";
import EditForm from "./EditForm.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sList: students,
      sCurrent: 0,
      editOn: false
    };

    //this.dispEdit = this.dispEdit.bind(this);

    this.next = this.next.bind(this);
    this.back = this.back.bind(this);

    this.newS = this.newS.bind(this);
    this.deleteS = this.deleteS.bind(this);
    this.editS = this.editS.bind(this);

    this.sendS = this.sendS.bind(this);
  }

  next() {
    if (this.state.sCurrent != this.state.sList.length - 1)
      this.setState({ sCurrent: this.state.sCurrent + 1 });
  }
  back() {
    if (this.state.sCurrent != 0)
      this.setState({ sCurrent: this.state.sCurrent - 1 });
  }

  newS() {
    this.setState({
      sList: [
        ...this.state.sList,
        this.state.sList[this.state.sList.length - 1]
      ]
    });
  }
  deleteS() {
    var newList = this.state.sList;
    newList.splice(this.state.sCurrent, 1);
    this.setState({
      sList: newList
    });

    // sCurrent isnt linked properly until if statement runs successfully
    if (this.state.sCurrent == this.state.sList.length) {
      this.setState({ sCurrent: this.state.sCurrent - 1 });
    }
  }
  editS() {
    this.setState({ editOn: !this.state.editOn });
  }

  sendS(sObj) {
    var newList = this.state.sList;
    newList[this.state.sCurrent] = sObj;
    this.setState({
      sList: newList
    });
    this.editS();
  }

  render() {
    console.log(this.state);
    return (
      //{this.state.editForm ? dispEdit : dispCard}Card
      <div>
        {!this.state.editOn ? (
          <Card sCurrent={this.state.sCurrent} sList={this.state.sList} />
        ) : (
          <EditForm
            sendS={this.sendS}
            sCurrent={this.state.sCurrent}
            sList={this.state.sList}
          />
        )}

        <div id="bot-nav">
          <div id="guide-c">
            <button id="guide" onClick={this.back}>
              Back
            </button>
          </div>
          <br />
          <div id="options-c">
            <button id="options" onClick={this.newS}>
              New
            </button>
            <button id="options" onClick={this.editS}>
              Edit
            </button>
            <button id="options" onClick={this.deleteS}>
              Delete
            </button>
          </div>
          <div id="guide-c">
            <button id="guide" onClick={this.next}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
