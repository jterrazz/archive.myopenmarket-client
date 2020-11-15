import React from 'react';
import { useRouter } from 'next/router';
import * as apiClient from '~/services/api';

import { SignInForm } from '~/components/organisms/forms/SignIn';
import { Authentication } from '~/components/templates/Authentication';
import { TheNavBarContainerWithState } from '~/components/organisms/TheNavBar';
import { Head } from '~/components/atoms/Head';

const SignInPage = () => {
    const router = useRouter();

    const _submitSignInHandler = async (credentials) => {
        await apiClient.signIn(credentials);
        await router.push('/');
    };

    return (
        <>
            <Head />

            <TheNavBarContainerWithState>
                <Authentication>
                    <SignInForm submitSignInHandler={_submitSignInHandler} />
                </Authentication>
            </TheNavBarContainerWithState>
        </>
    );
};

export default SignInPage;
