import React from 'react';
import PropTypes from 'prop-types';

import '../styles/global.scss';
import TheNavBar from '../components/organisms/TheNavBar';

const App = ({ Component, pageProps }) => (
    <>
        <div
            dangerouslySetInnerHTML={{
                __html: '<!-- https://www.youtube.com/watch?v=oHg5SJYRHA0 -->',
            }}
        />
        <div className='bg-white'>
            <TheNavBar />
            <Component {...pageProps} />
        </div>
    </>
);

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
    apollo: PropTypes.object,
};

export default App;
