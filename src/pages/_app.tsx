import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import '~/styles/global.scss';
import { appWithTranslation } from '~/services/i18n';
import { NotificationBar } from '~/components/molecules/NotificationBar';
import { TheNavBarContainerWithState } from '~/components/organisms/TheNavBar';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// https://www.favicon-generator.org/

const CrispWithNoSSR = dynamic(() => import('../components/organisms/Crisp'), { ssr: false });

export interface ApplicationProps {
    Component: any;
    pageProps: any;
}

const _getEnvironmentMessage = (): string => {
    const environment = getConfig().publicRuntimeConfig.app.env;

    const environmentMessages = {
        // development: 'Development environment',
        staging: 'Staging environment',
        production: 'Website is still in development',
    };
    return environmentMessages[environment];
};

const App: React.FC<ApplicationProps> = ({ Component, pageProps }) => {
    const environmentMessages = _getEnvironmentMessage();

    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
                <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
                <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
                <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
                <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
                <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
                <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
                <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/manifest.json' />
                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
                <meta name='theme-color' content='#ffffff' />
            </Head>
            <div
                dangerouslySetInnerHTML={{
                    __html: '<!-- https://www.youtube.com/watch?v=oHg5SJYRHA0 -->',
                }}
            />
            <CrispWithNoSSR />
            <div className='bg-white vh-100 vw-100 d-flex flex-column'>
                {environmentMessages && <NotificationBar message={environmentMessages} />}
                <div className='flex-fill position-relative'>
                    <TheNavBarContainerWithState>
                        <Component {...pageProps} />
                    </TheNavBarContainerWithState>
                </div>
            </div>
        </>
    );
};

export default appWithTranslation(App);
