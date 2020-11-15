import React, { ReactChild } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { TFunction } from 'next-i18next';
import { withTranslation } from '~/services/i18n';

const { publicRuntimeConfig } = getConfig();

import { TheNavBarLinkWithImageProps, TheNavBarLinkWithImage } from '~/components/atoms/navbar/TheNavbarLinkWithImage';
import { TheNavBarUserSection, TheNavBarUserProps } from '~/components/molecules/navbar/TheNavBarUserSection';
import { TheNavBarGroup } from '~/components/molecules/navbar/TheNavBarGroup';

const APPLICATION_LINKS: (any) => Array<TheNavBarLinkWithImageProps> = (t: TFunction) => [
    {
        router: {
            pathname: publicRuntimeConfig.app.router.home,
        },
        title: t('home'),
        imageSource: {
            active: '/images/icons8-work-from-home-48.active.png',
            default: '/images/icons8-work-from-home-48.png',
        },
    },
    {
        router: {
            pathname: publicRuntimeConfig.app.router.discover,
        },
        title: t('discover'),
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
    user?: TheNavBarUserProps;
    t?: TFunction;
}

export const TheNavBarComponent: React.FC<TheNavBarProps> = ({ style, className, user, t }) => {
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

                <TheNavBarGroup className='pb-4' title={t('group-title-application')}>
                    <ul className='font-weight-500'>
                        {APPLICATION_LINKS(t).map((link) => (
                            <TheNavBarLinkWithImage key={JSON.stringify(link.router)} {...link} />
                        ))}
                    </ul>
                </TheNavBarGroup>

                <TheNavBarGroup className='py-4 font-weight-500' title={t('group-title-stores')}>
                    <ul>
                        {STORE_LINKS.map((link) => (
                            <TheNavBarLinkWithImage key={JSON.stringify(link.router)} {...link} />
                        ))}
                    </ul>
                </TheNavBarGroup>

                <TheNavBarGroup className='py-4' title={t('group-title-categories')}>
                    <ul>
                        <li className='my-1 text-muted small'>#electronics</li>
                        <li className='my-1 text-muted small'>#apple</li>
                        <li className='my-1 text-muted small'>#food</li>
                    </ul>
                </TheNavBarGroup>

                <Link href='/support'>
                    <a className='small text-muted font-weight-500'>Support</a>
                </Link>

                <Link href='/' locale='fr'>
                    <a>To /fr/another</a>
                </Link>
            </div>

            <TheNavBarUserSection user={user} className='p-4 border-top' />
        </nav>
    );
};

// @ts-ignore
export const TheNavBar = withTranslation('navigation')(TheNavBarComponent);

export const TheNavBarContainer: React.FC<TheNavBarProps> = ({ children, user }) => {
    const NAVBAR_WIDTH = 270;

    return (
        <div>
            <TheNavBar
                // @ts-ignore
                user={user}
                style={{ width: NAVBAR_WIDTH, top: 36, bottom: 0 }}
                className='border-right position-fixed'
            />
            <div style={{ marginLeft: NAVBAR_WIDTH, paddingTop: 36 }}>{children}</div>
        </div>
    );
};

export const TheNavBarContainerWithState = ({ children }) => {
    // const authenticatedUser = null;
    const authenticatedUser: TheNavBarUserProps = {
        name: 'Jean-Baptiste',
    };

    return <TheNavBarContainer user={authenticatedUser}>{children}</TheNavBarContainer>;
};
