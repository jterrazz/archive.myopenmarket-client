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
            <label>
                Email
                <input name='email' type='email' value={credentials.email} onChange={_handleCredentialChange} />
            </label>
            <label>
                Password
                <input
                    name='password'
                    type='password'
                    value={credentials.password}
                    onChange={_handleCredentialChange}
                />
            </label>
            <button type='submit' className='rounded' onClick={_submitForm}>
                Log in
            </button>
        </form>
    );
};
