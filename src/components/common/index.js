import React from "react";
import { EditDiv } from "../../styles/Header";

const Resize = ({ show, zoomPicOut, zoomPicIn }) => {
  return (
    <React.Fragment>
      {show ? (
        <EditDiv>
          <p>Resize</p>
          <button onClick={zoomPicOut}>-</button>
          <button onClick={zoomPicIn}>+</button>
        </EditDiv>
      ) : null}
    </React.Fragment>
  );
};

export default Resize;
