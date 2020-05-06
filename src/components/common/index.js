import React from "react";
import { EditDiv } from "../../styles/Header";

const Resize = ({ show, zoomPicOut, zoomPicIn, onFileChange }) => {
  return (
    <React.Fragment>
      {show ? (
        <EditDiv>
          <p>Resize</p>
          <button onClick={zoomPicOut}>-</button>
          <button onClick={zoomPicIn}>+</button>

          <div className="upload-member">
            <input
              type="file"
              required
              onChange={
                (({ target: { validity, files: file } }) =>
                  validity.valid && this.addImg({ img: { file } }),
                onFileChange)
              }
            />
            <p>Upload Photo</p>
          </div>
        </EditDiv>
      ) : null}
    </React.Fragment>
  );
};

export default Resize;
