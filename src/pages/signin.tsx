import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

import Home from '../components/templates/Home';
import Authentication from '~/components/templates/Authentication';

const SignInPage = () => (
    <>
        <Head>
            <title>Sign in - {getConfig().publicRuntimeConfig.app.pageTitle}</title>
        </Head>

        <Authentication />
    </>
);

export default SignInPage;
