import React from "react";
import { SaveDiv } from "../../styles/Save";

const Save = ({ storeData, showPreview }) => {
  return (
    <SaveDiv>
      <button
        onClick={() => {
          showPreview();
          storeData();
        }}
      >
        Save
      </button>
    </SaveDiv>
  );
};

export default Save;
