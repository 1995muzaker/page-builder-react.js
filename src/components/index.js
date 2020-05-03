import React from "react";
import Header from "./header";
import Section from "./section";
import Testimonial from "./testimonial";

class Builder extends React.Component {
  state = {
    height: 100,
    show: false,
    items: [
      {
        id: 1,
        component: <Header />,
      },
      {
        id: 2,
        component: <Section />,
      },
      {
        id: 3,
        component: <Testimonial />,
      },
    ],
  };

  
  edit() {
    this.setState({edit:edit!==false})
  }

  componentDidMount() {
    const dataRetrieve = JSON.parse(window.localStorage.getItem("height"));
    this.setState({
      height: dataRetrieve,
    });
  }

  toggleEdit = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  zoomPicIn = () => {
    window.localStorage.setItem("height", JSON.stringify(this.state.height));
    this.setState({ height: this.state.height + 20 });
  };

  zoomPicOut = () => {
    window.localStorage.setItem("height", JSON.stringify(this.state.height));
    this.setState({ height: this.state.height - 20 });
  };

  onDragStart = (e, id) => {
    this.draggedItem = this.state.items[id];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    localStorage.setItem("items", JSON.stringify(this.state.items[id]));
  };

  onDragOver = (id) => {
    const draggedOverItem = this.state.items[id];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.items.filter((item) => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(id, 0, this.draggedItem);
    // localStorage.getItem(JSON.parse('items'));
    localStorage.getItem("items");
    //  console.log(typeof retrievedObject,retrievedObject);
    this.setState({ items });
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  render() {
    const { height, show } = this.state;

    return (
      <React.Fragment>
        {/* {this.state.items.map((item, idx) => (
          <li key={item.id} onDragOver={() => this.onDragOver(idx)}>
            <div
              className="drag"
              draggable
              onDragStart={(e) => this.onDragStart(e, idx)}
              onDragEnd={this.onDragEnd}
            >
              <span>{item.component}</span>
            </div>
          </li>
        ))} */}
        {/* <li onDragOver={() => this.onDragOver(idx)}>
          <div
            className="drag"
            draggable
            onDragStart={(e) => this.onDragStart(e, idx)}
            onDragEnd={this.onDragEnd}
          >
            <span>{this.state.items[0].component}</span>
            <span>{this.state.items[1].component}</span>
            <span>{this.state.items[2].component}</span>
          </div>
        </li> */}
        <form>
          <Header
            height={height}
            zoomPicIn={this.zoomPicIn}
            zoomPicOut={this.zoomPicOut}
            toggleEdit={this.toggleEdit}
            show={show}
          />
          <Section />
          <Testimonial />
        </form>
      </React.Fragment>
    );
  }
}

export default Builder;
