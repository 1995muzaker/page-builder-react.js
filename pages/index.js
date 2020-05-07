import Head from "next/head";
import React from "react";
import Builder from "../src/components";
import GlobalStyles from "../src/styles/GlobalStyles";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Builder />
      <GlobalStyles />
    </React.Fragment>
  );
}
