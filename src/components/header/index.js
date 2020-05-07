import React from "react";
import { HeaderDiv, Logo, HeaderList } from "../../styles/Header";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import TextEditView from "./TextEditView";
import Resize from "../common";
import Cropper from "react-easy-crop";
import { UploadContainer, ApplyButton } from "../../styles/Section";

const Header = ({
  zoomPicIn,
  zoomPicOut,
  height,
  show,
  description,
  email,
  tel,
  title,
  handleInputChange,
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
  toggleEdit,
  removeLogo,
}) => {
  return (
    <React.Fragment>
      <Resize
        show={show}
        zoomPicIn={zoomPicIn}
        zoomPicOut={zoomPicOut}
        onFileChange={onFileChange}
        removeLogo={removeLogo}
      />

      <HeaderDiv>
        <div>
          <ImgDialog
            croppedImage={croppedImage}
            toggleImage={toggleImage}
            toggleEdit={toggleEdit}
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
          {/* <Logo onClick={toggleEdit}>
            <img src="/logo.png" alt="logo" height={height} />
          </Logo> */}
        </div>

        <HeaderList>
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaGooglePlusG />
            </li>
          </ul>
          <div>
            <TextEditView
              description={description}
              email={email}
              tel={tel}
              title={title}
              handleInputChange={handleInputChange}
            />
          </div>
        </HeaderList>
      </HeaderDiv>
    </React.Fragment>
  );
};

export default Header;

const ImgDialog = (props) => (
  <div className="img-dialog">
    {props.croppedImage && (
      <img
        alt="Crop"
        height={props.height}
        onClick={props.toggleEdit}
        style={{ maxWidth: "100%" }}
        src={props.croppedImage}
      />
    )}
  </div>
);
