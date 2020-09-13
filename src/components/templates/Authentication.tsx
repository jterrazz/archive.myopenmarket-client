import React, { useState } from 'react';
import { useRouter } from 'next/router';

import * as apiClient from '~/services/api';

const Authentication = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleCredentialChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const submitForm = async (event) => {
        event.preventDefault();

        await apiClient.signIn(credentials);
        await router.push('/');
    };

    return (
        <form>
            <label>
                Email
                <input name='email' type='email' value={credentials.email} onChange={handleCredentialChange} />
            </label>
            <label>
                Password
                <input name='password' type='password' value={credentials.password} onChange={handleCredentialChange} />
            </label>
            <button type='submit' className='rounded' onClick={submitForm}>
                Log in
            </button>
        </form>
    );
};

export default Authentication;
