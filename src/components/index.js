import React from "react";
import Header from "./header";
import Section from "./section";
import Testimonial from "./testimonial";
import Save from "./save";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import GetCropImage from "./section/GetCropImage";

class Builder extends React.Component {
  state = {
    height: 80,
    show: false,
    showSection: false,
    showTest: false,
    testHeight: 150,
    sectionHeight: 500,
    title: "John Doe",
    description: "Sale Developement Representative",
    email: "johndoe@gmail.com",
    tel: "847004890",
    sectionTitle: "The Lorem Ipsum dolor",
    sectionDescription:
      "The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor",
    buttonTxt: "button 1",
    buttonTxtOne: "button 2",
    buttonTxtTwo: "button 3",
    items: [
      {
        id: 1,
        imgUrl: "/section1.png",
      },
      {
        id: 2,
        imgUrl: "/section2.png",
      },
      {
        id: 3,
        imgUrl: "/section3.png",
      },
    ],
    logoImgSrc: null,
    croppedLogo: "/logo.png",
    cropLogo: { x: 0, y: 0 },
    zoomLogo: 1,
    aspectLogo: 16 / 9,
    croppedAreaPixelsLogo: null,
    showImageLogo: true,
    imageSrc: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 16 / 9,
    croppedAreaPixels: null,
    croppedImage: "/section.png",
    showImage: true,

    src: null,
    cropResult: null,
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

  removeLogo = () => {
    this.setState({
      croppedLogo: undefined,
    });
  };

  // upload image
  toggleImage = (value) => this.setState({ showImage: value });
  toggleLogo = (value) => this.setState({ showImageLogo: value });

  onCropChange = (crop) => {
    this.setState({ crop });
  };

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    this.setState({ croppedAreaPixels });
  };

  onZoomChange = (zoom) => {
    this.setState({ zoom });
  };

  onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageDataUrl = await readFile(e.target.files[0]);
      this.setState({
        imageSrc: imageDataUrl,
        crop: { x: 0, y: 0 },
        zoom: 1,
      });
    }
  };

  onLogoChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageDataUrl = await readFile(e.target.files[0]);
      this.setState({
        logoImgSrc: imageDataUrl,
        crop: { x: 0, y: 0 },
        zoom: 1,
      });
    }
  };

  showCroppedImage = async () => {
    const croppedImage = await GetCropImage(
      this.state.imageSrc,
      this.state.croppedAreaPixels
    );
    this.setState({ croppedImage });
  };

  showLogoImage = async () => {
    const croppedLogo = await GetCropImage(
      this.state.logoImgSrc,
      this.state.croppedAreaPixels
    );
    this.setState({ croppedLogo });
  };

  handleClose = () => {
    this.setState({ croppedImage: null });
  };

  // ******************* //

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
    });
  };

  zoomPicOut = (e) => {
    e.preventDefault();

    // window.localStorage.setItem("height", JSON.stringify(this.state.height));
    this.setState({
      height: this.state.height - 20,
    });
  };

  zoomCoverIn = (e) => {
    e.preventDefault();
    // window.localStorage.setItem("height", JSON.stringify(this.state.height));
    this.setState({
      sectionHeight: this.state.sectionHeight + 20,
    });
  };

  zoomCoverOut = (e) => {
    e.preventDefault();

    // window.localStorage.setItem("height", JSON.stringify(this.state.height));
    this.setState({
      sectionHeight: this.state.sectionHeight - 20,
    });
  };

  zoomThumbnailIn = (e) => {
    e.preventDefault();
    // window.localStorage.setItem("height", JSON.stringify(this.state.height));
    this.setState({
      testHeight: this.state.testHeight + 20,
    });
  };

  zoomThumbnailOut = (e) => {
    e.preventDefault();

    // window.localStorage.setItem("height", JSON.stringify(this.state.height));
    this.setState({
      testHeight: this.state.testHeight - 20,
    });
  };

  onDragStart = (e, id) => {
    this.draggedItem = this.state.items[id];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
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
    window.localStorage.setItem(
      "sectionTitle",
      JSON.stringify(this.state.sectionTitle)
    );
    window.localStorage.setItem("items", JSON.stringify(this.state.items));
    // window.localStorage.setItem(
    //   "src",
    //   JSON.stringify(this.state.src)
    // );
    window.localStorage.setItem("cropResult", this.state.cropResult);
    window.localStorage.setItem("croppedImage", this.state.croppedImage);
    window.localStorage.setItem("croppedLogo", this.state.croppedLogo);
    window.localStorage.setItem(
      "sectionDescription",
      JSON.stringify(this.state.sectionDescription)
    );
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
      sectionTitle,
      sectionDescription,
      buttonTxt,
      buttonTxtOne,
      buttonTxtTwo,
      imageSrc,
      crop,
      zoom,
      croppedImage,
      aspect,
      showImage,
      showImageLogo,
      logoImgSrc,
      croppedLogo,
      cropLogo,
      zoomLogo,
      aspectLogo,
    } = this.state;

    return (
      <React.Fragment>
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
          onDragStart={this.onDragStart}
          onDragOver={this.onDragOver}
          onDragEnd={this.onDragEnd}
          items={this.state.items}
          imageSrc={logoImgSrc}
          croppedImage={croppedLogo}
          crop={cropLogo}
          zoom={zoomLogo}
          aspect={aspectLogo}
          showImage={showImageLogo}
          toggleImage={this.toggleLogo}
          onCropChange={this.onCropChange}
          onCropComplete={this.onCropComplete}
          onZoomChange={this.onZoomChange}
          onFileChange={this.onLogoChange}
          showCroppedImage={this.showLogoImage}
          removeLogo={this.removeLogo}
        />
        <Section
          height={sectionHeight}
          zoomPicIn={this.zoomCoverIn}
          zoomPicOut={this.zoomCoverOut}
          toggleSection={this.toggleSection}
          show={showSection}
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
          handleInputChange={this.handleInputChange}
          buttonTxt={buttonTxt}
          buttonTxtOne={buttonTxtOne}
          buttonTxtTwo={buttonTxtTwo}
          imageSrc={imageSrc}
          crop={crop}
          zoom={zoom}
          croppedImage={croppedImage}
          aspect={aspect}
          showImage={showImage}
          toggleImage={this.toggleImage}
          onCropChange={this.onCropChange}
          onCropComplete={this.onCropComplete}
          onZoomChange={this.onZoomChange}
          onFileChange={this.onFileChange}
          showCroppedImage={this.showCroppedImage}
        />
        <Testimonial
          height={testHeight}
          zoomPicIn={this.zoomThumbnailIn}
          zoomPicOut={this.zoomThumbnailOut}
          toggleTest={this.toggleTest}
          show={showTest}
          onDragStart={this.onDragStart}
          onDragOver={this.onDragOver}
          onDragEnd={this.onDragEnd}
          items={this.state.items}
        />
        <Save storeData={this.storeData} />
      </React.Fragment>
    );
  }
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default Builder;
