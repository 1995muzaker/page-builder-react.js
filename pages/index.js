import Head from "next/head";
import Builder from "../src/components";
import GlobalStyles from "../src/styles/GlobalStyles";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Builder />
      <GlobalStyles />
    </div>
  );
}
