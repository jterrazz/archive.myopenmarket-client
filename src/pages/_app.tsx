import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import getConfig from 'next/config';

import '~/styles/global.scss';
import { NotificationBar } from '~/components/molecules/NotificationBar';

const environment = getConfig().publicRuntimeConfig.app.env;

const _getEnvironmentMessage = (): string => {
    const environmentMessages = {
        development: 'Development environment',
        staging: 'Staging environment',
    };
    return environmentMessages[environment];
};

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <NotificationBar message={_getEnvironmentMessage()} />
        <div
            dangerouslySetInnerHTML={{
                __html: '<!-- https://www.youtube.com/watch?v=oHg5SJYRHA0 -->',
            }}
        />
        <div className='bg-white vh-100 d-flex flex-column'>
            <Component {...pageProps} />
        </div>
    </>
);

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default App;
