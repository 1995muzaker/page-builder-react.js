import React from "react";

class TextEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      type: props.type || "text",
      value: props.value || "",
      editClassName: props.editClassName,
      edit: false,
    };
  }

  focusInput = (event) => {
    const value = event.target.value;
    event.target.value = "";
    event.target.value = value;
    this.setState({ backup: this.state.value });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  blurInput = () => {
    this.setState({ edit: false });
  };

  keyInput = (event) => {
    if (event.key === "Escape") {
      this.setState({ edit: false, value: this.state.backup });
    }
    if (event.key === "Enter") {
      this.setState({ edit: false });
    }
  };

  handleClick = () => {
    this.setState({ edit: this.state.edit !== true });
  };
  render() {
    return (
      (this.state.edit === true && (
        <input
          name={this.state.name}
          type={this.state.type}
          value={this.state.value}
          className={this.state.editClassName}
          autoFocus
          onFocus={this.focusInput}
          onChange={this.handleChange}
          onBlur={this.blurInput}
          onKeyUp={this.keyInput}
        />
      )) || <p onClick={this.handleClick}>{this.state.value}</p>
    );
  }
}

export default TextEdit;
