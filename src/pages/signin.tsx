import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as apiClient from '~/services/api';

import { SignInForm } from '~/components/organisms/forms/SignIn';
import { Authentication } from '~/components/templates/Authentication';
import { TheNavBarWithState } from '~/components/organisms/TheNavBar';

const SignInPage = () => {
    const router = useRouter();

    const _submitSignInHandler = async (credentials) => {
        await apiClient.signIn(credentials);
        await router.push('/');
    };

    return (
        <>
            <Head>
                <title>Sign in - {getConfig().publicRuntimeConfig.app.pageTitle}</title>
            </Head>

            <TheNavBarWithState />
            <Authentication>
                <SignInForm submitSignInHandler={_submitSignInHandler} />
            </Authentication>
        </>
    );
};

export default SignInPage;
