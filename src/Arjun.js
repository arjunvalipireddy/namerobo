import React, { Component } from "react";
import "./cardlist.css";

class Arjun extends Component {
  constructor(props) {
    //argit jun
    super(props);
    this.state = { value: "", value2: "" };

    this.handleChange = this.handleChange.bind(this);

    // this.handleChange2= this.handleChange2.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ value2: event.target.value });
  }

  render() {
    //const {value, value1}=this.state;
    //
    return (
      <div className="tc">
        <h1>Arjun's Quick Robo </h1>
        <p>Please enter your name and see your Robo Version </p>
        <br />

        <form className="form1">
          <label>
            Your Name
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <img
            alt="robotmain"
            src={`https://robohash.org/${
              this.state.value
            }set=set2&size=150x150`}
          />
        </form>
        <br />
      </div>
    );
  }
}
export default Arjun;
