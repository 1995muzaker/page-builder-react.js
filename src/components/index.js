import React from "react";
import Header from "./header";
import Section from "./section";
import Testimonial from "./testimonial";
import Save from "./save";
import { MainDiv } from "../styles/Header";
import { StoreConsumer, StoreProvider } from "../store";

class Builder extends React.Component {
  render() {
    const styleDiv = {
      marginTop: "55px",
    };
    const topDiv = {
      marginTop: "0px",
    };
    return (
      <StoreProvider>
        <StoreConsumer>
          {({
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
            navShow,
            zoomPicIn,
            zoomPicOut,
            toggleEdit,
            handleInputChange,
            items,
            toggleLogo,
            onCropChange,
            onCropComplete,
            onZoomChange,
            onLogoChange,
            onFileChange,
            showLogoImage,
            removeLogo,
            zoomCoverIn,
            zoomCoverOut,
            toggleSection,
            toggleImage,
            showCroppedImage,
            removeBannner,
            zoomThumbnailIn,
            zoomThumbnailOut,
            toggleTest,
            onDragStart,
            onDragOver,
            onDragEnd,
            testimonialTitle,
            storeData,
          }) => (
            <React.Fragment>
              <MainDiv style={navShow ? styleDiv : topDiv}>
                <Header
                  height={height}
                  zoomPicIn={zoomPicIn}
                  zoomPicOut={zoomPicOut}
                  toggleEdit={toggleEdit}
                  show={show}
                  description={description}
                  email={email}
                  tel={tel}
                  title={title}
                  handleInputChange={handleInputChange}
                  onDragStart={this.onDragStart}
                  onDragOver={this.onDragOver}
                  onDragEnd={this.onDragEnd}
                  items={items}
                  imageSrc={logoImgSrc}
                  croppedImage={croppedLogo}
                  crop={cropLogo}
                  zoom={zoomLogo}
                  aspect={aspectLogo}
                  showImage={showImageLogo}
                  toggleImage={toggleLogo}
                  onCropChange={onCropChange}
                  onCropComplete={onCropComplete}
                  onZoomChange={onZoomChange}
                  onFileChange={onLogoChange}
                  showCroppedImage={showLogoImage}
                  removeLogo={removeLogo}
                />
                <Section
                  height={sectionHeight}
                  zoomPicIn={zoomCoverIn}
                  zoomPicOut={zoomCoverOut}
                  toggleSection={toggleSection}
                  show={showSection}
                  sectionTitle={sectionTitle}
                  sectionDescription={sectionDescription}
                  handleInputChange={handleInputChange}
                  buttonTxt={buttonTxt}
                  buttonTxtOne={buttonTxtOne}
                  buttonTxtTwo={buttonTxtTwo}
                  imageSrc={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  croppedImage={croppedImage}
                  aspect={aspect}
                  showImage={showImage}
                  toggleImage={toggleImage}
                  onCropChange={onCropChange}
                  onCropComplete={onCropComplete}
                  onZoomChange={onZoomChange}
                  onFileChange={onFileChange}
                  showCroppedImage={showCroppedImage}
                  removeLogo={removeBannner}
                />
                <Testimonial
                  height={testHeight}
                  zoomPicIn={zoomThumbnailIn}
                  zoomPicOut={zoomThumbnailOut}
                  toggleTest={toggleTest}
                  show={showTest}
                  onDragStart={onDragStart}
                  onDragOver={onDragOver}
                  onDragEnd={onDragEnd}
                  items={items}
                  testimonialTitle={testimonialTitle}
                  handleInputChange={handleInputChange}
                />
              </MainDiv>
              <Save storeData={storeData} />
            </React.Fragment>
          )}
        </StoreConsumer>
      </StoreProvider>
    );
  }
}

export default Builder;

//         <Preview
//           height={height}
//           testHeight={testHeight}
//           sectionHeight={sectionHeight}
//           description={description}
//           croppedImage={croppedImage}
//           croppedLogo={croppedLogo}
//           email={email}
//           tel={tel}
//           title={title}
//           sectionTitle={sectionTitle}
//           sectionDescription={sectionDescription}
//           buttonTxt={buttonTxt}
//           buttonTxtOne={buttonTxtOne}
//           buttonTxtTwo={buttonTxtTwo}
//           items={this.state.items}
//           testimonialTitle={this.state.testimonialTitle}
//         />
