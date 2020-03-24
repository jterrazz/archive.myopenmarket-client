import React from "react";

import "../styles/global.scss";
import TheNavBar from "../components/organisms/TheNavBar";

const App = ({ Component, pageProps }) => (
    <>
        <div dangerouslySetInnerHTML={{ __html: '<!-- How to hack this website: https://www.youtube.com/watch?v=oHg5SJYRHA0 -->' }} />
        <TheNavBar />
        <Component {...pageProps} />
    </>
);

export default App;