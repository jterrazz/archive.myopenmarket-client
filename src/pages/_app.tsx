import React from 'react';

import '../styles/global.scss';
import TheNavBar from '../components/organisms/TheNavBar';
import PropTypes from 'prop-types';

const App = ({ Component, pageProps }) => (
    <>
        <div
            dangerouslySetInnerHTML={{
                __html: '<!-- https://www.youtube.com/watch?v=oHg5SJYRHA0 -->',
            }}
        />
        <TheNavBar />
        <Component {...pageProps} />
    </>
);

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default App;
