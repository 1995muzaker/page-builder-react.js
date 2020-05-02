import React from "react";
import Header from "./header";
import Section from "./section";
import Testimonial from "./testimonial";

class Builder extends React.Component {
  state = {
    items: [
      {
        component: <Header />,
      },
      {
        component: <Section />,
      },
      {
        component: <Testimonial />,
      },
    ],
  };

  onDragStart = (e, index) => {
    this.draggedItem = this.state.items[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = (index) => {
    const draggedOverItem = this.state.items[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.items.filter((item) => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ items });
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  render() {
    return (
      <React.Fragment>
        {this.state.items.map((item, idx) => (
          <li key={item} onDragOver={() => this.onDragOver(idx)}>
            <div
              className="drag"
              draggable
              onDragStart={(e) => this.onDragStart(e, idx)}
              onDragEnd={this.onDragEnd}
            >
              <span>{item.component}</span>
            </div>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default Builder;
