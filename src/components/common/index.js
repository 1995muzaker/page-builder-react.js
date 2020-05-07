import React from "react";
import { EditDiv, UploadDiv, RemoveButton } from "../../styles/Header";
import { FaTrashAlt } from "react-icons/fa";

const Resize = ({
  show,
  zoomPicOut,
  zoomPicIn,
  onFileChange,
  removeLogo,
  deleteIcon,
}) => {
  return (
    <React.Fragment>
      {show ? (
        <EditDiv>
          <UploadDiv>
            <input
              type="file"
              className="custom-file-input"
              onChange={
                (({ target: { validity, files: file } }) =>
                  validity.valid && this.addImg({ img: { file } }),
                onFileChange)
              }
            />
          </UploadDiv>
          <p>Resize</p>
          <button onClick={zoomPicOut}>-</button>
          <button onClick={zoomPicIn}>+</button>
          <RemoveButton onClick={() => removeLogo()}>
            <FaTrashAlt />
          </RemoveButton>
        </EditDiv>
      ) : null}
    </React.Fragment>
  );
};

export default Resize;
