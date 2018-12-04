import React, { Component } from "react";

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      from: "",
      funFact: "",
      cityOrCountry: "",
      indoorsOrOutdoors: "",
      travel: "",
      food: "",
      dogOrCat: ""
    };

    this.updateSField = this.updateSField.bind(this);
    this.sendStudent = this.sendStudent.bind(this);
  }

  updateSField(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  sendStudent() {
    this.props.sendS(this.state);
  }

  render() {
    return (
      <div className="App" id="card-class">
        <div id="IDcountEdit">
          ({this.props.sCurrent + 1} of {this.props.sList.length})
        </div>

        <form>
          <h1>
            <input class="inputN" name="name" onChange={this.updateSField} />
          </h1>

          <p>
            Lives in:
            <input class="inputF" name="from" onChange={this.updateSField} />
            <br />
            Fun Fact:
            <input class="inputF" name="funFact" onChange={this.updateSField} />
            <br />
            City of Country:
            <input
              class="inputF"
              name="cityOrCountry"
              onChange={this.updateSField}
            />
            <br />
            Indoors or Outdoors:
            <input
              class="inputF"
              name="indoorsOrOutdoors"
              onChange={this.updateSField}
            />
            <br />
            Travel:
            <input class="inputF" name="travel" onChange={this.updateSField} />
            <br />
            Food:
            <input class="inputF" name="food" onChange={this.updateSField} />
            <br />
            Dog or Cat:
            <input
              class="inputF"
              name="dogOrCat"
              onChange={this.updateSField}
            />
            <button id="fin-edit" onClick={this.sendStudent}>
              Finish
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default EditForm;
