import React from "react";
import Header from "./header";
import Section from "./section";
import Testimonial from "./testimonial";
import Save from "./save";

class Builder extends React.Component {
  state = {
    height: 100,
    show: false,
    showSection: false,
    showTest: false,
    testHeight: 150,
    sectionHeight: 500,
    title: "John Doe",
    description: "Sale Developement Representative",
    email: "johndoe@gmail.com",
    tel: "847004890",
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

  componentDidMount() {
    this.getData();
  }
  getData() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    });
  };

  toggleEdit = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  toggleTest = () => {
    this.setState({
      showTest: !this.state.showTest,
    });
  };

  toggleSection = () => {
    this.setState({
      showSection: !this.state.showSection,
    });
  };

  zoomPicIn = (e) => {
    e.preventDefault();
    // window.localStorage.setItem("height", JSON.stringify(this.state.height));
    this.setState({
      height: this.state.height + 20,
      sectionHeight: this.state.sectionHeight + 20,
      testHeight: this.state.testHeight + 20,
    });
  };

  zoomPicOut = (e) => {
    e.preventDefault();

    // window.localStorage.setItem("height", JSON.stringify(this.state.height));
    this.setState({
      height: this.state.height - 20,
      sectionHeight: this.state.sectionHeight - 20,
      testHeight: this.state.testHeight - 20,
    });
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

  storeData = (e) => {
    e.preventDefault();
    window.localStorage.setItem("height", JSON.stringify(this.state.height));
    window.localStorage.setItem(
      "sectionHeight",
      JSON.stringify(this.state.sectionHeight)
    );
    window.localStorage.setItem(
      "testHeight",
      JSON.stringify(this.state.testHeight)
    );
    window.localStorage.setItem("title", JSON.stringify(this.state.title));
    window.localStorage.setItem(
      "description",
      JSON.stringify(this.state.description)
    );
    window.localStorage.setItem("email", JSON.stringify(this.state.email));
    window.localStorage.setItem("tel", JSON.stringify(this.state.tel));
  };

  render() {
    const {
      height,
      show,
      description,
      email,
      tel,
      title,
      sectionHeight,
      showSection,
      testHeight,
      showTest,
    } = this.state;

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
            description={description}
            email={email}
            tel={tel}
            title={title}
            handleInputChange={this.handleInputChange}
          />
          <Section
            height={sectionHeight}
            zoomPicIn={this.zoomPicIn}
            zoomPicOut={this.zoomPicOut}
            toggleSection={this.toggleSection}
            show={showSection}
          />
          <Testimonial
            height={testHeight}
            zoomPicIn={this.zoomPicIn}
            zoomPicOut={this.zoomPicOut}
            toggleSection={this.toggleTest}
            show={showTest}
          />
          <Save storeData={this.storeData} />
        </form>
      </React.Fragment>
    );
  }
}

export default Builder;
