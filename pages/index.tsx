import React from "react";
import Head from 'next/head';

import Home from "../components/templates/Home";

const HomePage = () => (
  <div>
    <Head>
      <title>Home - myshop.eth</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Home />
  </div>
)

export default HomePage
