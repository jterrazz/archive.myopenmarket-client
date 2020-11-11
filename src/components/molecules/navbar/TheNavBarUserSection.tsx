import React from 'react';
import Link from 'next/link';

export interface TheNavBarUserSectionProps {
    className?: string;
    user?: {
        name: string;
        image?: string;
    };
}

export const TheNavBarUserSection: React.FC<TheNavBarUserSectionProps> = ({ user, className }) => {
    const _authenticationSection = () => (
        <div className={'d-flex align-items-center ' + className}>
            <li className='flex-fill'>
                <Link href='/signin'>
                    <a>
                        <button className='button--light w-100'>Log in</button>
                    </a>
                </Link>
            </li>

            <li className='flex-fill'>
                <Link href='/signup'>
                    <a>
                        <button className='button--primary w-100'>Sign up</button>
                    </a>
                </Link>
            </li>
        </div>
    );

    const _userSection = () => (
        <div className={'d-flex align-items-center ' + className}>
            <img src='/images/user-profile.svg' className='size-2 mr-2' />
            <div className='text-muted'>My name</div>
        </div>
    );

    return user ? _userSection() : _authenticationSection();
};
