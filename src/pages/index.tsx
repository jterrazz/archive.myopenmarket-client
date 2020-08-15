import React from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Home from '../components/templates/Home';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

const HomePage = () => (
    <div>
        <Head>
            <title>Home - {getConfig().publicRuntimeConfig.app['page-title']}</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <Home />
    </div>
);

export default HomePage;
