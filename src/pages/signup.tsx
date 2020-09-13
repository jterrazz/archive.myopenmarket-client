import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

import Home from '../components/templates/Home';

const SignUpPage = () => (
    <div>
        <Head>
            <title>Sign in - {getConfig().publicRuntimeConfig.app.pageTitle}</title>
        </Head>
    </div>
);

export default SignUpPage;
