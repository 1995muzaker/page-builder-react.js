import React from "react";
import Cropper from "react-easy-crop";
import {
  SectionDiv,
  CallToAction,
  UploadContainer,
  ApplyButton,
} from "../../styles/Section";
import TextEdit from "../header/TextEdit";
import Resize from "../common";

class Section extends React.Component {
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
      removeLogo,
    } = this.props;
    return (
      <SectionDiv>
        <h1>
          <TextEdit text={sectionTitle} placeholder="Title" type="text">
            <input
              name="sectionTitle"
              placeholder="Title"
              rows="5"
              value={sectionTitle}
              onChange={handleInputChange}
            />
          </TextEdit>
        </h1>
        <div style={{ padding: "0 140px" }}>
          <TextEdit
            text={sectionDescription}
            placeholder="Description"
            type="text"
          >
            <textarea
              name="sectionDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Description"
              rows="8"
              col="8"
              value={sectionDescription}
              onChange={handleInputChange}
            />
          </TextEdit>
        </div>
        <div>
          <Resize
            show={show}
            zoomPicIn={zoomPicIn}
            zoomPicOut={zoomPicOut}
            onFileChange={onFileChange}
            removeLogo={removeLogo}
          />

          <ImgDialog
            croppedImage={croppedImage}
            toggleImage={toggleImage}
            toggleSection={toggleSection}
            height={height}
          />

          {imageSrc && (
            <UploadContainer>
              {showImage ? (
                <React.Fragment>
                  <div>
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

                  <ApplyButton>
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
                  </ApplyButton>
                </React.Fragment>
              ) : null}
            </UploadContainer>
          )}

          {/* <div onClick={toggleSection}>
            <img src="/section.png" alt="logo" height={height} />
          </div> */}
        </div>
        <CallToAction>
          <button onClick={(e) => e.preventDefault()}>
            <TextEdit text={buttonTxt} placeholder="Text 1" type="text">
              <input
                name="buttonTxt"
                placeholder="Text 1"
                rows="5"
                value={buttonTxt}
                onChange={handleInputChange}
              />
            </TextEdit>
          </button>
          <button onClick={(e) => e.preventDefault()}>
            <TextEdit text={buttonTxtOne} placeholder="Text 2" type="text">
              <input
                name="buttonTxtOne"
                placeholder="Text 2"
                rows="5"
                value={buttonTxtOne}
                onChange={handleInputChange}
              />
            </TextEdit>
          </button>
          <button onClick={(e) => e.preventDefault()}>
            <TextEdit text={buttonTxtTwo} placeholder="Text 3" type="text">
              <input
                name="buttonTxtTwo"
                placeholder="Text 3"
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
