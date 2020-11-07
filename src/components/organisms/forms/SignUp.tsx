import React, { useState } from 'react';

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
        <form className='d-flex flex-column'>
            <label>
                Email address
                <br />
                <input name='email' type='email' value={registrationDetails.email} onChange={_handleCredentialChange} />
            </label>
            <label>
                Password
                <br />
                <input
                    name='password'
                    type='password'
                    value={registrationDetails.password}
                    onChange={_handleCredentialChange}
                />
            </label>
            <label>
                First name
                <br />
                <input name='firstName' value={registrationDetails.firstName} onChange={_handleCredentialChange} />
            </label>
            <label>
                Last name
                <br />
                <input
                    name='lastName'
                    type='email'
                    value={registrationDetails.lastName}
                    onChange={_handleCredentialChange}
                />
            </label>
            <button type='submit' className='rounded' onClick={_submitForm}>
                Continue and start trading
            </button>
        </form>
    );
};
