import React from "react";

class TextEdit extends React.Component {
  state = {
    isEditing: false,
  };

  keyInput = (event) => {
    if (event.key === "Escape") {
      this.setState({ isEditing: false });
    }
    if (event.key === "Enter") {
      this.setState({ isEditing: false });
    }
  };
  render() {
    const { text, placeholder, children } = this.props;
    return (
      <section>
        {this.state.isEditing ? (
          <div
            onBlur={() => this.setState({ isEditing: false })}
            onKeyDown={(e) => this.keyInput(e)}
          >
            {children}
          </div>
        ) : (
          <p
            onClick={() => this.setState({ isEditing: true })}
            className={`${text ? "text-black" : "text-gray-500"}`}
          >
            {text || placeholder || "Editable content"}
          </p>
        )}
      </section>
    );
  }
}

export default TextEdit;
