import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';

import '~/styles/global.scss';
import { appWithTranslation } from '~/services/i18n';
import { NotificationBar } from '~/components/molecules/NotificationBar';

const CrispWithNoSSR = dynamic(() => import('../components/organisms/Crisp'), { ssr: false });

export interface ApplicationProps {
    Component: any;
    pageProps: any;
}

const _getEnvironmentMessage = (): string => {
    const environment = getConfig().publicRuntimeConfig.app.env;

    const environmentMessages = {
        development: 'Development environment',
        staging: 'Staging environment',
        production: 'Website is still in development',
    };
    return environmentMessages[environment];
};

const App: React.FC<ApplicationProps> = ({ Component, pageProps }) => (
    <>
        <Head>
            <link rel='icon' href='/favicon.ico' />
            <link rel='manifest' href='/manifest.webmanifest' />
        </Head>
        <div
            dangerouslySetInnerHTML={{
                __html: '<!-- https://www.youtube.com/watch?v=oHg5SJYRHA0 -->',
            }}
        />
        <CrispWithNoSSR />
        <div className='bg-white vh-100 vw-100 d-flex flex-column'>
            <NotificationBar message={_getEnvironmentMessage()} />
            <div className='flex-fill position-relative'>
                <Component {...pageProps} />
            </div>
        </div>
    </>
);

export default appWithTranslation(App);
