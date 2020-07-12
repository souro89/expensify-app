import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: "",
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    let option = e.target.elements.option.value;
    let error = this.props.onhandleAddOption(option);

    this.setState(() => {
      return {
        error,
      };
    });

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="option"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
