import React from "react";
import { SaveDiv } from "../../styles/Save";

const Save = ({ storeData }) => {
  return (
    <SaveDiv>
      <button
        onClick={() => {
          storeData();
        }}
      >
        Save and preview
      </button>
    </SaveDiv>
  );
};

export default Save;
