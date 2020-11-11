import React, { ReactChild } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

import { TheNavBarLinkWithImageProps, TheNavBarLinkWithImage } from '~/components/atoms/navbar/TheNavbarLinkWithImage';
import { TheNavBarUserSection } from '~/components/molecules/navbar/TheNavBarUserSection';
import { TheNavBarGroup } from '~/components/molecules/navbar/TheNavBarGroup';

const APPLICATION_LINKS: Array<TheNavBarLinkWithImageProps> = [
    {
        router: {
            pathname: publicRuntimeConfig.app.router.home,
        },
        title: 'Home',
        imageSource: {
            active: '/images/icons8-work-from-home-48.active.png',
            default: '/images/icons8-work-from-home-48.png',
        },
    },
    {
        router: {
            pathname: publicRuntimeConfig.app.router.discover,
        },
        title: 'Discover',
        imageSource: {
            active: '/images/icons8-compass-north-48.active.png',
            default: '/images/icons8-compass-north-48.png',
        },
    },
];

const STORE_LINKS: Array<TheNavBarLinkWithImageProps> = [
    {
        router: {
            pathname: publicRuntimeConfig.app.router.store,
            query: {
                id: '12',
            },
        },
        title: 'Carrefour',
        imageSource: {
            active: '/images/user-profile.svg',
            default: '/images/user-profile.svg',
        },
    },
    {
        router: {
            pathname: publicRuntimeConfig.app.router.store,
            query: {
                id: '34',
            },
        },
        title: 'Post malone',
        imageSource: {
            active: '/images/user-profile.svg',
            default: '/images/user-profile.svg',
        },
    },
];

export interface TheNavBarProps {
    className?: string;
    children?: ReactChild;
    style?: any;
}

export const TheNavBar: React.FC<TheNavBarProps> = ({ style, className }) => {
    const _renderTitleSection = () => (
        <div className='p-4'>
            <Link href='/'>
                <a>
                    <div className='font-weight-bold'>
                        <span className='bg-dark p-1 text-white'>OPEN</span> MARKET
                    </div>
                </a>
            </Link>
            <p className='mt-2 small'>Buy with your merchants</p>
        </div>
    );

    return (
        <nav style={style} className={`${className} d-flex flex-column`}>
            {_renderTitleSection()}

            <div className='overflow-auto flex-fill px-4'>
                <div className='bg-gray--light rounded small p-2 mb-4 text-muted text-center'>Search</div>

                <TheNavBarGroup className='pb-4' title='Application'>
                    <ul className='font-weight-500'>
                        {APPLICATION_LINKS.map((link) => (
                            <TheNavBarLinkWithImage key={JSON.stringify(link.router)} {...link} />
                        ))}
                    </ul>
                </TheNavBarGroup>

                <TheNavBarGroup className='py-4 font-weight-500' title='Stores'>
                    <ul>
                        {STORE_LINKS.map((link) => (
                            <TheNavBarLinkWithImage key={JSON.stringify(link.router)} {...link} />
                        ))}
                    </ul>
                </TheNavBarGroup>

                <TheNavBarGroup className='py-4' title='Tags / Categories'>
                    <ul>
                        <li className='my-1 text-muted small'>#electronics</li>
                        <li className='my-1 text-muted small'>#apple</li>
                        <li className='my-1 text-muted small'>#food</li>
                    </ul>
                </TheNavBarGroup>
            </div>

            <TheNavBarUserSection className='p-4 border-top' />
        </nav>
    );
};

export const TheNavBarContainer: React.FC<TheNavBarProps> = ({ children }) => {
    const NAVBAR_WIDTH = 270;

    return (
        <div className='position-relative vh-100'>
            <TheNavBar style={{ width: NAVBAR_WIDTH, top: 0, bottom: 0 }} className='border-right position-fixed' />
            <div style={{ marginLeft: NAVBAR_WIDTH }}>{children}</div>
        </div>
    );
};

export const TheNavBarContainerWithState = ({ children }) => {
    // const authenticatedUser = {
    //     id: 42,
    // };

    return <TheNavBarContainer>{children}</TheNavBarContainer>;
};
