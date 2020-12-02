import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export interface TheNavBarUserProps {
    name: string;
    imageSource?: string;
}

export interface TheNavBarUserSectionProps {
    className?: string;
    user?: TheNavBarUserProps;
}

export const TheNavBarUserSection: React.FC<TheNavBarUserSectionProps> = ({ user, className }) => {
    user.imageSource = user.imageSource || publicRuntimeConfig.app.assets.profile;

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
            <img src={user.imageSource} className='size-2 mr-2' />
            <div className='text-muted'>{user.name}</div>

            <Link href='/' locale='fr'>
                <a>To /fr/another</a>
            </Link>
        </div>
    );

    return user ? _userSection() : _authenticationSection();
};
