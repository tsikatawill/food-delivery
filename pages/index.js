import { Download, Hero, HowItWorks } from "../components";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bella Olonje{"'"}s Food Delivery</title>
        <meta
          name="description"
          content="Why stay hungry when you can order from Bella Onojie? Download the Bella Onojie's food app now."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <HowItWorks />
      <Download />
    </>
  );
}
