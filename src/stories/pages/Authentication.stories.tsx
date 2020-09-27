import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SignInForm } from '~/components/organisms/forms/SignIn';
import { Authentication, AuthenticationProps } from '~/components/templates/Authentication';
import { SignUpForm } from '~/components/organisms/forms/SignUp';

export default {
    title: 'Pages/Authentication',
    component: Authentication,
} as Meta;

const SignInTemplate: Story<AuthenticationProps> = (args) => (
    <Authentication {...args}>
        <SignInForm submitSignInHandler={() => null} />
    </Authentication>
);

export const SignInEmpty = SignInTemplate.bind({});

const SignUpTemplate: Story<AuthenticationProps> = (args) => (
    <Authentication {...args}>
        <SignUpForm submitSignUpHandler={() => null} />
    </Authentication>
);

export const SignUpEmpty = SignUpTemplate.bind({});
