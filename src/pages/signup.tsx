import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Authentication } from '~/components/templates/Authentication';
import { SignUpForm } from '~/components/organisms/forms/SignUp';
import * as apiClient from '~/services/api';
import { TheNavBarWithState } from '~/components/organisms/TheNavBar';

const SignUpPage = () => {
    const router = useRouter();

    const _submitSignUpHandler = async (registrationDetails) => {
        await apiClient.signUp(registrationDetails);
        await router.push('/');
    };

    return (
        <>
            <Head>
                <title>Sign in - {getConfig().publicRuntimeConfig.app.pageTitle}</title>
            </Head>

            <TheNavBarWithState />
            <Authentication>
                <SignUpForm submitSignUpHandler={_submitSignUpHandler} />
            </Authentication>
        </>
    );
};

export default SignUpPage;
