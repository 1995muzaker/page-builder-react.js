import React from "react";
import { SectionDiv, CallToAction } from "../../styles/Section";

const Section = () => {
  return (
    <SectionDiv>
      <h1>The Lorem Ipsum dolor</h1>
      <p>
        The Lorem Ipsum dolor The Lorem Ipsum dolor The Lorem Ipsum dolor The
        Lorem Ipsum dolor The Lorem Ipsum dolor
        <br /> The Lorem Ipsum dolor The Lorem Ipsum dolor
      </p>
      <div>
        <img src="/section.png" alt="section" />
      </div>
      <CallToAction>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </CallToAction>
    </SectionDiv>
  );
};

export default Section;
