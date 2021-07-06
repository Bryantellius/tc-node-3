import React, { Component } from "react";
import logo from "../logo.svg";
import TitleInput from "./TitleInput";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Using Props",
      total: 0,
      unit: 1,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleUnit = this.handleUnit.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
  }

  handleExcitement(e) {
    document.getElementById("reactLink").classList.toggle("hide");
  }

  handleInput(e) {
    this.setState({ title: e.target.value });
  }

  handleUnit(e) {
    this.setState({ unit: parseInt(e.target.value) });
  }

  handleTotalChange(add) {
    if (add) {
      this.setState({ total: this.state.unit + this.state.total });
    } else this.setState({ total: this.state.total - this.state.unit });
  }

  render() {
    const { link } = this.props;

    return (
      <React.Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {this.state.title} {this.state.total}
        </h1>
        <TitleInput title={this.state.title} handleInput={this.handleInput} />
        <div>
          <button onClick={() => this.handleTotalChange()}>Sub</button>
          <input
            type="number"
            name="unit"
            id="unitInput"
            value={this.state.unit ? this.state.unit : ""}
            onChange={this.handleUnit}
          />
          <button onClick={() => this.handleTotalChange(true)}>Add</button>
        </div>
        <div className="w-100">
          <label htmlFor="excitedCheckbox">Are you excited about React?</label>
          <input
            type="checkbox"
            name="excited"
            id="excitedCheckbox"
            onChange={this.handleExcitement}
          />
        </div>
        <a
          className="App-link hide"
          id="reactLink"
          href={link.src}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}
        </a>
      </React.Fragment>
    );
  }
}

export default Header;
