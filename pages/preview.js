import Head from "next/head";
import React from "react";
import GlobalStyles from "../src/styles/GlobalStyles";
import PreviewPage from "../src/components/preview";
import { StoreProvider, StoreConsumer } from "../src/store";
import { MainDiv, EditButton, ParentDiv } from "../src/styles/Header";
import Link from "next/link";

export default function Preview() {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EditButton>
        <Link href="/">
          <button>Back to Edit</button>
        </Link>
      </EditButton>
      <StoreProvider>
        <StoreConsumer>
          {({
            height,
            description,
            email,
            tel,
            title,
            sectionHeight,
            testHeight,
            sectionTitle,
            sectionDescription,
            buttonTxt,
            buttonTxtOne,
            buttonTxtTwo,
            croppedImage,
            croppedLogo,
            items,
            testimonialTitle,
            footer,
          }) => (
            <ParentDiv>
              <MainDiv>
                <PreviewPage
                  height={height}
                  testHeight={testHeight}
                  sectionHeight={sectionHeight}
                  description={description}
                  croppedImage={croppedImage}
                  croppedLogo={croppedLogo}
                  email={email}
                  tel={tel}
                  title={title}
                  sectionTitle={sectionTitle}
                  sectionDescription={sectionDescription}
                  buttonTxt={buttonTxt}
                  buttonTxtOne={buttonTxtOne}
                  buttonTxtTwo={buttonTxtTwo}
                  items={items}
                  testimonialTitle={testimonialTitle}
                  footer={footer}
                />
              </MainDiv>
            </ParentDiv>
          )}
        </StoreConsumer>
      </StoreProvider>
      <GlobalStyles />
    </React.Fragment>
  );
}
