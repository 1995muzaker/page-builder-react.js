import React from "react";
import Link from "next/link";
import { SaveDiv } from "../../styles/Save";

const Save = ({ storeData }) => {
  return (
    <SaveDiv>
      <Link href="/preview">
        <button
          onClick={() => {
            storeData();
          }}
        >
          Save and preview
        </button>
      </Link>
    </SaveDiv>
  );
};

export default Save;
