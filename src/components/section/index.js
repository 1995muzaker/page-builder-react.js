import React from "react";
import Cropper from "react-easy-crop";
import { SectionDiv, CallToAction } from "../../styles/Section";
import GetCropImage from "./GetCropImage";
import TextEdit from "../header/TextEdit";

class Section extends React.Component {
  state = {
    imageSrc: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 1 / 1,
    croppedAreaPixels: null,
    croppedImage: null,
    showImage: true,
  };

  toggleImage = (value) => this.setState({ showImage: value });

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

  showCroppedImage = async () => {
    const croppedImage = await GetCropImage(
      this.state.imageSrc,
      this.state.croppedAreaPixels
    );
    this.setState({ croppedImage });
  };

  handleClose = () => {
    this.setState({ croppedImage: null });
  };

  render() {
    const {
      imageSrc,
      crop,
      zoom,
      croppedImage,
      aspect,
      showImage,
    } = this.state;
    const {
      show,
      toggleSection,
      zoomPicOut,
      zoomPicIn,
      height,
      sectionTitle,
      handleInputChange,
      sectionDescription
    } = this.props;
    return (
      <SectionDiv>
        <TextEdit
          text={sectionTitle}
          placeholder="Description for the task"
          // childRef={textareaRef}
          type="text"
        >
          <input
            // ref={textareaRef}
            name="sectionTitle"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Description for the task"
            rows="5"
            value={sectionTitle}
            onChange={handleInputChange}
          />
        </TextEdit>
        <TextEdit
          text={sectionDescription}
          placeholder="Description for the task"
          // childRef={textareaRef}
          type="text"
        >
          <textarea
            // ref={textareaRef}
            name="sectionDescription"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Description for the task"
            rows="5"
            value={sectionDescription}
            onChange={handleInputChange}
          />
        </TextEdit>
        <div>
          {showImage ? (
            <div className="upload-member">
              <input
                type="file"
                required
                onChange={
                  (({ target: { validity, files: file } }) =>
                    validity.valid && this.addImg({ img: { file } }),
                  this.onFileChange)
                }
              />
              <p>Upload Photo</p>
            </div>
          ) : (
            <ImgDialog imageSrc={croppedImage} toggleImage={this.toggleImage} />
          )}

          {imageSrc && (
            <div>
              {showImage ? (
                <React.Fragment>
                  <div className="crop-container">
                    <Cropper
                      image={imageSrc}
                      crop={crop}
                      zoom={zoom}
                      cropShape="square"
                      aspect={aspect}
                      onCropChange={this.onCropChange}
                      onCropComplete={this.onCropComplete}
                      onZoomChange={this.onZoomChange}
                    />
                  </div>

                  <div className="show-img">
                    <button
                      type="button"
                      onClick={() => {
                        this.showCroppedImage();
                        this.toggleImage(false);
                      }}
                      variant="raised"
                      color="primary"
                    >
                      Apply
                    </button>
                  </div>
                </React.Fragment>
              ) : null}
            </div>
          )}
          {show ? (
            <div>
              <button onClick={zoomPicOut}>-</button>
              <button onClick={zoomPicIn}>+</button>
            </div>
          ) : null}
          <div onClick={toggleSection}>
            <img src="/section.png" alt="logo" height={height} />
          </div>
        </div>
        <CallToAction>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </CallToAction>
      </SectionDiv>
    );
  }
}

export default Section;

const ImgDialog = (props) => (
  <div className="img-dialog">
    {props.imageSrc && (
      <img alt="Crop" style={{ maxWidth: "100%" }} src={props.imageSrc} />
    )}
  </div>
);

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}
