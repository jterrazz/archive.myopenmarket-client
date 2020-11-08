import React, { useState } from 'react';
import Link from 'next/link';

export interface SignUpFormProps {
    submitSignUpHandler: (any) => Promise<void>;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ submitSignUpHandler }) => {
    const [registrationDetails, setRegistrationDetails] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });

    const _handleCredentialChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setRegistrationDetails({
            ...registrationDetails,
            [name]: value,
        });
    };

    const _submitForm = async (event) => {
        event.preventDefault();
        return submitSignUpHandler(registrationDetails);
    };

    return (
        <form>
            <div className='text-md-center text-left mb-4'>
                <h1 className='text--xl'>Register</h1>
            </div>
            <label className='w-100'>
                <span className='text--sm font-weight-500'>Email address</span>
                <br />
                <input
                    className='tom-input--white w-100 mt-1 input--md'
                    name='email'
                    type='email'
                    value={registrationDetails.email}
                    onChange={_handleCredentialChange}
                />
            </label>
            <label className='w-100'>
                <span className='text--sm font-weight-500'>Password</span>
                <br />
                <input
                    className='tom-input--white w-100 mt-1 input--md'
                    name='password'
                    type='password'
                    value={registrationDetails.password}
                    onChange={_handleCredentialChange}
                />
            </label>
            <label className='w-100'>
                <span className='text--sm font-weight-500'>First name</span>
                <br />
                <input
                    className='tom-input--white w-100 mt-1 input--md'
                    name='firstName'
                    type='text'
                    value={registrationDetails.firstName}
                    onChange={_handleCredentialChange}
                />
            </label>
            <label className='w-100'>
                <span className='text--sm font-weight-500'>Last name</span>
                <br />
                <input
                    className='tom-input--white w-100 mt-1 input--md'
                    name='lastName'
                    type='text'
                    value={registrationDetails.lastName}
                    onChange={_handleCredentialChange}
                />
            </label>
            <button type='submit' className='rounded button--primary button--md mt-2 w-100' onClick={_submitForm}>
                Join the community
            </button>
            <Link href='/signin'>
                <a>
                    <button className='rounded button--md border-0 bg-gray--light mt-3 w-100'>
                        <span className='text-muted'>Already have an account ?</span> <span>Log in</span>
                    </button>
                </a>
            </Link>
        </form>
    );
};
