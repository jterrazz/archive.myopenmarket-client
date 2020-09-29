import React, { useState } from 'react';

export interface SignInFormProps {
    submitSignInHandler: (any) => Promise<void>;
}

export const SignInForm: React.FC<SignInFormProps> = ({ submitSignInHandler }) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const _handleCredentialChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const _submitForm = async (event: React.MouseEvent | React.KeyboardEvent) => {
        event.preventDefault();
        await submitSignInHandler(credentials);
    };

    return (
        <form>
            <div className='text-md-center text-left'>
                <h1 className='text--xl mb-4'>Log in to The Open Market</h1>
            </div>
            <label className='w-100'>
                <span className='text--sm font-weight-bold'>Email</span>
                <br />
                <input
                    className='tom-input--white w-100 mt-1 p-2'
                    name='email'
                    type='email'
                    value={credentials.email}
                    onChange={_handleCredentialChange}
                />
            </label>
            <label className='w-100'>
                <span className='text--sm font-weight-bold'>Password</span>
                <br />
                <input
                    className='tom-input--white w-100 mt-1 p-2'
                    name='password'
                    type='password'
                    value={credentials.password}
                    onChange={_handleCredentialChange}
                />
            </label>
            <br />
            <button type='submit' className='rounded button--primary p-3 mt-2 w-100' onClick={_submitForm}>
                Log in
            </button>
            <button
                type='submit'
                className='rounded button--md border-0 bg-gray--light p-3 mt-3 w-100'
                onClick={_submitForm}
            >
                Don't have an account ? <span>Sign up</span>
            </button>
        </form>
    );
};
