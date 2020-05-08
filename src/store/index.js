import React from "react";
import GetCropImage from "../components/section/GetCropImage";
const { Provider, Consumer } = React.createContext();

class StoreProvider extends React.Component {
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
    testimonialTitle: "Lorem Ipsum",
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
    preview: true,
    navShow: "",
    footer:
      "The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor",
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

  removeBannner = () => {
    this.setState({
      croppedImage: undefined,
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
      const imageDataUrl = await this.readFile(e.target.files[0]);
      this.setState({
        imageSrc: imageDataUrl,
        crop: { x: 0, y: 0 },
        zoom: 1,
      });
    }
  };

  onLogoChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageDataUrl = await this.readFile(e.target.files[0]);
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

  toggleEdit = (value) => {
    this.setState({
      show: !this.state.show,
      navShow: !this.state.navShow,
    });
  };

  toggleTest = () => {
    this.setState({
      showTest: !this.state.showTest,
      navShow: !this.state.navShow,
    });
  };

  toggleSection = () => {
    this.setState({
      showSection: !this.state.showSection,
      navShow: !this.state.navShow,
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

  showPreview = () => {
    this.setState({
      preview: false,
    });
  };

  storeData = () => {
    // e.preventDefault();
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
    window.localStorage.setItem(
      "testimonialTitle",
      JSON.stringify(this.state.testimonialTitle)
    );
    window.localStorage.setItem(
      "buttonTxt",
      JSON.stringify(this.state.buttonTxt)
    );
    window.localStorage.setItem(
      "buttonTxtOne",
      JSON.stringify(this.state.buttonTxtOne)
    );
    window.localStorage.setItem(
      "buttonTxtTwo",
      JSON.stringify(this.state.buttonTxtTwo)
    );
    window.localStorage.setItem("cropResult", this.state.cropResult);
    window.localStorage.setItem("croppedImage", this.state.croppedImage);
    window.localStorage.setItem("croppedLogo", this.state.croppedLogo);
    window.localStorage.setItem(
      "sectionDescription",
      JSON.stringify(this.state.sectionDescription)
    );
    window.localStorage.setItem("preview", JSON.stringify(this.state.preview));
    window.localStorage.setItem("footer", JSON.stringify(this.state.footer));
  };

  readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };
  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getData: this.getData,
          removeLogo: this.removeLogo,
          removeBannner: this.removeBannner,
          toggleImage: this.toggleImage,
          toggleLogo: this.toggleLogo,
          onCropChange: this.onCropChange,
          onCropComplete: this.onCropComplete,
          onZoomChange: this.onZoomChange,
          onFileChange: this.onFileChange,
          onLogoChange: this.onLogoChange,
          showCroppedImage: this.showCroppedImage,
          showLogoImage: this.showLogoImage,
          handleClose: this.handleClose,
          handleInputChange: this.handleInputChange,
          toggleEdit: this.toggleEdit,
          toggleTest: this.toggleTest,
          toggleSection: this.toggleSection,
          zoomPicIn: this.zoomPicIn,
          zoomPicOut: this.zoomPicOut,
          zoomCoverIn: this.zoomCoverIn,
          zoomCoverOut: this.zoomCoverOut,
          zoomThumbnailIn: this.zoomThumbnailIn,
          zoomThumbnailOut: this.zoomThumbnailOut,
          onDragStart: this.onDragStart,
          onDragOver: this.onDragOver,
          onDragEnd: this.onDragEnd,
          showPreview: this.showPreview,
          storeData: this.storeData,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreProvider, Consumer as StoreConsumer };
