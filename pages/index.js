import Head from "next/head";
import React from "react";
import Hero from "../components/home/hero";

const Home = () => {
  return (
    <section>
      <Head>
        <title>AgroPro || Learn Advance farming with us</title>
      </Head>

      <Hero />
    </section>
  );
};

export default Home;
