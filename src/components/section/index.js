import React from "react";
import Cropper from "react-easy-crop";
import { SectionDiv, CallToAction } from "../../styles/Section";
import TextEdit from "../header/TextEdit";
import Resize from "../common";

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

  render() {
    const {
      show,
      toggleSection,
      zoomPicOut,
      zoomPicIn,
      height,
      sectionTitle,
      handleInputChange,
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
      toggleImage,
      onCropChange,
      onCropComplete,
      onZoomChange,
      onFileChange,
      showCroppedImage,
    } = this.props;
    return (
      <SectionDiv>
        <h1>
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
        </h1>
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
          <Resize
            show={show}
            zoomPicIn={zoomPicIn}
            zoomPicOut={zoomPicOut}
            onFileChange={onFileChange}
          />

          <ImgDialog
            croppedImage={croppedImage}
            toggleImage={toggleImage}
            toggleSection={toggleSection}
            height={height}
          />

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
                      onCropChange={onCropChange}
                      onCropComplete={onCropComplete}
                      onZoomChange={onZoomChange}
                    />
                  </div>

                  <div className="show-img">
                    <button
                      type="button"
                      onClick={() => {
                        showCroppedImage();
                        toggleImage(false);
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

          {/* <div onClick={toggleSection}>
            <img src="/section.png" alt="logo" height={height} />
          </div> */}
        </div>
        <CallToAction>
          <button onClick={(e) => e.preventDefault()}>
            <TextEdit
              text={buttonTxt}
              placeholder="Description for the task"
              // childRef={textareaRef}
              type="text"
            >
              <input
                // ref={textareaRef}
                name="buttonTxt"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Description for the task"
                rows="5"
                value={buttonTxt}
                onChange={handleInputChange}
              />
            </TextEdit>
          </button>
          <button onClick={(e) => e.preventDefault()}>
            <TextEdit
              text={buttonTxtOne}
              placeholder="Description for the task"
              // childRef={textareaRef}
              type="text"
            >
              <input
                // ref={textareaRef}
                name="buttonTxtOne"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Description for the task"
                rows="5"
                value={buttonTxtOne}
                onChange={handleInputChange}
              />
            </TextEdit>
          </button>
          <button onClick={(e) => e.preventDefault()}>
            <TextEdit
              text={buttonTxtTwo}
              placeholder="Description for the task"
              // childRef={textareaRef}
              type="text"
            >
              <input
                // ref={textareaRef}
                name="buttonTxtTwo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Description for the task"
                rows="5"
                value={buttonTxtTwo}
                onChange={handleInputChange}
              />
            </TextEdit>
          </button>
        </CallToAction>
      </SectionDiv>
    );
  }
}

export default Section;

const ImgDialog = (props) => (
  <div className="img-dialog">
    {props.croppedImage && (
      <img
        alt="Crop"
        height={props.height}
        onClick={props.toggleSection}
        style={{ maxWidth: "100%" }}
        src={props.croppedImage}
      />
    )}
  </div>
);
