import React from "react";

import "../styles/global.scss";
import TheNavBar from "../components/organisms/TheNavBar";

const App = ({ Component, pageProps }) => (
    <>
        <TheNavBar />
        <Component {...pageProps} />
    </>
);

export default App;